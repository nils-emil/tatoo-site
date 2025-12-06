#!/bin/bash

echo "Starting npm build..."
npm run build

if [ $? -eq 0 ]; then
  echo "npm build completed successfully."
else
  echo "Error: npm build failed. Aborting."
  exit 1
fi

BUILD_DIR="out"
ZIP_NAME="build-$(date +%Y%m%d-%H%M%S).zip"

if [ -d "$BUILD_DIR" ]; then
  echo "Zipping the build directory ($BUILD_DIR)..."
  
  zip -r "$ZIP_NAME" "$BUILD_DIR"
  
  if [ $? -eq 0 ]; then
    echo "✅ Successfully created archive: $ZIP_NAME"
    echo "Contents of '$BUILD_DIR' have been compressed."
  else
    echo "Error: Zipping failed."
    exit 1
  fi
else
  echo "Error: Build output directory '$BUILD_DIR' not found after build."
  exit 1
fi

exit 0