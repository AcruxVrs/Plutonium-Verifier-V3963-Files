import os
import hashlib
import shutil

def generate_checksum(file_path, algorithm='sha256'):
    """Generate checksum for a file."""
    hash_function = hashlib.new(algorithm)
    with open(file_path, 'rb') as f:
        for chunk in iter(lambda: f.read(4096), b''):
            hash_function.update(chunk)
    return hash_function.hexdigest()

def verify_files(original_file, copied_file):
    """Verify if two files have the same content."""
    original_checksum = generate_checksum(original_file)
    copied_checksum = generate_checksum(copied_file)
    
    if original_checksum == copied_checksum:
        print(f"File integrity verified: {original_file} and {copied_file} - contents match.")
        return True
    else:
        print(f"File integrity verification failed: {original_file} and {copied_file} - contents do not match.")
        return False

def check_files(main_folder, main_copy_folder):
    """Check files in the main folder and its subfolders."""
    total_replaced = 0

    # Iterate over files in the main copy folder
    for root, dirs, files in os.walk(main_copy_folder):
        for copied_file in files:
            copied_path = os.path.join(root, copied_file)
            relative_path = os.path.relpath(copied_path, main_copy_folder)
            original_path = os.path.join(main_folder, relative_path)

            # Create destination directory if it doesn't exist
            os.makedirs(os.path.dirname(original_path), exist_ok=True)

            # Check if the corresponding file exists in the main folder
            if os.path.isfile(original_path):
                if not verify_files(original_path, copied_path):
                    total_replaced += 1
                    shutil.copyfile(copied_path, original_path)
                    print(f"Replaced {original_path} with {copied_path}")
            else:
                # If the corresponding file is missing, copy from the copy folder
                shutil.copyfile(copied_path, original_path)
                total_replaced += 1
                print(f"Copied missing file {copied_path} to {original_path}")

    print("\nReplacement Summary:")
    print(f"Total files replaced: {total_replaced}")

# Example usage:
main_folder = os.path.join(os.environ['LOCALAPPDATA'], 'Plutonium')
main_copy_folder = './PlutoniumCopy - Copy'

check_files(main_folder, main_copy_folder)