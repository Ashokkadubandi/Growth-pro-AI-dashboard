# 🚀 GrowthProAI – Mini Local Business Dashboard

A full-stack assignment project that simulates how small businesses might view their SEO content and Google Business data — inspired by one of GrowthProAI’s core use cases.

---

## 📌 Objective

Create a responsive, interactive dashboard for local business insights including simulated:
- Google Ratings
- Reviews
- AI-generated SEO headlines

---

## 🧱 Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js
- @generative/ai

---

## 📋 Features

### 🌐 Frontend (React + Tailwind CSS)

- ✅ Responsive input form:
  - Business Name
  - Location

- ✅ Loading spinner

- ✅ Display Card (post submission):
  - Simulated Google Rating (e.g., 4.3★)
  - Number of Reviews
  - Latest AI-generated SEO Headline
  - "Regenerate SEO Headline" button

- ✅ Clean, mobile-friendly UI using Tailwind CSS

### 🔁 Backend (Node.js + Express)

#### 1. POST /business-data

- Accepts:
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}