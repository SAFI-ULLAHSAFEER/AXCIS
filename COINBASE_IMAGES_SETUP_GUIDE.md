# Coinbase Case Study - Image Setup Guide

## ⚡ Quick Start

You need to save 10 images for the Coinbase case study. Follow these steps:

### 1. Save the Images

Save each image from the chat attachments with these exact filenames in the directory:
`d:\AXCIS\frontend\public\images\case-study\`

**Required filenames:**
- `coinbase-1.jpg` - Office entrance with Coinbase branding
- `coinbase-2.jpg` - Full server rack view (front)
- `coinbase-3.jpg` - Top section with network switches
- `coinbase-4.jpg` - Detailed cable management view
- `coinbase-5.jpg` - Rack from different angle
- `coinbase-6.jpg` - Another rack perspective
- `coinbase-7.jpg` - Lower section with servers and UPS
- `coinbase-8.jpg` - Close-up server hardware
- `coinbase-9.jpg` - Cabling focus view
- `coinbase-10.jpg` - Complete rack setup

### 2. Image Specifications

- **Format:** JPG
- **Recommended resolution:** 1200×900 or higher
- **Aspect ratio:** 4:3 or 16:9
- **File size:** Optimized for web (under 500KB each recommended)

### 3. How to Save from Chat

1. Right-click each image in the chat
2. Select "Save Image As..."
3. Navigate to: `d:\AXCIS\frontend\public\images\case-study\`
4. Use the exact filename from the list above
5. Ensure format is JPG

### 4. Verify Setup

After saving all 10 images, run this command to verify:

```cmd
dir "d:\AXCIS\frontend\public\images\case-study\coinbase-*.jpg"
```

You should see 10 JPG files listed.

### 5. Test the Website

1. Start the development server:
   ```cmd
   cd d:\AXCIS\frontend
   npm run dev
   ```

2. Open the site in your browser (usually http://localhost:5173)

3. Navigate to "Our Work" from the main menu

4. You should see the Coinbase case study with all images in the gallery

## ✅ What's Already Done

✓ Case study page updated with Coinbase content
✓ Navigation configured ("Our Work" menu item)
✓ Homepage case studies section added with Coinbase card
✓ Click handlers added to navigate to detail page
✓ Professional content written based on infrastructure images
✓ Tools & technologies section detailed
✓ Gallery configured for 10 images

## 🎨 Case Study Details

The case study page includes:
- **Executive Summary** - Overview of Coinbase infrastructure deployment
- **Challenge** - High-availability requirements for financial services
- **Solution & Outcome** - AXCIS field engineering implementation
- **Tools & Technologies** - Detailed breakdown:
  - Networking Equipment (Juniper, Cisco Meraki, Patch Panels)
  - Power & Management (APC Smart-UPS, PDUs)
  - Infrastructure & Cabling (Cat6a, Fiber Optic, Rack-and-Stack)
  - Deployment & Operations (Field Engineering, 24/7 Support)
- **Project Gallery** - 10 professional infrastructure images
- **Key Metrics** - 99.999% uptime, <4hrs SLA, 100% precision

## 📍 File Locations

- Case study page: `d:\AXCIS\frontend\src\pages\CaseStudyPage.jsx`
- Constants/data: `d:\AXCIS\frontend\src\constants\homepage.js`
- Images directory: `d:\AXCIS\frontend\public\images\case-study\`
- Main app: `d:\AXCIS\frontend\src\App.jsx`

## 🚀 Next Steps

1. Save all 10 images as described above
2. Test the website locally
3. Verify images load correctly in the gallery
4. Deploy to production when ready

## 💡 Tips

- Use image compression tools to optimize file sizes
- Ensure images are professional quality
- All images should showcase your infrastructure work clearly
- Consider adding watermarks if needed

---

**Need help?** Check the README.md in the case-study images folder for more details.
