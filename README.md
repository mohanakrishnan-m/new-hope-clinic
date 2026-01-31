# 🏥 New Hope Clinic - Care From Heart

A modern, premium, and trustworthy one-page static website for **New Hope Clinic** in Puducherry, built with **Next.js 14** and **Tailwind CSS**.

## ✨ Features

### 🎨 Design Highlights
- **Medical-themed UI** with teal/aqua color scheme
- **Premium card layouts** with soft shadows and rounded corners
- **Smooth scroll animations** and hover effects
- **Wave-shaped section dividers** for visual appeal
- **Fully responsive** mobile-first design
- **Professional typography** using Inter font

### 📋 Sections Included

1. **Header** - Sticky navigation with Book Appointment & WhatsApp CTAs
2. **Hero Section** - Premium first fold with trust badges
3. **Doctors Section** - Detailed profiles for Dr. Sarasjothi & Dr. Premnath
4. **Services Section** - 4-column layout with primary/secondary services
5. **Consultation Steps** - 3-step booking process guide
6. **Testimonials** - 6 patient reviews with ratings
7. **Location** - Google Maps integration + working hours
8. **Contact Form** - Message form with quick contact info
9. **Footer** - Links, social media, and copyright

### 🩺 Doctor Profiles

**Dr. Sarasjothi Munusamy**
- MBBS, M.S
- Obstetrician & Gynecologist
- Specialties: Pregnancy Care, Gynecology, Family Planning, Women's Wellness

**Dr. Premnath Vinayagam**
- MD, DM, DEM (U.K)
- General Physician & Interventional Cardiologist
- Specialties: Cardiac Care, BP Monitoring, Diagnostics, Preventive Care

### 🏢 Clinic Information

**Address:** No: 233, Bussy St, White Town, Puducherry, 605001  
**Phone:** +91 (822) 209-0909  
**Website:** nhclinicpondy.in

**Working Hours:**
- Morning: 10:00 AM – 12:30 PM
- Evening: 07:30 PM – 09:00 PM
- Sunday: Closed ❌

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mohanakrishnan-m/new-hope-clinic.git
cd new-hope-clinic
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📦 Build for Production

### Static Export (Recommended)

Generate a static site for hosting on any platform:

```bash
npm run build
```

The static files will be in the `/out` folder.

## 🌐 Deployment Options

### Deploy to Vercel (Easiest)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Deploy to Netlify
1. Run `npm run build`
2. Drag and drop the `/out` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
1. Update `next.config.js` with your repository name
2. Run `npm run build`
3. Push the `/out` folder to `gh-pages` branch

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    DEFAULT: '#14b8a6', // Teal
    dark: '#0f9488',
    light: '#5eead4',
  }
}
```

### Content
- **Doctors:** Edit `app/components/Doctors.js`
- **Services:** Edit `app/components/Services.js`
- **Testimonials:** Edit `app/components/Testimonials.js`
- **Contact Info:** Update in respective component files

### Google Maps
Replace the map embed URL in `app/components/Location.js` with your actual clinic location.

## 📁 Project Structure

```
new-hope-clinic/
├── app/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Doctors.js
│   │   ├── Services.js
│   │   ├── Consultation.js
│   │   ├── Testimonials.js
│   │   ├── Location.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── public/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework for production
- **Tailwind CSS 3** - Utility-first CSS framework
- **React Icons** - Icon library
- **Google Fonts (Inter)** - Modern typography
- **Vercel** - Recommended hosting platform

## 📱 Features Checklist

- ✅ Responsive mobile design
- ✅ Sticky navigation header
- ✅ Smooth scroll anchors
- ✅ WhatsApp integration
- ✅ Phone call links
- ✅ Google Maps integration
- ✅ Contact form
- ✅ SEO optimized
- ✅ Fast loading (static export)
- ✅ Accessible design

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is created for New Hope Clinic, Puducherry.

## 📞 Support

For any questions or support, please contact:
- **Email:** contact@nhclinicpondy.in
- **Phone:** +91 (822) 209-0909
- **Website:** https://nhclinicpondy.in

---

**Made with ❤️ for New Hope Clinic**