# 🚀 Deployment Guide

## Quick Deployment Checklist

✅ All images copied from old portfolio
✅ Work experience added (Fujitsu, Oxfordshire County Council)
✅ Tech stack component created with all technologies
✅ Projects section updated
✅ Certifications with clickable badges
✅ Repository cleaned (removed dev docs)
✅ README.md updated with deployment instructions
✅ gh-pages package installed
✅ package.json configured for deployment

## 🌐 Deploy to GitHub Pages

1. **Create a new GitHub repository** for your portfolio

2. **Initialize git and push** (if not already done):
```bash
cd portfolio-react
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. **Update homepage in package.json**:
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO"
```

4. **Deploy**:
```bash
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from branch "gh-pages"
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

## 🔧 Deploy to Vercel (Recommended - Easiest)

1. **Push to GitHub** (see step 2 above)

2. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub

3. **Click "Add New Project"**

4. **Import your repository**

5. **Click "Deploy"**

Done! Your site will be live with a vercel.app URL (you can add a custom domain later)

## 📦 Deploy to Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Go to [netlify.com](https://netlify.com)** and sign in

3. **Drag and drop the `build` folder** to Netlify

OR use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

## 🎨 Before Deployment - Personalization Checklist

### Update Contact Information
- [ ] Email in `src/components/Contact.js`
- [ ] Phone number in `src/components/Contact.js`
- [ ] Location in `src/components/Contact.js`
- [ ] GitHub link in `src/components/Contact.js`
- [ ] LinkedIn link in `src/components/Contact.js`

### Update Work Experience
- [ ] Company logos in `public/img/`
- [ ] Job titles in `src/components/Works.js`
- [ ] Employment dates in `src/components/Works.js`
- [ ] Job descriptions in `src/components/Works.js`

### Update Projects
- [ ] Project images in `src/components/Works.js`
- [ ] Project descriptions in `src/components/Works.js`
- [ ] Project technologies in `src/components/Works.js`

### Update Tech Stack
- [ ] Add/remove technologies in `src/components/TechStack.js`
- [ ] Update technology icons in `public/img/`

### Update Certifications
- [ ] Certification badges in `src/components/Contact.js`
- [ ] Certification links in `src/components/Contact.js`

### Update About Section
- [ ] Bio text in `src/components/About.js`
- [ ] Skills in `src/components/About.js`
- [ ] Achievements in `src/components/About.js`

### Update Services
- [ ] Service offerings in `src/components/Services.js`
- [ ] Service descriptions in `src/components/Services.js`

## 🐛 Troubleshooting

### Images not loading after deployment
- Make sure all image paths start with `/img/` not `img/`
- Check that images are in `public/img/` folder
- Verify image names match exactly (case-sensitive)

### Blank page after deployment
- Check browser console for errors
- Verify `homepage` in package.json is correct
- Make sure build completed without errors

### CSS not loading
- Clear browser cache
- Check that all CSS files are imported correctly
- Verify build output in `build` folder

## 📝 Performance Tips

- All images are optimized and loaded from `public/img/`
- Orbital background uses pre-generated textures
- Animations use requestAnimationFrame for 60fps
- Lazy loading implemented where possible

## 🔐 Security Notes

- No API keys in code
- All external links use `rel="noopener noreferrer"`
- HTTPS enforced on all deployment platforms

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Make sure `npm run build` completes successfully
4. Test locally with `npm start` before deploying

---

**Ready to deploy!** 🎉

Choose your platform:
- **Easiest**: Vercel (automatic deploys on git push)
- **Most control**: GitHub Pages
- **Fastest**: Netlify drag-and-drop
