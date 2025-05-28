import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ADMIN_USERNAME = 'loan';
const ADMIN_PASSWORD = 'loan';

type Category = 'technology' | 'business' | 'publicServices';

interface Job {
  title: string;
  type: string;
  location: string;
  description: string;
}

interface AdminDashboardProps {
  jobOpenings: Record<Category, Job[]>;
  onAddJob: (category: Category, job: Job) => void;
  onRemoveJob: (category: Category, index: number) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({
  jobOpenings,
  onAddJob,
  onRemoveJob,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [jobData, setJobData] = useState({
    category: 'technology',
    title: '',
    type: '',
    location: '',
    description: '',
  });

  const handleLogin = () => {
    if (form.username === ADMIN_USERNAME && form.password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { category, title, type, location, description } = jobData;
    if (!title || !type || !location || !description) return alert('Fill all fields!');
  // AdminDashboard receives onAddJob and calls it on job submit
onAddJob(category as Category, { title, type, location, description });

    setJobData({ category: 'technology', title: '', type: '', location: '', description: '' });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Admin Login</h2>
          <input
            className="w-full p-2 border rounded mb-4"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            className="w-full p-2 border rounded mb-4"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-red-600 mb-10"
      >
        Admin Dashboard
      </motion.h1>

      {/* Create Job Form */}
      <div className="max-w-2xl mx-auto bg-red-50 p-6 rounded shadow-lg mb-12">
        <form onSubmit={handleJobSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Category</label>
            <select
              className="w-full p-2 border rounded"
              value={jobData.category}
              onChange={(e) => setJobData({ ...jobData, category: e.target.value })}
            >
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="publicServices">Public Services</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Job Role</label>
            <input
              className="w-full p-2 border rounded"
              value={jobData.title}
              onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Work Type</label>
            <input
              className="w-full p-2 border rounded"
              value={jobData.type}
              onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Location</label>
            <input
              className="w-full p-2 border rounded"
              value={jobData.location}
              onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              rows={3}
              value={jobData.description}
              onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
          >
            Create Job Posting
          </button>
        </form>
      </div>

      {/* List Existing Jobs with Remove Button */}
      <div className="max-w-4xl mx-auto">
        {(['technology', 'business', 'publicServices'] as Category[]).map((category) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-semibold text-red-600 mb-4 capitalize">
              {category.replace(/([A-Z])/g, ' $1')}
            </h2>
            {jobOpenings[category].length === 0 ? (
              <p className="text-gray-600 italic">No jobs available in this category.</p>
            ) : (
              <ul>
                {jobOpenings[category].map((job, index) => (
                  <li
                    key={index}
                    className="border rounded p-4 mb-3 flex justify-between items-center bg-red-50"
                  >
                    <div>
                      <h3 className="font-bold text-lg">{job.title}</h3>
                      <p className="text-sm text-gray-700">
                        {job.type} &middot; {job.location}
                      </p>
                      <p className="mt-1 text-gray-800">{job.description}</p>
                    </div>
                    <button
                      onClick={() => onRemoveJob(category, index)}
                      className="ml-4 bg-gray-300 text-gray-800 px-3 py-1 rounded hover:bg-gray-400"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
