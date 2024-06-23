from PIL import Image

def resize_spritesheet(input_path, output_path, new_height=32):
    # Open an image file
    with Image.open(input_path) as img:
        # Get original dimensions
        original_width, original_height = img.size
        
        # Calculate the new width to maintain aspect ratio
        new_width = int((new_height / original_height) * original_width)
        
        # Resize the image with nearest neighbor resampling (pixel-perfect)
        resized_img = img.resize((new_width, new_height), Image.NEAREST)
        
        # Save the resized image
        resized_img.save(output_path)
        print(f"Image saved to {output_path}")

# Example usage
resize_spritesheet('scripts/atlas/shangrila_atlas.png', 'scripts/resized/shangrila_atlas_32.png')
