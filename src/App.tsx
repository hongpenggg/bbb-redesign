import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AnnouncementBar } from './components/AnnouncementBar';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PathwaysPage } from './pages/PathwaysPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { TeamPage } from './pages/TeamPage';
import { ImpactPage } from './pages/ImpactPage';
import { BlogPage } from './pages/BlogPage';
import { GalleryPage } from './pages/GalleryPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { PartnersPage } from './pages/PartnersPage';
import { TutorPage } from './pages/TutorPage';
import { PressPage } from './pages/PressPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-surface text-on-surface">
        <AnnouncementBar />
        <Navigation />
        <main className="flex-grow pt-[72px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pathways" element={<PathwaysPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/tutor" element={<TutorPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}
