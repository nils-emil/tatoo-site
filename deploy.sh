#!/bin/bash

rm -rf out
npm run build

# --- HARD-CODED SETTINGS ---
LOCAL_FOLDER="out"              # Local folder to upload
REMOTE_USER="root"              # Remote user
SERVER_IP="95.216.209.117"      # Server IP
REMOTE_PATH="/var/www/html/"    # Remote path
WEB_USER="www-data"             # Web server user
WEB_GROUP="www-data"            # Web server group

echo "Deleting contents of $REMOTE_PATH on $REMOTE_USER@$SERVER_IP ..."
ssh "$REMOTE_USER@$SERVER_IP" "rm -rf ${REMOTE_PATH}*"

echo "Uploading contents of $LOCAL_FOLDER to $REMOTE_USER@$SERVER_IP:$REMOTE_PATH ..."
scp -r "$LOCAL_FOLDER"/* "$REMOTE_USER@$SERVER_IP:$REMOTE_PATH"

echo "Setting correct permissions for $REMOTE_PATH ..."
ssh "$REMOTE_USER@$SERVER_IP" "
    chown -R $WEB_USER:$WEB_GROUP $REMOTE_PATH &&
    find $REMOTE_PATH -type d -exec chmod 755 {} \; &&
    find $REMOTE_PATH -type f -exec chmod 644 {} \;
"

echo "Upload complete!"


LOCAL_NGINX_CONF="nginx.conf"                                # Local Nginx config file (must exist in script directory)
REMOTE_NGINX_TARGET="/etc/nginx/sites-enabled/default"      # Target config file location on server

echo "--- UPLOADING NEW NGINX CONFIGURATION ---"
# Copy the local nginx.conf to a temporary location on the server
TEMP_NGINX_PATH="/tmp/${LOCAL_NGINX_CONF}"
scp "$LOCAL_NGINX_CONF" "$REMOTE_USER@$SERVER_IP:$TEMP_NGINX_PATH"

echo "--- APPLYING NGINX CONFIG AND RESTARTING SERVICE ---"
ssh "$REMOTE_USER@$SERVER_IP" "
    # Move the new config file into the sites-enabled directory
    mv $TEMP_NGINX_PATH $REMOTE_NGINX_TARGET &&

    # Test the new Nginx configuration for syntax errors (CRITICAL SAFETY STEP)
    echo 'Testing Nginx configuration...'
    if nginx -t; then
        # If the test passed, restart Nginx to apply changes
        echo 'Nginx configuration test successful. Restarting Nginx...'
        systemctl restart nginx
    else
        echo '!!! Nginx configuration test FAILED. Restart aborted. Check syntax on server. !!!'
        # Optional: You may want to roll back the config here if the test fails
    fi
"

echo "--- DEPLOYMENT AND CONFIG UPDATE COMPLETE! 🥳 ---"