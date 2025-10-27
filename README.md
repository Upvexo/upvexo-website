# Upvexo Website

Modern, professional website for Upvexo - Elevate Beyond Limits

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/upvexo-website.git
cd upvexo-website
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build for Production

### For GitHub Pages

1. Update `next.config.js` - Replace `/upvexo-website` with your repository name

2. Build and export
```bash
npm run export
```

3. Deploy to GitHub Pages
```bash
# Create .nojekyll file
touch out/.nojekyll

# Push to gh-pages branch
git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

4. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: Deploy from branch
   - Branch: gh-pages / (root)
   - Save

Your site will be live at: `https://yourusername.github.io/upvexo-website`

## 🎨 Customization

### Update Contact Information

Edit `src/components/Contact.js`:
- Replace email: `info@upvexo.com`
- Replace phone: `+1 (234) 567-890`
- Update social media links

### Google Analytics

Edit `src/app/layout.js`:
- Replace `GA_MEASUREMENT_ID` with your Google Analytics ID

### Colors

The website uses:
- Primary: Emerald Green (#059669)
- Secondary: Cyan/Sky Blue (#06b6d4)

Customize in `tailwind.config.js`

## 📁 Project Structure
```
upvexo-website/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.js     # Root layout with metadata
│   │   ├── page.js       # Home page
│   │   └── globals.css   # Global styles
│   └── components/       # React components
│       ├── Hero.js
│       ├── About.js
│       ├── Services.js
│       ├── Portfolio.js
│       ├── Blog.js
│       ├── Contact.js
│       ├── SideNavigation.js
│       └── Footer.js
├── public/              # Static assets
└── Configuration files
```

## ✨ Features

- ✅ Typewriter animation for brand name
- ✅ Smooth animated logo bars
- ✅ Side dot navigation
- ✅ Responsive design
- ✅ Modern gradient backgrounds
- ✅ Smooth scroll animations
- ✅ SEO optimized
- ✅ Google Analytics ready
- ✅ Static export for GitHub Pages

## 🛠️ Technologies

- Next.js 14
- React 18
- Tailwind CSS
- Lucide React Icons

## 📝 License

© 2025 Upvexo. All rights reserved.