// components/JobCard.tsx
import React from 'react';

type Job = {
  title: string;
  type: string;
  location: string;
  description: string;
};

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
      <p className="text-sm text-gray-500 mb-2">
        {job.type} · {job.location}
      </p>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <button className="mt-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
