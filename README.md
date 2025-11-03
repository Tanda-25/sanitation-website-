# SafiWorks – Sanitation, Valet Trash & Environmental Cleaning Services

A modern, responsive one-page website for SafiWorks, a Mombasa-based sanitation and valet trash company. Built with React, Vite, and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching gradient design with clear call-to-action buttons
- **Services**: Showcase of 4 comprehensive service offerings
- **Pricing**: Three pricing tiers with detailed features
- **Contact Form**: Fully validated form with WhatsApp integration
- **Responsive Design**: Mobile-first design that works on all devices
- **WhatsApp Integration**: Multiple WhatsApp contact points throughout the site

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Tanda-25/sanitation-website-.git
cd sanitation-website-
```

2. Install dependencies:
```bash
npm install
```

3. Configure contact information:
   - Open `src/config.js`
   - Update the `whatsappNumber` with your actual WhatsApp business number
   - Update other contact details as needed

### Development

Run the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173/`

### Build for Production

Create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Configuration

### Contact Information

Edit `src/config.js` to update:
- WhatsApp number
- Phone number
- Email address
- Business address
- Business hours

### Styling

The website uses Tailwind CSS. To customize:
- Edit `tailwind.config.js` for theme customization
- Modify component files in `src/components/` for layout changes

## Project Structure

```
sanitation-website-/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config.js        # Configuration constants
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles with Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## License

© 2025 SafiWorks. All rights reserved.

## Contact

For questions about this website, please contact:
- Email: info@safiworks.co.ke
- WhatsApp: +254 700 000 000
- Location: Mombasa, Kenya
