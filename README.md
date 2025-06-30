# 🛒 E-commerce React Application

A modern, responsive e-commerce web application built with React, Vite, and Tailwind CSS. This application provides a complete shopping experience with product browsing, cart management, user authentication, and more.

## 🌟 Features

- **Product Catalog**: Browse through a wide variety of products with detailed information
- **Category Filtering**: Filter products by categories for easier navigation
- **Shopping Cart**: Add, remove, and manage items in your cart
- **User Authentication**: Secure login and registration with Clerk
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Product Search**: Search functionality to find products quickly
- **Single Product View**: Detailed product pages with images and descriptions
- **Location Services**: Geolocation integration for location-based features
- **Contact Form**: Contact page with email integration via EmailJS
- **Loading Animations**: Beautiful loading states and animations
- **Toast Notifications**: User-friendly notifications for actions
- **Protected Routes**: Secure routes that require authentication

## 🚀 Live Demo

[View Live Application](https://Vishalsomaraju.github.io/Ecommerce/)

## 🛠️ Technologies Used

### Frontend

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **React Router DOM** - Declarative routing for React
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Icons

- **Lucide React** - Beautiful & consistent icon toolkit
- **React Icons** - Popular icons in React components
- **React Slick** - Carousel component for React
- **Lottie React** - Render After Effects animations

### Authentication & Services

- **Clerk** - Complete user management solution
- **EmailJS** - Send emails directly from client-side
- **Axios** - Promise-based HTTP client

### Utilities

- **React Toastify** - Notification system
- **React Scroll to Top** - Smooth scroll to top functionality

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vishalsomaraju/Ecommerce.git
   cd Ecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   ├── ProductCard.jsx # Product card component
│   ├── Carousel.jsx    # Image carousel
│   ├── FilterSection.jsx # Product filtering
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Products.jsx    # Products listing page
│   ├── Cart.jsx        # Shopping cart page
│   ├── Contact.jsx     # Contact page
│   └── ...
├── context/            # React context providers
│   ├── CartContext.jsx # Cart state management
│   └── DataContext.jsx # Product data management
├── assets/             # Static assets
│   ├── images/         # Image files
│   └── animations/     # Animation files
├── App.jsx             # Main application component
└── main.jsx           # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment

This application is configured for deployment on:

### GitHub Pages

```bash
npm run deploy
```

### Netlify

The application includes a `netlify.toml` configuration file for easy deployment on Netlify.

## 🎨 Key Features Explained

### Shopping Cart

- Persistent cart state using localStorage
- Add/remove items functionality
- Quantity management
- Cart total calculation

### Product Management

- Fetches products from Fake Store API
- Category-based filtering
- Product search functionality
- Detailed product views

### User Authentication

- Secure authentication with Clerk
- Protected routes for authenticated users
- User profile management

### Responsive Design

- Mobile-first approach
- Tailwind CSS for styling
- Responsive navigation and layouts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vishal Somaraju**

- GitHub: [@Vishalsomaraju](https://github.com/Vishalsomaraju)

## 🙏 Acknowledgments

- [Fake Store API](https://fakestoreapi.in/) for product data
- [Clerk](https://clerk.com/) for authentication services
- [EmailJS](https://www.emailjs.com/) for email services
- React and Vite communities for excellent documentation

---

⭐ Star this repository if you find it helpful!
