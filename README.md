# Julia Jonsson - Tennis Portfolio Website

A modern, responsive static website showcasing Julia Jonsson, 14-year-old Brazilian tennis champion from Rio de Janeiro.

## 🌟 Features

- **Pure HTML/CSS/JS** - No build process required
- **Fully Responsive** - Mobile-first design
- **Bilingual** - Swedish/English language toggle
- **Accessibility** - WCAG compliant with proper ARIA labels
- **SEO Optimized** - Meta tags, Open Graph, JSON-LD schema
- **Fast Performance** - Optimized images and lazy loading
- **Clean URLs** - Configured for Vercel deployment

## 📁 Structure

```
/
├── index.html           # Home page with hero and key stats
├── about.html          # Biography and career journey
├── achievements.html   # Awards and accomplishments
├── partners.html       # Partnership opportunities
├── gallery.html        # Photo gallery
├── contact.html        # Contact form and information
├── 404.html           # Custom error page
├── vercel.json        # Vercel configuration
└── assets/
    ├── css/
    │   └── styles.css  # Complete styling
    ├── js/
    │   └── main.js     # Interactive features
    ├── images/         # All photos (11 images)
    └── docs/           # Media kit (profile document)
```

## 🎨 Design

- **Fonts**: Poppins (headings) + Inter (body)
- **Primary Color**: #0066cc (Blue)
- **Secondary Color**: #ff6b35 (Orange)
- **Modern Layout**: CSS Grid and Flexbox
- **Animations**: Smooth transitions and scroll effects

## 🚀 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from project root:
   ```bash
   vercel
   ```

4. Follow prompts:
   - **Framework Preset**: Other
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
   - **Development Command**: (leave empty)

### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository OR drag & drop the folder
4. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: /
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
5. Click "Deploy"

### Important Notes

- The `vercel.json` configuration enables clean URLs (no .html extensions)
- All asset paths are root-relative (`/assets/...`)
- No build process is required - this is a static site
- The site will be live at `https://your-project.vercel.app`

## 📝 Content Sources

### Text Content
All website copy was extracted from:
- **File**: `assets/docs/Perfil – Julia Jonsson.txt`
- **Used in**: All pages (bio, achievements, training history, contact info)

### Images (11 Total)
All images from `assets/images/` directory:

1. **heroJulia.png** - Main hero image (homepage)
2. **Hero2.png** - Secondary hero/action shot
3. **Julia 4 anos.png** - Julia at 4 years old (early years section)
4. **buenos aires centre court.png** - Buenos Aires tournament
5. **buenos aires premie.png** - Buenos Aires championship trophy
6. **convocacao copa das federacoes 2025.png** - Copa das Federações 2025 call-up
7. **julia primeiro premie.png** - First trophy/achievement
8. **Premie 10 anos federacao paulista.png** - Federação Paulista at 10 years
9. **Premie CBT Rio 2025.png** - National CBT championship 2025
10. **Primeiro premie federacao paulista (2).png** - Another Federação Paulista trophy
11. **Skärmbild 2025-10-03 150818.png** - Recent tournament screenshot

### Hero Image Selected
**heroJulia.png** was chosen as the main hero image for the homepage based on its quality and composition.

## 🌐 Pages Overview

### Home (`index.html`)
- Hero section with call-to-action
- Key statistics (4 stat cards)
- About preview
- Recent achievements
- Partnership CTA

### About (`about.html`)
- Early years biography
- Career timeline (2015-2025)
- Coach profile (Hernán Gumy)
- Current training information

### Achievements (`achievements.html`)
- Highlighted recent wins
- Achievements organized by year
- Gallery preview with trophy photos

### Partners (`partners.html`)
- Partnership benefits (6 cards)
- Partnership goals
- Media kit download link
- Investment opportunity details

### Gallery (`gallery.html`)
- Filterable photo gallery (All/Trophies/Action/Tournaments)
- 11 images with overlays
- Link to external Google Photos album

### Contact (`contact.html`)
- Contact information (Johan Jonsson)
- Contact form (Formspree integration placeholder)
- FAQ section
- Media kit download

### 404 (`404.html`)
- Custom error page
- Back to home button
- Quick links to main pages

## 🛠 Customization

### Update Contact Form
Replace the Formspree placeholder in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Get your form ID from [formspree.io](https://formspree.io)

### Update Google Photos Link
The external gallery link in `gallery.html` currently points to:
```
https://photos.app.goo.gl/vDNFXU3UXCRogNf26
```

### Add More Images
1. Place images in `assets/images/`
2. Add gallery items in `gallery.html`:
```html
<div class="gallery-item" data-category="trophies">
    <img src="/assets/images/your-image.png" alt="Description" loading="lazy">
    <div class="gallery-overlay">
        <h3>Title</h3>
    </div>
</div>
```

### Change Colors
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #ff6b35;
    /* etc. */
}
```

## ⚡ Performance

- **Lighthouse Score Target**: 90+
- **Lazy Loading**: Enabled for all images except hero
- **Optimized Assets**: CSS and JS are minification-ready
- **Clean Code**: Well-commented and organized
- **Accessibility**: ARIA labels, focus states, semantic HTML

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Maintenance

### Adding New Achievements
1. Edit `achievements.html`
2. Add to appropriate year section
3. Update stats on homepage if needed

### Updating Bio
1. Edit `about.html`
2. Update timeline if adding new milestones

### Language Toggle
All translatable content uses `data-lang-sv` and `data-lang-en` attributes. To add/edit translations:
1. Find the Swedish text with `data-lang-sv`
2. Find the corresponding English text with `data-lang-en`
3. Update both versions

## 📞 Contact

**Manager & Contact Person**: Johan Jonsson  
**Phone**: +55 11 99926-0051  
**Email**: oi@johan.com.br  
**Location**: Rio de Janeiro (Ipanema), Brazil

## 📄 License

© 2025 Julia Jonsson. All rights reserved.

---

**Built with** ❤️ **for Julia's tennis journey**

