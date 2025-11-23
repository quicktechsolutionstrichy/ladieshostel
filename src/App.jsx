import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import { HOSTEL_INFO } from "./constants/theme";

// Lazy load components for better performance
const Rooms = lazy(() => import("./components/Rooms"));
const Amenities = lazy(() => import("./components/Amenities"));
const Safety = lazy(() => import("./components/Safety"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <ErrorBoundary>
      <Helmet>
        <title>
          {HOSTEL_INFO.name} | {HOSTEL_INFO.tagline} | Trichy
        </title>
        <meta
          name="description"
          content={`${HOSTEL_INFO.name} - ${HOSTEL_INFO.targetAudience}. ${HOSTEL_INFO.tagline} in Trichy. Licensed hostel with excellent accommodation, 24/7 security, CCTV surveillance, AC/Non-AC rooms, and all modern facilities.`}
        />
        <meta name="keywords" content="ladies hostel, girls hostel, Trichy, hostel accommodation, working women hostel, student hostel, safe hostel" />
        <meta name="author" content={HOSTEL_INFO.name} />
        <meta property="og:title" content={`${HOSTEL_INFO.name} | ${HOSTEL_INFO.tagline}`} />
        <meta property="og:description" content={`${HOSTEL_INFO.description} Located in Trichy.`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://seethaladieshostel.com" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main id="main-content" role="main">
          <Hero />
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-24">
                <LoadingSpinner size="lg" />
              </div>
            }
          >
            <Rooms />
            <Amenities />
            <Safety />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;
