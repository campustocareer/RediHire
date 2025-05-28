"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight, Briefcase, Clock, MapPin, DollarSign, Search } from 'lucide-react'

const benefits = [
  {
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family"
  },
  {
    title: "Professional Growth",
    description: "Continuous learning opportunities and certification support"
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options"
  },
  {
    title: "Financial Benefits",
    description: "Competitive salary, gratuity, and performance bonuses"
  },
  {
    title: "Team Building",
    description: "Regular team events and company outings"
  },
  {
    title: "Office Perks",
    description: "Modern workspace, snacks, and recreational facilities"
  }
]

const jobs = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "₹20,00,000 - ₹35,00,000",
    description: "We're looking for a Senior Software Engineer to join our growing team...",
    requirements: [
      "7+ years of software development experience",
      "Strong expertise in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Bachelor's degree in Computer Science or related field"
    ]
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "₹18,00,000 - ₹30,00,000",
    description: "Join our DevOps team to build and maintain our cloud infrastructure...",
    requirements: [
      "5+ years of DevOps experience",
      "Strong knowledge of AWS services",
      "Experience with Docker and Kubernetes",
      "Expertise in CI/CD pipelines"
    ]
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Hyderabad, India",
    type: "Full-time",
    salary: "₹15,00,000 - ₹25,00,000",
    description: "Create beautiful and intuitive user interfaces for our products...",
    requirements: [
      "4+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio demonstrating web and mobile design",
      "Experience with design systems"
    ]
  },
  {
    title: "Technical Recruiter",
    department: "HR",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹12,00,000 - ₹20,00,000",
    description: "Help us find and hire the best talent in the tech industry...",
    requirements: [
      "3+ years of technical recruiting experience",
      "Strong understanding of technical roles and skills",
      "Experience with ATS and recruiting tools",
      "Excellent communication skills"
    ]
  }
]

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
    quote: "Working at Workbridge India has been incredible. The culture of innovation and continuous learning keeps me excited every day."
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
    quote: "The work-life balance and growth opportunities here are unmatched. I've grown both professionally and personally."
  },
  {
    name: "Amit Kumar",
    role: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    quote: "The collaborative environment and cutting-edge technology stack make this the perfect place for tech enthusiasts."
  }
]

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&auto=format&fit=crop&q=60')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Build your career with a company that values innovation and growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Open Positions</h2>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search positions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" /> {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" /> {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" /> {job.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" /> {job.salary}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-primary">
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-muted-foreground">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Life at Workbridge India</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mb-4 object-cover"
                    />
                    <p className="text-muted-foreground mb-4">{testimonial.quote}</p>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our team of innovators and help shape the future of technology
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#7BAA3C] to-[#0091CD] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              View All Positions <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}