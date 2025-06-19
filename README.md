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
.
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BodyComponents/
│   │   │   ├── CardContainer.jsx
│   │   │   └── SearchBar.jsx
│   ├── utils/
│   │   └── FoodAPI.js       # Contains REST_LIST_URI
│   ├── App.jsx
│   ├── Body.jsx             # Main component fetching API
│   ├── Shimmer.jsx          # Shimmer loader component
│   ├── index.js
│   └── styles.css
└── package.json
