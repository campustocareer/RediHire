'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  ArrowLeft,
  Award,
  Clock,
  RefreshCw,
  Trash2,
  User
} from 'lucide-react';
import Link from 'next/link';

interface UserData {
  id: string;
  name: string;
  email: string;
  registeredDate: string;
  lastLogin: string;
  testsCompleted: number;
  averageScore: number;
  studyTime: number;
  rank: number;
  recentTests: {
    name: string;
    score: number;
    date: string;
  }[];
  performanceByTopic: {
    topic: string;
    score: number;
  }[];
}

export default function UserDetailsPage({ params }: { params: { userId: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || user.email !== 'admin@edupro.com') {
      router.push('/auth');
      return;
    }

    const loadUserData = () => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const targetUser = users.find((u: any) => u.id === params.userId);
      
      if (!targetUser) {
        router.push('/admin');
        return;
      }

      // Enhance user data with mock performance data
      const enhancedUser: UserData = {
        ...targetUser,
        registeredDate: new Date(parseInt(targetUser.id)).toLocaleDateString(),
        lastLogin: new Date().toLocaleDateString(),
        testsCompleted: Math.floor(Math.random() * 20),
        averageScore: Math.floor(Math.random() * 40) + 60,
        studyTime: Math.floor(Math.random() * 100),
        rank: Math.floor(Math.random() * 1000) + 1,
        recentTests: [
          { name: 'IBPS PO Mock Test 3', score: 82, date: '2024-03-20' },
          { name: 'SBI Clerk Practice Set', score: 75, date: '2024-03-18' },
          { name: 'SSC CGL Mock Test', score: 68, date: '2024-03-15' },
        ],
        performanceByTopic: [
          { topic: 'Quantitative Aptitude', score: 85 },
          { topic: 'Reasoning', score: 78 },
          { topic: 'English Language', score: 72 },
          { topic: 'General Awareness', score: 65 },
        ],
      };

      setUserData(enhancedUser);
      setLoading(false);
    };

    loadUserData();
  }, [user, router, params.userId]);

  const handleRemoveUser = (userId: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.filter((u: any) => u.id !== userId);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    toast({
      title: "User Removed",
      description: "The user has been successfully removed.",
    });

    router.push('/admin');
  };

  const resetUserStats = () => {
    if (!userData) return;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map((u: any) => {
      if (u.id === userData.id) {
        return {
          ...u,
          testsCompleted: 0,
          averageScore: 0,
          studyTime: 0,
          rank: 0,
          recentTests: [],
          performanceByTopic: [],
        };
      }
      return u;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Update local state
    setUserData({
      ...userData,
      testsCompleted: 0,
      averageScore: 0,
      studyTime: 0,
      rank: 0,
      recentTests: [],
      performanceByTopic: [],
    });

    toast({
      title: "Stats Reset",
      description: "User statistics have been reset successfully.",
    });
  };

  if (loading || !userData) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold mb-2">User Profile</h1>
          <p className="text-muted-foreground">Detailed information and performance metrics</p>
        </div>
      </div>

      {/* User Info */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Basic Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="text-lg font-medium">{userData.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-lg font-medium">{userData.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Registered Date</p>
              <p className="text-lg font-medium">{userData.registeredDate}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Last Login</p>
              <p className="text-lg font-medium">{userData.lastLogin}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.testsCompleted}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.averageScore}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.studyTime}h</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{userData.rank}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Tests */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Tests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userData.recentTests.map((test, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{test.name}</p>
                  <p className="text-sm text-muted-foreground">{test.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Progress value={test.score} className="w-24 h-2" />
                  <span className="font-medium">{test.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance by Topic */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Performance by Topic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userData.performanceByTopic.map((topic, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>{topic.topic}</span>
                  <span className="font-medium">{topic.score}%</span>
                </div>
                <Progress value={topic.score} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Admin Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Administrative Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={resetUserStats}
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Reset Stats
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleRemoveUser(userData.id)}
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Remove User
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}