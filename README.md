# Sarthak Portfolio

A modern, responsive portfolio website built with React.js frontend and Node.js/Express/MongoDB backend.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark mode support
- **Contact Form**: Functional contact form with email notifications
- **Admin Panel**: Backend API for managing portfolio content
- **SEO Optimized**: Optimized for search engines
- **Fast Performance**: Built with Vite for optimal performance

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Router** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
sarthak-portfolio/
├── frontend/                 # React.js frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions
│   │   └── ...
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Node.js backend
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   └── package.json
└── package.json            # Root package.json
```

[![GitHub Streak](https://streak-stats.demolab.com/?sarthak12005)](https://git.io/streak-stats)


## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sarthak-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   **Backend (.env)**
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```
   
   **Frontend (.env)**
   ```bash
   cd frontend
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system

5. **Seed the database (optional)**
   ```bash
   cd backend
   npm run seed
   ```

6. **Run the application**
   ```bash
   # Development mode (runs both frontend and backend)
   npm run dev

   # Or run separately
   npm run dev:frontend  # Frontend only (http://localhost:5173)
   npm run dev:backend   # Backend only (http://localhost:5000)
   ```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/sarthak-portfolio
JWT_SECRET=your-super-secret-jwt-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
ADMIN_EMAIL=sarthak@example.com
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Sarthak Portfolio
VITE_APP_VERSION=1.0.0
```

## 📝 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `PUT /api/contact/:id/status` - Update message status (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/categories` - Get skill categories
- `GET /api/skills/:id` - Get single skill
- `POST /api/skills` - Create skill (admin)
- `PUT /api/skills/:id` - Update skill (admin)
- `DELETE /api/skills/:id` - Delete skill (admin)

### Experience
- `GET /api/experience` - Get all experience
- `GET /api/experience/:id` - Get single experience
- `POST /api/experience` - Create experience (admin)
- `PUT /api/experience/:id` - Update experience (admin)
- `DELETE /api/experience/:id` - Delete experience (admin)

## 🎨 Customization

### Updating Personal Information
1. Edit the content in the React components (`src/components/`)
2. Update the contact information in `ContactSection.jsx`
3. Modify the hero section content in `HeroSection.jsx`
4. Add your projects, skills, and experience through the API or directly in the database

### Styling
- The project uses Tailwind CSS for styling
- Custom styles can be added in `src/index.css`
- Color scheme can be modified in `tailwind.config.js`

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `dist` folder to your hosting service
3. Update environment variables for production

### Backend (Heroku/Railway/DigitalOcean)
1. Set up your production database (MongoDB Atlas recommended)
2. Configure environment variables
3. Deploy the backend folder
4. Update CORS settings for your frontend domain

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: sarthak@example.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ by Sarthak
