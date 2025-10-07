# Martin Gurasvili - Digital Portfolio 2025

A modern, interactive portfolio showcasing AI/ML engineering projects, work experience, and technical skills.

## 🚀 Features

- **Cosmic Orbital Background**: Custom-built canvas animation with particle effects and orbital rings
- **Smooth Animations**: Framer Motion and GSAP for fluid transitions
- **Responsive Design**: Optimized for all devices
- **Dynamic Content**: Projects, work experience, tech stack, and certifications
- **Performance Optimized**: Pre-generated textures and efficient rendering

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Animations**: Framer Motion, GSAP
- **Styling**: CSS3 with custom properties
- **Icons**: React Icons
- **Canvas**: HTML5 Canvas API for custom graphics

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Deployment

### GitHub Pages Deployment

1. Update `package.json` with your GitHub Pages URL:
```json
{
  "homepage": "https://yourusername.github.io/repository-name"
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deployment scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify Deployment

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify or use Netlify CLI:
```bash
netlify deploy --prod --dir=build
```

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── img/              # Tech stack and company logos
│   ├── index.html
│   └── ...
├── src/
│   ├── components/       # React components
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── OrbitalBackground.js
│   │   ├── Services.js
│   │   ├── TechStack.js
│   │   ├── Works.js
│   │   └── ...
│   ├── App.js           # Main app component
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Contact Details**: Edit `src/components/Contact.js`
2. **Work Experience**: Edit `src/components/Works.js`
3. **Tech Stack**: Edit `src/components/TechStack.js`
4. **Projects**: Edit `src/components/Works.js`
5. **About**: Edit `src/components/About.js`

### Update Colors

Edit CSS custom properties in `src/App.css`:
```css
:root {
  --bg-primary: #000000;
  --text-primary: #ffffff;
  --accent-color: #06b6d4;
  --accent-purple: #7c3aed;
  --border-color: rgba(255, 255, 255, 0.1);
}
```

## 📝 License

© 2025 Martin Gurasvili. All rights reserved.

## 🤝 Contact

- **Email**: contact@martingurasvili.com
- **GitHub**: [@MartinGurasvili](https://github.com/MartinGurasvili)
- **LinkedIn**: [Martin Gurasvili](https://linkedin.com/in/martin-gurasvili)
