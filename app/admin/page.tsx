'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, Timer, FileText } from 'lucide-react';
import Link from 'next/link';

interface Test {
  id: string;
  name: string;
  category: string;
  numberOfQuestions: number;
  timeLimit: number;
  createdAt: string;
}

const categories = [
  'IBPS PO',
  'SBI Clerk',
  'SSC CGL',
  'Railway NTPC',
  'Bank PO',
  'UPSC CSE',
];

export default function AdminPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const [tests, setTests] = useState<Test[]>([]);
  const [newTest, setNewTest] = useState({
    name: '',
    category: '',
    numberOfQuestions: 50,
    timeLimit: 60,
  });

  useEffect(() => {
    if (!user?.isAdmin) {
      router.push('/auth');
      return;
    }

    // Load existing tests
    const savedTests = localStorage.getItem('tests');
    if (savedTests) {
      setTests(JSON.parse(savedTests));
    }
  }, [user, router]);

  const handleCreateTest = () => {
    if (!newTest.name || !newTest.category) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const test: Test = {
      id: Date.now().toString(),
      ...newTest,
      createdAt: new Date().toISOString(),
    };

    const updatedTests = [...tests, test];
    setTests(updatedTests);
    localStorage.setItem('tests', JSON.stringify(updatedTests));

    // Create empty questions array for this test
    localStorage.setItem(`test_questions_${test.id}`, JSON.stringify([]));

    toast({
      title: "Success",
      description: "Test created successfully. You can now add questions.",
    });

    // Redirect to questions page
    router.push(`/admin/tests/${test.id}/questions`);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Create New Test</h1>
          <p className="text-muted-foreground">Set up a new examination</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Test Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Test Name</Label>
              <Input
                id="name"
                value={newTest.name}
                onChange={(e) => setNewTest({ ...newTest, name: e.target.value })}
                placeholder="Enter test name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={newTest.category}
                onValueChange={(value) => setNewTest({ ...newTest, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="questions">Number of Questions</Label>
              <Input
                id="questions"
                type="number"
                value={newTest.numberOfQuestions}
                onChange={(e) => setNewTest({ ...newTest, numberOfQuestions: parseInt(e.target.value) })}
                min={1}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time Limit (minutes)</Label>
              <Input
                id="time"
                type="number"
                value={newTest.timeLimit}
                onChange={(e) => setNewTest({ ...newTest, timeLimit: parseInt(e.target.value) })}
                min={1}
              />
            </div>
          </div>
          <Button onClick={handleCreateTest} className="mt-6">
            <Plus className="h-4 w-4 mr-2" />
            Create Test and Add Questions
          </Button>
        </CardContent>
      </Card>

      {/* Existing Tests */}
      {tests.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Existing Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tests.map((test) => (
                <Card key={test.id}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{test.name}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>{test.numberOfQuestions} Questions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Timer className="h-4 w-4" />
                        <span>{test.timeLimit} Minutes</span>
                      </div>
                    </div>
                    <Link href={`/admin/tests/${test.id}/questions`}>
                      <Button className="w-full mt-4">
                        Manage Questions
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}