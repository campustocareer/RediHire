'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, FileText, ExternalLink, Bell } from 'lucide-react';
import Link from 'next/link';

const examNotifications = [
  {
    title: 'IBPS PO Recruitment 2025',
    organization: 'Institute of Banking Personnel Selection',
    registrationStart: '2025-05-01',
    registrationEnd: '2025-05-25',
    examDates: {
      preliminary: '2025-06-15',
      mains: '2025-07-20'
    },
    vacancies: '5000+',
    eligibility: 'Graduates with minimum 60%',
    applicationFee: {
      general: '₹850',
      scst: '₹175'
    },
    status: 'Upcoming',
    notificationLink: '#',
    description: 'Recruitment for Probationary Officers/Management Trainees in participating banks'
  },
  {
    title: 'SBI Clerk Recruitment 2025',
    organization: 'State Bank of India',
    registrationStart: '2025-06-01',
    registrationEnd: '2025-06-30',
    examDates: {
      preliminary: '2025-07-15',
      mains: '2025-08-20'
    },
    vacancies: '8000+',
    eligibility: 'Graduates in any discipline',
    applicationFee: {
      general: '₹750',
      scst: '₹125'
    },
    status: 'Coming Soon',
    notificationLink: '#',
    description: 'Junior Associates (Customer Support & Sales) recruitment in State Bank of India'
  },
  {
    title: 'RRB NTPC 2025',
    organization: 'Railway Recruitment Board',
    registrationStart: '2025-07-01',
    registrationEnd: '2025-07-31',
    examDates: {
      cbt1: '2025-08-10',
      cbt2: '2025-09-15'
    },
    vacancies: '10000+',
    eligibility: '12th Pass/Graduation as per post',
    applicationFee: {
      general: '₹500',
      scst: '₹250'
    },
    status: 'Upcoming',
    notificationLink: '#',
    description: 'Non-Technical Popular Categories recruitment for various posts in Indian Railways'
  },
  {
    title: 'SSC CGL 2025',
    organization: 'Staff Selection Commission',
    registrationStart: '2025-05-15',
    registrationEnd: '2025-06-15',
    examDates: {
      tier1: '2025-07-25',
      tier2: '2025-08-30'
    },
    vacancies: '12000+',
    eligibility: 'Graduates from recognized university',
    applicationFee: {
      general: '₹100',
      scst: 'Nil'
    },
    status: 'Coming Soon',
    notificationLink: '#',
    description: 'Combined Graduate Level examination for various Group B and C posts'
  }
];

export default function ExamsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Government Exam Notifications</h1>
        <p className="text-xl text-muted-foreground">
          Latest updates on upcoming government recruitment examinations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {examNotifications.map((exam, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">{exam.title}</CardTitle>
              <Badge 
                variant={exam.status === 'Upcoming' ? 'default' : 'secondary'}
                className="ml-2"
              >
                {exam.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  {exam.organization}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <CalendarDays className="h-4 w-4 mr-2 text-primary" />
                      <span>Registration Period</span>
                    </div>
                    <div className="text-sm font-medium">
                      {exam.registrationStart} to {exam.registrationEnd}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>Exam Dates</span>
                    </div>
                    <div className="text-sm font-medium">
                      {Object.entries(exam.examDates).map(([stage, date]) => (
                        <div key={stage} className="capitalize">
                          {stage}: {date}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-x-2">
                    <FileText className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Key Details:</span>
                  </div>
                  <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
                    <li>Vacancies: {exam.vacancies}</li>
                    <li>Eligibility: {exam.eligibility}</li>
                    <li>Application Fee: General - {exam.applicationFee.general}, SC/ST - {exam.applicationFee.scst}</li>
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground pt-2">
                  {exam.description}
                </p>

                <div className="flex items-center justify-between pt-4">
                  <Link href="/courses">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      Get Updates
                    </Button>
                  </Link>
                  <Link href={exam.notificationLink}>
                    <Button variant="default" size="sm" className="flex items-center gap-2">
                      View Details
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Stay updated with the latest government job notifications and exam announcements.
          <br />
          Dates are tentative and subject to change. Please check official websites for final dates.
        </p>
      </div>
    </div>
  );
}