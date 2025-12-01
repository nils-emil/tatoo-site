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
