import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Star } from "lucide-react";
import JobCard from "./JobCard";
import CategoryToggle from "./CategoryToggle";

type Job = {
  title: string;
  type: string;
  location: string;
  description: string;
};

type Category = "technology" | "business" | "publicServices";

interface CareersPageProps {
  jobOpenings: Record<Category, Job[]>;
}

const CareersPage: React.FC<CareersPageProps> = ({ }) => {
  const categories = ["technology", "business", "publicServices"] as const;
  type Category = (typeof categories)[number];

  const [selectedCategory, setSelectedCategory] =
    useState<Category>("technology");

  const [externalJobsState, setExternalJobs] = useState<
    Record<Category, Job[]>
  >({
    technology: [],
    business: [],
    publicServices: [],
  });

  useEffect(() => {
    const fetchExternalJobs = async () => {
      const externalData = {
        technology: [
          {
            // title: "AI/ML Engineer",
            // type: "Internship",
            // location: "Remote",
            // description: "Assist in building intelligent algorithms.",
          },
        ],
        business: [
          {
            // title: "PR Manager",
            // type: "Part Time",
            // location: "Pune, India",
            // description: "Handle public relations and communications.",
          },
        ],
        publicServices: [
          {
            // title: "Field Coordinator",
            // type: "Full Time",
            // location: "Lucknow, India",
            // description: "Coordinate field operations for public outreach.",
          },
        ],
      };

      //setExternalJobs(externalData);
    };

    fetchExternalJobs();
  }, []);
  return (
    <div style={{ backgroundColor: "red", color: "black" }}>
      {/* Hero Section */}
      <section className="relative py-20 text-white text-center">
        <div className="container px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-xl mx-auto"
          >
            Explore opportunities and become a part of our mission to innovate
            and inspire.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Why Work With Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded shadow-md">
              <Briefcase className="mx-auto text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">
                Challenging Projects
              </h3>
              <p className="text-gray-700">
                Work on cutting-edge projects that make a real impact across
                industries.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow-md">
              <Users className="mx-auto text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">
                Collaborative Culture
              </h3>
              <p className="text-gray-700">
                Join a team that values growth, creativity, and mutual respect.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow-md">
              <Star className="mx-auto text-red-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-gray-700">
                Grow your career with training, mentorship, and advancement
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CategoryToggle
        selected={selectedCategory}
        onSelect={(category) => setSelectedCategory(category as Category)}
        categories={categories}
      />

      {/* Job Openings Section */}
      <section className="py-16">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
          >
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}{" "}
            Openings
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-2xl font-bold mb-8 text-center text-white"
          >
            Will Update Soon
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {externalJobsState[selectedCategory].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <JobCard job={job} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
