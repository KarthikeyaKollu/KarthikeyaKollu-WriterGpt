import os

def print_directory_structure(root_dir, prefix=''):
    try:
        # Loop through the items in the current directory
        for item in os.listdir(root_dir):
            # Full path of the item
            item_path = os.path.join(root_dir, item)

            # Skip hidden folders (starting with .) and 'node_modules'
            if item.startswith('.') or item == 'node_modules':
                continue

            # Print the current folder or file
            print(f'{prefix}{item}')

            # If the item is a directory, recurse into it
            if os.path.isdir(item_path):
                print_directory_structure(item_path, prefix + '  ')
    
    except PermissionError:
        # Ignore directories we don't have permission to access
        print(f'{prefix}[Permission Denied]')

# Provide the root directory you want to scan
root_directory = '.'  # Current directory

# Call the function to print the structure
print_directory_structure(root_directory)
