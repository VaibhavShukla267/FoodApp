# 🍽️ Swiggy Clone - Restaurant Listing App

This is a simplified **Swiggy-like restaurant listing app** built with **React.js**. It fetches data from Swiggy's internal API, displays a list of restaurants, allows searching and filtering, and shows a shimmer loader while data is being fetched.

---

## 🚀 Features

- 🛒 Fetches real restaurant data from Swiggy (unofficial public endpoint)
- 🔍 Search restaurants by name
- 🌟 Filter top-rated restaurants (rating > 4.3)
- 💡 Shimmer UI loading effect
- 💡 Added Framer Motion effect
- 📦 Clean component-based architecture
- 🔄 State management using `useState` and `useEffect`
- 🧹 Handles duplicate restaurants using Map

---

## 🛠️ Technologies Used

- [React.js](https://reactjs.org/)
- JavaScript (ES6+)
- HTML5 + CSS3 (SCSS/Nested styling)
- Swiggy API (unofficial)
- Vite / CRA for development

---

## 📂 Project Structure
```bash
FOODAPP/
├── public/
│   └── index.html
├── src/
│   ├── assets/                         # Static assets (images, icons, etc.)
│
│   ├── Components/
│   │   ├── BodyComponents/
│   │   │   ├── CardContainer.jsx       # Single restaurant card component
│   │   │   ├── RestaurantDetail.jsx    # Detailed view of a restaurant (optional/extra)
│   │   │   └── SearchBar.jsx           # Search input component
│   │   │
│   │   ├── FooterComponents/
│   │   │   └── (optional footer subcomponents)
│   │   └── HeaderComponents/
│   │       ├── About.jsx              # About page
│   │       ├── ContactUs.jsx          # Contact page
│   │       └── Navbar.jsx             # Navigation bar inside Header
│
│   ├── utils/
│   │   ├── FoodAPI.js                  # Swiggy API URL (REST_LIST_URI)
│   │   └── FoodImg.js                  # Image constants or URLs
│
│   ├── Body.jsx                        # Main listing page
│   ├── Header.jsx                      # Header wrapper
│   ├── Footer.jsx                      # Footer wrapper
│   ├── Shimmer.jsx                     # Loading skeleton (Shimmer UI)
│   ├── ErrorElement.jsx                # Error page / fallback UI
│   ├── App.jsx                         # Main routing and layout
│   ├── App.css                         # App-wide styling
│   ├── index.css                       # Global styles
│   └── main.jsx                        # ReactDOM root
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── vite.config.js                     # Vite config (if using Vite)
└── eslint.config.js
