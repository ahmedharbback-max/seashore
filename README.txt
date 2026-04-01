==================================================
  SEASHORE HYDE PARK — North Coast Website
  Complete Static Website Package
==================================================

📁 FOLDER STRUCTURE:
─────────────────────
seashore-site/
├── index.html          ← Main page (open this in browser)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← All JavaScript
├── images/
│   ├── hero.webp               ← Hero background
│   ├── about.webp              ← About section image
│   ├── gallery/
│   │   ├── img1.webp – img6.webp  ← Gallery photos
│   └── units/
│       ├── chalet.webp
│       ├── villa.webp
│       ├── townhouse.webp
│       ├── twinhouse.webp
│       ├── duplex.webp
│       └── apartment.webp
└── README.txt          ← This file


🖼️ HOW TO REPLACE IMAGES WITH REAL PHOTOS:
─────────────────────────────────────────────
The current images are placeholders. To replace them with real
photos from the websites you provided:

1. Go to: https://www.nawy.com/compound/522-hyde-park-north-seashore
   Right-click on each photo → "Save Image As"

   Save as:
   - Hero image          → images/hero.webp
   - Resort/about photo  → images/about.webp
   - Gallery photo 1     → images/gallery/img1.webp
   - Gallery photo 2     → images/gallery/img2.webp
   - Gallery photo 3     → images/gallery/img3.webp
   - Gallery photo 4     → images/gallery/img4.webp
   - Gallery photo 5     → images/gallery/img5.webp

2. Go to each phase page on Nawy:
   - Beach Chalets   → images/units/chalet.webp
   - Town Island     → images/units/villa.webp
   - Lagoon Town     → images/units/townhouse.webp
   - Shore Ville     → images/units/twinhouse.webp
   - Waterside       → images/units/duplex.webp
   - Shore Residence → images/units/apartment.webp

3. Images can be JPG, PNG or WebP — just keep the same filename
   (or update the <img src="..."> tags in index.html to match)


🌐 HOW TO UPLOAD TO WORDPRESS:
─────────────────────────────────────────────
OPTION A — Simplest (Recommended):
  1. Install plugin: "WP File Manager" or "All-in-One WP Migration"
  2. Upload the entire seashore-site/ folder to:
     /wp-content/uploads/seashore/
  3. Access your page at:
     https://yoursite.com/wp-content/uploads/seashore/index.html

OPTION B — As a WordPress Page (via Elementor):
  1. Create a new Page → set template to "Elementor Canvas" (no header/footer)
  2. Add an "HTML" widget
  3. Paste the contents of index.html

OPTION C — As a Custom WordPress Theme Page:
  1. Create folder: /wp-content/themes/your-theme/seashore/
  2. Upload all files there
  3. Create page-seashore.php in your theme and include index.html content

OPTION D — Static Hosting (Fastest):
  Upload the seashore-site/ folder to:
  - Netlify Drop (drag & drop at app.netlify.com)
  - Vercel
  - GitHub Pages
  Then link from your WordPress site


📞 CONTACT INFO IN THE WEBSITE:
─────────────────────────────────────────────
Phone: 01274230856
WhatsApp: https://wa.me/201274230856

To change the phone number, search for "01274230856" in:
  - index.html (7 occurrences)
  - css/style.css (0 occurrences)


🎨 COLORS:
─────────────────────────────────────────────
Primary dark: #04080f (near black)
Navy blue:    #0f3460
Dark blue:    #16213e
Gold accent:  #d4a843
Gold light:   #e8c878

To change colors, edit css/style.css — search for :root { ... }


==================================================
  Need help? All content sourced from:
  - hydeparkdevelopments.com
  - nawy.com
  - propertyfinder.eg
==================================================
