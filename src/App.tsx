import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceDetail from './pages/ServiceDetail';
import SolutionDetail from './pages/SolutionDetail';
import AdminDashboard from './pages/AdminDashboard';
import CarrersPage from './pages/CarrersPage';

// 👇 Type definitions
type Category = 'technology' | 'business' | 'publicServices';

interface Job {
  title: string;
  type: string;
  location: string;
  description: string;
}

function App() {
  // ✅ State to manage jobs
  const [jobOpenings, setJobOpenings] = useState<Record<Category, Job[]>>({
    technology: [],
    business: [],
    publicServices: [],
  });

  // ✅ Add job
  const handleAddJob = (category: Category, job: Job) => {
    setJobOpenings(prev => ({
      ...prev,
      [category]: [...prev[category], job],
    }));
  };

  // ✅ Remove job
  const handleRemoveJob = (category: Category, index: number) => {
    setJobOpenings(prev => ({
      ...prev,
      [category]: prev[category].filter((_, i) => i !== index),
    }));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:service" element={<ServiceDetail />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:solution" element={<SolutionDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ✅ Careers Page receives the jobOpenings */}
            <Route
              path="/carrerspage"
              element={<CarrersPage jobOpenings={jobOpenings} />}
            />

            {/* ✅ Admin can add/remove jobs, shared with careers page */}
            <Route
              path="/admin"
              element={
                <AdminDashboard
                  jobOpenings={jobOpenings}
                  onAddJob={handleAddJob}
                  onRemoveJob={handleRemoveJob}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
