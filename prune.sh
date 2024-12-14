#!/bin/bash

# Check if the user provided a folder
if [ -z "$1" ]; then
    echo "Usage: $0 <folder> [--actually-delete]"
    exit 1
fi

# Get the folder from the first argument
TARGET_FOLDER=$1

# Default to dry run
ACTUALLY_DELETE=false
if [ "$2" == "--actually-delete" ]; then
    ACTUALLY_DELETE=true
fi

# Find and process files
echo "Searching for files larger than 25MB in $TARGET_FOLDER..."
find "$TARGET_FOLDER" -type f -size +25M | while read -r FILE; do
    if $ACTUALLY_DELETE; then
        echo "Deleting: $FILE"
        rm -f "$FILE"
    else
        echo "[DRY RUN] Found: $FILE"
    fi
done

# Final message
if $ACTUALLY_DELETE; then
    echo "Deletion complete."
else
    echo "Dry run complete. No files were deleted."
fi
