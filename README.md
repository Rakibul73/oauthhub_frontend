# OAuthHub Frontend 🌐

A modern, responsive frontend application for the OAuthHub authentication system. Built with Next.js 15, React 19, and TypeScript, providing a seamless OAuth login experience with multiple providers.

## 🔗 Related Repositories

- **Frontend Repository**: [OAuthHub Frontend](https://github.com/Rakibul73/oauthhub_frontend)
- **Backend Repository**: [OAuthHub Backend](https://github.com/Rakibul73/OAuthHub)

## 🚀 Current Features

### Authentication Interface
- ✅ **Multi-Provider OAuth Login** - Google, Facebook, LinkedIn with branded UI
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Modern UI/UX** - Clean, intuitive login interface
- ✅ **Loading States** - Visual feedback during authentication flows

### Security & Performance
- ✅ **HTTPS Support** - Custom SSL certificates for secure communication
- ✅ **Token Management** - Secure client-side token storage and handling
- ✅ **OAuth State Validation** - CSRF protection in authentication flows
- ✅ **Error Handling** - Comprehensive error states and user feedback

### Developer Experience
- ✅ **TypeScript** - Full type safety and better development experience
- ✅ **Next.js 15** - Latest features with App Router
- ✅ **React 19 RC** - Cutting-edge React features
- ✅ **ESLint** - Code quality and consistency
- ✅ **Hot Reload** - Fast development workflow

## 🏗️ Project Structure

```
oauthhub_fe/
├── src/
│   └── app/
│       ├── globals.css         # Global styles and Tailwind
│       ├── layout.tsx          # Root layout component
│       ├── page.tsx            # Home page (redirects to login)
│       ├── login/
│       │   └── page.tsx        # Login page with OAuth providers
│       ├── fonts/              # Custom fonts (Geist)
│       └── favicon.ico
├── public/
│   ├── google.svg              # Google logo
│   ├── facebook.svg            # Facebook logo
│   └── linkedin.svg            # LinkedIn logo
├── certificates/               # HTTPS certificates
├── .env.local                  # Environment variables
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19 RC
- **Styling**: Tailwind CSS 3.4
- **Development**: ESLint 9, Hot Reload
- **Build Tool**: Next.js built-in bundler
- **Security**: HTTPS with custom certificates

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun
- SSL certificates (provided in `/certificates` directory)
- Running [OAuthHub Backend](https://github.com/Rakibul73/OAuthHub)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Rakibul73/oauthhub_frontend.git
cd oauthhub_frontend
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# Backend API Configuration
NEXT_PUBLIC_API_URL=https://localhost:3000

# Optional: Additional environment variables
# NEXT_PUBLIC_APP_NAME=OAuthHub
# NEXT_PUBLIC_VERSION=1.0.0
```

### 4. Start Development Server

```bash
# HTTP development server
npm run dev

# HTTPS development server (recommended for OAuth)
npm run dev:https

# Other package managers
yarn dev
pnpm dev
bun dev
```

### 5. Access the Application
- **HTTP**: [http://localhost:3000](http://localhost:3000)
- **HTTPS**: [https://localhost:3000](https://localhost:3000)

**Note**: HTTPS is recommended for OAuth providers to work properly.

## 🔗 Backend Integration

This frontend is designed to work seamlessly with the [OAuthHub Backend](https://github.com/Rakibul73/OAuthHub). 

### Setup Requirements:
1. Ensure the backend is running on `https://localhost:3000`
2. Backend CORS must allow requests from the frontend domain
3. Both applications should use HTTPS for OAuth compliance

### API Integration:
- **Authentication Flow**: Frontend redirects to backend OAuth endpoints
- **Token Management**: Receives and stores JWT tokens from backend
- **Error Handling**: Graceful handling of authentication failures

## 🎨 UI/UX Features

### Login Interface
- **Clean Design**: Minimalist, professional appearance
- **Provider Branding**: Authentic Google, Facebook, LinkedIn styling
- **Responsive Layout**: Works perfectly on all devices
- **Loading States**: Visual feedback during redirects
- **Error Messages**: User-friendly error handling

### Accessibility
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Semantic HTML structure

## 🔧 Development Commands

```bash
# Development with HTTP
npm run dev

# Development with HTTPS (recommended)
npm run dev:https

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile** (< 768px): Stacked layout, touch-optimized buttons
- **Tablet** (768px - 1024px): Balanced layout with adequate spacing
- **Desktop** (> 1024px): Centered card layout with optimal width

## 🔒 Security Features

### Client-Side Security
- **Token Storage**: Secure localStorage implementation
- **HTTPS Enforcement**: SSL certificates for encrypted communication
- **State Validation**: OAuth state parameter validation
- **XSS Protection**: React's built-in XSS prevention

### Authentication Flow Security
- **Secure Redirects**: Proper OAuth redirect handling
- **Token Expiry**: Automatic token expiration handling
- **Error Boundaries**: Graceful error state management

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Connect GitHub repo for automatic deployments
- **AWS Amplify**: Full-stack deployment with backend integration
- **Docker**: Containerized deployment for any platform

### Environment Variables for Production
```env
NEXT_PUBLIC_API_URL=https://your-backend-domain.com
```

## 🔧 Configuration Files

### Next.js Configuration
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    // Future Next.js features
  },
  images: {
    // Image optimization settings
  }
}
```

### Tailwind Configuration
```typescript
// tailwind.config.ts
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Custom theme extensions
    }
  }
}
```

## 📊 Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization
- **Font Optimization**: Geist font with `next/font`
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-built pages for better performance
- **CSS Optimization**: Tailwind CSS purging for smaller bundles

## 🐛 Troubleshooting

### Common Issues

1. **OAuth Redirects Not Working**
   - Ensure HTTPS is enabled (`npm run dev:https`)
   - Check backend CORS configuration
   - Verify callback URLs in OAuth provider settings

2. **Certificate Errors**
   - Trust the development certificates
   - Check certificate paths in `/certificates`
   - Ensure backend is also running HTTPS

3. **API Connection Issues**
   - Verify `NEXT_PUBLIC_API_URL` in `.env.local`
   - Check if backend server is running
   - Ensure network connectivity

4. **Build Errors**
   - Clear `.next` directory: `rm -rf .next`
   - Reinstall dependencies: `rm -rf node_modules && npm install`
   - Check TypeScript errors: `npm run type-check`

## 📈 Future Enhancements

### Planned Features
- [ ] User dashboard after successful login
- [ ] Profile management interface
- [ ] Account linking (multiple OAuth providers)
- [ ] Remember me functionality
- [ ] Dark/Light theme toggle
- [ ] Multi-language support (i18n)
- [ ] Progressive Web App (PWA) features
- [ ] Social login analytics

### Technical Improvements
- [ ] Server-side rendering optimization
- [ ] Advanced error boundaries
- [ ] Comprehensive unit tests
- [ ] E2E testing with Playwright
- [ ] Performance monitoring
- [ ] Bundle size optimization

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/oauthhub_frontend.git`
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Make your changes and test thoroughly
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to your branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Contribution Guidelines
- Follow existing code style and TypeScript patterns
- Add proper TypeScript types for new features
- Test OAuth flows thoroughly
- Update documentation for new features
- Ensure responsive design principles
- Follow accessibility best practices

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Rakibul Islam**
- GitHub: [@Rakibul73](https://github.com/Rakibul73)
- LinkedIn: [Connect with me](https://linkedin.com/in/rakibul73)

## 🙏 Acknowledgments

- Next.js team for the incredible framework
- React team for the amazing library
- Tailwind CSS team for the utility-first CSS framework
- Vercel team for the excellent deployment platform
- OAuth providers (Google, Facebook, LinkedIn) for their APIs
- Open source community for inspiration and packages

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Look through existing [GitHub Issues](https://github.com/Rakibul73/oauthhub_frontend/issues)
3. Create a new issue with detailed information
4. Join our community discussions

---

**⭐ If you find this project helpful, please give it a star on GitHub!**

Built with ❤️ using Next.js, React, and TypeScript.
=======