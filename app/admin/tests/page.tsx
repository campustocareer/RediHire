'use client';

import { useState } from 'react';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Plus, Timer, FileText, Settings, Trash2, PenSquare } from 'lucide-react';
import Link from 'next/link';

interface Test {
  id: string;
  name: string;
  category: string;
  totalQuestions: number;
  timeLimit: number;
  createdAt: string;
  status: 'active' | 'draft';
}

const categories = [
  'IBPS PO',
  'SBI Clerk',
  'SSC CGL',
  'Railway NTPC',
  'Bank PO',
  'UPSC CSE',
];

export default function TestManagementPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const [tests, setTests] = useState<Test[]>(() => {
    const savedTests = localStorage.getItem('adminTests');
    return savedTests ? JSON.parse(savedTests) : [];
  });
  const [isCreating, setIsCreating] = useState(false);
  const [newTest, setNewTest] = useState({
    name: '',
    category: '',
    totalQuestions: 50,
    timeLimit: 60,
  });

  if (!user?.isAdmin) {
    router.push('/auth');
    return null;
  }

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
      status: 'draft',
    };

    const updatedTests = [...tests, test];
    setTests(updatedTests);
    localStorage.setItem('adminTests', JSON.stringify(updatedTests));

    setIsCreating(false);
    setNewTest({
      name: '',
      category: '',
      totalQuestions: 50,
      timeLimit: 60,
    });

    toast({
      title: "Success",
      description: "Test created successfully",
    });
  };

  const handleDeleteTest = (testId: string) => {
    const updatedTests = tests.filter(test => test.id !== testId);
    setTests(updatedTests);
    localStorage.setItem('adminTests', JSON.stringify(updatedTests));

    toast({
      title: "Success",
      description: "Test deleted successfully",
    });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Test Management</h1>
          <p className="text-muted-foreground">Create and manage examination tests</p>
        </div>
        <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create New Test
        </Button>
      </div>

      {isCreating && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Create New Test</CardTitle>
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
                  value={newTest.totalQuestions}
                  onChange={(e) => setNewTest({ ...newTest, totalQuestions: parseInt(e.target.value) })}
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
            <div className="flex justify-end gap-4 mt-6">
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateTest}>
                Create Test
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>All Tests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Test Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Time Limit</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tests.map((test) => (
                <TableRow key={test.id}>
                  <TableCell>{test.name}</TableCell>
                  <TableCell>{test.category}</TableCell>
                  <TableCell>{test.totalQuestions}</TableCell>
                  <TableCell>{test.timeLimit} mins</TableCell>
                  <TableCell>{new Date(test.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      test.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {test.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/tests/${test.id}/questions`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <PenSquare className="h-4 w-4" />
                          Questions
                        </Button>
                      </Link>
                      <Link href={`/admin/tests/${test.id}/settings`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          Settings
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteTest(test.id)}
                        className="flex items-center gap-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}