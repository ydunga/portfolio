# Data Projects Portfolio

A clean, professional HTML-based portfolio website to showcase data projects and analysis work.

## Features

- **Responsive Design**: Works great on desktop, tablet, and mobile devices
- **Project Showcase**: Display your data projects with descriptions, tags, and links
- **Easy to Customize**: Simple HTML, CSS, and JavaScript structure
- **Modern Styling**: Professional gradient design with smooth animations
- **GitHub Pages Ready**: Deploy directly to GitHub Pages

## File Structure

```
portfolio/
├── index.html      # Main portfolio page
├── styles.css      # Styling and responsive design
├── script.js       # Project loading and interactivity
└── README.md       # This file
```

## Getting Started

### 1. Update Your Information

Edit `index.html` to update:
- Your name/logo in the navbar
- Contact links (email, LinkedIn, GitHub URLs)

### 2. Add Your Projects

Edit the `projectsData` array in `script.js` to add your projects:

```javascript
{
    title: "Project Title",
    date: "2026-06",
    description: "Brief project description",
    tags: ["Python", "Data Analysis"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo-link.com" // or "#" if no demo
}
```

### 3. Customize Styling

Edit `styles.css` to change:
- Color scheme (update `:root` CSS variables)
- Fonts and sizes
- Spacing and layouts

### 4. Deploy

#### Option A: GitHub Pages
1. Go to repository Settings → Pages
2. Set Source to "Deploy from a branch"
3. Select `main` branch and `/root` folder
4. Your site will be live at `https://ydunga.github.io/portfolio`

#### Option B: Local Testing
Open `index.html` directly in your browser or use a local server:
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## Customization Guide

### Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --secondary-color: #1e40af;    /* Darker blue */
    --accent-color: #10b981;       /* Green accent */
}
```

### Adding More Projects
Simply add more objects to the `projectsData` array in `script.js`. Projects are automatically rendered.

### Contact Information
Update the contact section in `index.html` with your actual links.

## Tips for Data Projects

- Include project descriptions that highlight the business impact
- Link to GitHub repositories with well-documented code
- Add relevant tags (Python, SQL, Tableau, etc.)
- Include live demo links when available
- Keep descriptions concise and focused on key insights

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## License

Feel free to customize and use this template for your portfolio!