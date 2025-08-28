# QTify - Music Browsing Web Application

QTify is a modern music browsing web application built with React, featuring a beautiful dark theme with green accents. The application allows users to browse albums, songs, and manage their music library with an intuitive interface.

## Features

### 🎵 **Music Browsing**
- **Top Albums**: Browse the most popular albums with a carousel view
- **New Albums**: Discover the latest releases
- **Songs**: Filter songs by genre (All, Rock, Pop, Jazz, Blues)
- **Responsive Design**: Works seamlessly across all device sizes

### 🎨 **UI Components**
- **Navbar**: Clean navigation with logo, search bar, and feedback button
- **Hero Section**: Engaging landing section with catchy taglines
- **Card Components**: Reusable album and song cards with Material-UI chips
- **Carousel**: Smooth horizontal scrolling using Swiper.js
- **FAQ Section**: Expandable questions and answers
- **Music Player**: Persistent bottom player bar

### 🔍 **Search & Filtering**
- **Search Bar**: Search for albums and songs
- **Genre Tabs**: Filter songs by musical genre
- **API Integration**: Real-time data from QTify backend

### 💬 **User Feedback**
- **Feedback Modal**: Collect user feedback with a beautiful form
- **Responsive Design**: Works on all screen sizes

## Technology Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: Material-UI (MUI)
- **Carousel**: Swiper.js
- **HTTP Client**: Axios
- **Font**: Poppins (Google Fonts)

## Color Palette

- **Primary Green**: `#34C94B`
- **Background Black**: `#121212`
- **Card Background**: `#1e1e1e`
- **Text White**: `#FFFFFF`

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd qtify
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Card.js              # Reusable album/song card component
│   ├── Carousel.js          # Swiper-based carousel component
│   ├── FAQSection.js        # FAQ accordion section
│   ├── FeedbackButton.js    # Feedback modal and button
│   ├── HeroSection.js       # Landing hero section
│   ├── Logo.js              # QTify logo component
│   ├── MusicPlayer.js       # Bottom music player bar
│   ├── Navbar.js            # Navigation bar
│   ├── Section.js           # Reusable section component
│   └── SongsSection.js      # Songs with genre filtering
├── App.js                   # Main application component
├── index.js                 # Application entry point
└── index.css                # Global styles and CSS variables
```

## API Endpoints

- **Top Albums**: `https://qtify-backend-labs.crio.do/albums/top`
- **New Albums**: `https://qtify-backend-labs.crio.do/albums/new`
- **Songs**: `https://qtify-backend-labs.crio.do/songs`
- **Genres**: `https://qtify-backend-labs.crio.do/genres`

## Key Features Implementation

### 🎯 **Reusable Components**
- **Card Component**: Displays album/song information with Material-UI chips
- **Section Component**: Handles both grid and carousel views
- **Carousel Component**: Built with Swiper.js for smooth navigation

### 🎨 **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Adaptive carousel navigation
- Touch-friendly interactions

### 🔄 **State Management**
- React hooks for local state
- Efficient data fetching with Axios
- Optimized re-renders

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the QTify frontend development assessment.

## Support

For any questions or issues, please refer to the project documentation or contact the development team.
