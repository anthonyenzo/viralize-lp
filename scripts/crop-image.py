from PIL import Image

def crop_sidebar():
    path = "public/images/dashboard-preview.png"
    out_path = "public/images/dashboard-mobile-sidebar.png"
    
    img = Image.open(path)
    w, h = img.size
    
    # We want to crop the sidebar. Let's assume sidebar is roughly 25% of the total width
    # and we want to keep most of the height to show the tools.
    # Let's crop from x=0 to x=w*0.35, y=0 to y=h*0.8
    
    crop_w = int(w * 0.35)
    crop_h = int(h * 0.9)
    
    cropped = img.crop((0, 0, crop_w, crop_h))
    cropped.save(out_path)
    print(f"Cropped image saved to {out_path} with size {crop_w}x{crop_h}")

if __name__ == "__main__":
    crop_sidebar()
