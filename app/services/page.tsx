"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Cloud, Users, Database, Shield, Cpu, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: <Code className="h-12 w-12" />,
    title: "Custom Software Development",
    description: "Tailored solutions to meet your unique business needs",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "Enterprise Software Solutions",
      "API Development & Integration",
      "Legacy System Modernization"
    ],
    caseStudy: {
      client: "Global Retail Chain",
      challenge: "Outdated inventory management system causing inefficiencies",
      solution: "Developed a modern, cloud-based inventory management solution",
      result: "40% reduction in processing time, 99.9% accuracy in stock tracking"
    }
  },
  {
    icon: <Cloud className="h-12 w-12" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    features: [
      "Cloud Migration Strategy",
      "AWS/Azure/GCP Solutions",
      "Cloud Architecture Design",
      "Serverless Applications",
      "Cloud Security & Compliance"
    ],
    caseStudy: {
      client: "Financial Services Provider",
      challenge: "Need for scalable, secure infrastructure",
      solution: "Implemented multi-cloud architecture with automated scaling",
      result: "300% improvement in processing capacity, 50% cost reduction"
    }
  },
  {
    icon: <Users className="h-12 w-12" />,
    title: "IT Staffing",
    description: "Expert talent acquisition for your technical needs",
    features: [
      "Technical Recruitment",
      "Staff Augmentation",
      "Project-Based Staffing",
      "Skill Assessment",
      "Team Building"
    ],
    caseStudy: {
      client: "Tech Startup",
      challenge: "Rapid scaling needs with specific technical expertise",
      solution: "Provided dedicated team of 15 specialists",
      result: "Product launched 2 months ahead of schedule"
    }
  },
  {
    icon: <Database className="h-12 w-12" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    features: [
      "Business Intelligence",
      "Predictive Analytics",
      "Data Visualization",
      "Big Data Solutions",
      "Machine Learning Integration"
    ],
    caseStudy: {
      client: "Healthcare Provider",
      challenge: "Unstructured patient data limiting insights",
      solution: "Implemented advanced analytics platform",
      result: "25% improvement in patient care efficiency"
    }
  },
  {
    icon: <Shield className="h-12 w-12" />,
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions",
    features: [
      "Security Assessments",
      "Threat Detection & Response",
      "Compliance Management",
      "Security Training",
      "Incident Response Planning"
    ],
    caseStudy: {
      client: "Banking Institution",
      challenge: "Rising security threats and compliance needs",
      solution: "Implemented comprehensive security framework",
      result: "Zero security breaches, 100% compliance achievement"
    }
  },
  {
    icon: <Cpu className="h-12 w-12" />,
    title: "IT Infrastructure",
    description: "Build robust and scalable IT infrastructure",
    features: [
      "Network Design",
      "System Integration",
      "Infrastructure Monitoring",
      "Disaster Recovery",
      "Performance Optimization"
    ],
    caseStudy: {
      client: "Manufacturing Company",
      challenge: "Aging infrastructure causing downtime",
      solution: "Modernized entire IT infrastructure",
      result: "99.99% uptime, 45% reduction in IT costs"
    }
  }
]

export default function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=60')",
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="mb-6 flex-grow">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <Button className="w-full bg-primary">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-medium text-foreground">Client:</p>
                      <p>{service.caseStudy.client}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Challenge:</p>
                      <p>{service.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Solution:</p>
                      <p>{service.caseStudy.solution}</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Result:</p>
                      <p>{service.caseStudy.result}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#7BAA3C] to-[#0091CD] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}