from PIL import Image

def rotate_image(input_image_path, output_image_path, degrees):
    # Open an image file
    image = Image.open(input_image_path)
    
    # Rotate the image
    rotated_image = image.rotate(degrees, expand=True)
    
    # Save rotated image
    rotated_image.save(output_image_path)
    
    print(f"Image rotated by {degrees} degrees and saved to {output_image_path}")

# Example usage
rotate_image('frontend/src/assets/characters/artist_closeup.png', 'frontend/src/assets/characters/artist_rotated.png', -150)
rotate_image('frontend/src/assets/characters/doctor_closeup.png', 'frontend/src/assets/characters/doctor_rotated.png', 126)
rotate_image('frontend/src/assets/characters/mechanic_closeup.png', 'frontend/src/assets/characters/mechanic_rotated.png', -190)
