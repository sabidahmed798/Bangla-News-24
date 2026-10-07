# 📰 Bangla News 24

A modern and responsive Bangla news website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **DaisyUI**.

Bangla News 24 provides users with the latest news across different categories including politics, world, economy, health, sports, technology, and more.

---

## 🌐 Live Website

🔗 **Live Demo:** [Add your Vercel live link here]

---



## ✨ Features

- 🏠 Modern and responsive homepage
- 📰 Latest Bangla news
- 🏛️ Politics news
- 🌎 World news
- 💰 Economy news
- 🏥 Health news
- ⚽ Sports news
- 💻 Technology news
- 🔥 Most read/popular news
- 🎥 Video news section
- 📄 Dynamic news details page
- 🔗 Category-based navigation
- 📱 Fully responsive design
- ⏳ Loading page
- ❌ Custom 404 Not Found page
- 🖼️ News images with Next.js Image
- 🚀 Fast page loading with Next.js
- 📡 News data fetched from REST API

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- HTML5
- CSS3

### API & Data

- REST API
- Fetch API
- Dynamic API routes

### Tools

- Git
- GitHub
- Vercel
- VS Code

---

## 📦 Main Dependencies

```json
{
  "next": "Next.js",
  "react": "React",
  "react-dom": "React DOM",
  "typescript": "TypeScript",
  "tailwindcss": "Tailwind CSS",
  "daisyui": "DaisyUI"
}

Dependency versions may vary depending on the project's package.json.

📂 Project Structure
bangla-news-24/
│
├── public/
│   └── images/
│
├── src/
│   └── app/
│       ├── bengali/
│       ├── politics/
│       ├── world/
│       ├── economy/
│       ├── health/
│       ├── sports/
│       ├── technology/
│       ├── video/
│       ├── news/
│       │   └── [newsId]/
│       │       └── page.tsx
│       │
│       ├── components/
│       ├── loading.tsx
│       ├── not-found.tsx
│       ├── layout.tsx
│       └── page.tsx
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
📰 News Categories

The website includes the following major categories:

Category	Route
মূলপাতা	/bengali
রাজনীতি	/politics
বিশ্ব	/world
অর্থনীতি	/economy
স্বাস্থ্য	/health
খেলা	/sports
প্রযুক্তি	/technology
সর্বাধিক পঠিত	/bengali/popular/read
দেখুন	/video
🔌 API

This project uses a REST API to fetch news data.

Base API
https://news-api-v2.vercel.app
Example Endpoints
/api/news/sections
/api/news/most-read
/api/article/:newsId

The API is used to load news sections, popular news, and individual news details.

🚀 Getting Started

Follow these steps to run the project locally.

1. Clone the repository
git clone https://github.com/your-username/bangla-news-24.git
2. Go to the project directory
cd bangla-news-24
3. Install dependencies

Using npm:

npm install

Or using pnpm:

pnpm install
4. Start the development server
npm run dev

The application will run at:

http://localhost:3000
🏗️ Build for Production

Create a production build:

npm run build

Start the production server:

npm start
☁️ Deployment

This project is deployed using Vercel.

Every new change can be deployed automatically through GitHub.

GitHub
   ↓
git push
   ↓
Vercel
   ↓
Production Deployment 🚀
📱 Responsive Design

Bangla News 24 is designed to work across different screen sizes:

📱 Mobile
📲 Tablet
💻 Laptop
🖥️ Desktop
🎯 Project Goals

The main goals of this project are:

Build a modern Bangla news platform
Practice Next.js App Router
Practice API data fetching
Create reusable React components
Implement dynamic routes
Build responsive layouts
Improve frontend development skills
Practice real-world project structure
👨‍💻 Developer
Sabid Ahmed

Full Stack Web Developer | Next.js Learner

I'm currently learning modern web development with:

React.js
Next.js
TypeScript
Tailwind CSS
Node.js
MongoDB



=====

📰 A modern and responsive Bangla news platform featuring category-based news, popular news, dynamic news details and API integration. Built with Next.js, React, TypeScript, Tailwind CSS & DaisyUI. Live: YOUR_VERCEL_LINK
