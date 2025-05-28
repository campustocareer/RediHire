import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, GraduationCap, Building2, Train, Landmark, Shield, Users, BadgeCheck } from 'lucide-react';

const examCourses = [
  {
    id: 'ibps',
    title: 'IBPS Exams',
    description: 'Comprehensive preparation for IBPS PO/Clerk/RRB PO/RRB Clerk/SO positions',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    categories: ['PO', 'Clerk', 'RRB PO', 'RRB Clerk', 'SO'],
    testsPerPattern: 50
  },
  {
    id: 'sbi',
    title: 'SBI Exams',
    description: 'Complete preparation material for SBI PO/Clerk/SO positions',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    categories: ['PO', 'Clerk', 'SO'],
    testsPerPattern: 45
  },
  {
    id: 'lic',
    title: 'LIC Exams',
    description: 'Specialized preparation for LIC ADO and AAO positions',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80',
    categories: ['ADO', 'AAO'],
    testsPerPattern: 40
  },
  {
    id: 'ssc',
    title: 'SSC Exams',
    description: 'Comprehensive preparation for SSC CGL and CHSL examinations',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    categories: ['CGL', 'CHSL'],
    testsPerPattern: 55
  },
  {
    id: 'rbi',
    title: 'RBI Exams',
    description: 'Specialized preparation for various RBI positions',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    categories: ['Grade B', 'Assistant'],
    testsPerPattern: 35
  },
  {
    id: 'insurance',
    title: 'Insurance Exams',
    description: 'Preparation for various insurance sector examinations',
    icon: BadgeCheck,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    categories: ['NICL', 'UIIC', 'NIACL'],
    testsPerPattern: 30
  },
  {
    id: 'bank-clerks',
    title: 'Bank Clerks',
    description: 'Specialized preparation for bank clerk positions across all banks',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=800&q=80',
    categories: ['IBPS Clerk', 'SBI Clerk', 'RRB Clerk'],
    testsPerPattern: 45
  },
  {
    id: 'railways',
    title: 'Railways Exams',
    description: 'Complete preparation for various railway recruitment examinations',
    icon: Train,
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
    categories: ['Group D', 'NTPC', 'ALP'],
    testsPerPattern: 40
  }
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Exam Preparation Courses</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive study material and mock tests for all major competitive exams
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examCourses.map((course) => (
          <Link href="/pricing" key={course.id}>
            <Card className="h-full hover:shadow-lg transition-all duration-300 group">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <course.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{course.title}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {course.testsPerPattern} tests/pattern
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex flex-wrap gap-2">
                  {course.categories.map((category) => (
                    <span
                      key={category}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          All courses include comprehensive study materials, video lectures, and mock tests.
          <br />
          New test patterns are regularly added based on the latest exam patterns.
        </p>
      </div>
    </div>
  );
}