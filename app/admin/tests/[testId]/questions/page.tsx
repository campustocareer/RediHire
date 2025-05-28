'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Plus, Save, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Test {
  id: string;
  name: string;
  numberOfQuestions: number;
}

export default function QuestionsPage({ params }: { params: { testId: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const [test, setTest] = useState<Test | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: '',
  });

  useEffect(() => {
    if (!user?.isAdmin) {
      router.push('/auth');
      return;
    }

    // Load test data
    const tests = JSON.parse(localStorage.getItem('tests') || '[]');
    const currentTest = tests.find((t: Test) => t.id === params.testId);
    if (!currentTest) {
      router.push('/admin');
      return;
    }
    setTest(currentTest);

    // Load questions
    const savedQuestions = localStorage.getItem(`test_questions_${params.testId}`);
    if (savedQuestions) {
      setQuestions(JSON.parse(savedQuestions));
    }
  }, [params.testId, router, user]);

  const handleAddQuestion = () => {
    if (!newQuestion.question || newQuestion.options.some(opt => !opt)) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const question: Question = {
      id: Date.now().toString(),
      ...newQuestion,
    };

    const updatedQuestions = [...questions, question];
    setQuestions(updatedQuestions);
    localStorage.setItem(`test_questions_${params.testId}`, JSON.stringify(updatedQuestions));

    setNewQuestion({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: '',
    });

    toast({
      title: "Success",
      description: "Question added successfully",
    });
  };

  const handleDeleteQuestion = (questionId: string) => {
    const updatedQuestions = questions.filter(q => q.id !== questionId);
    setQuestions(updatedQuestions);
    localStorage.setItem(`test_questions_${params.testId}`, JSON.stringify(updatedQuestions));

    toast({
      title: "Success",
      description: "Question deleted successfully",
    });
  };

  if (!test) {
    return <div>Loading...</div>;
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
          <h1 className="text-4xl font-bold mb-2">{test.name}</h1>
          <p className="text-muted-foreground">
            Add questions ({questions.length} / {test.numberOfQuestions} questions)
          </p>
        </div>
      </div>

      {/* Add New Question */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Question</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="question">Question</Label>
              <Textarea
                id="question"
                value={newQuestion.question}
                onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                placeholder="Enter your question"
              />
            </div>
            <div className="space-y-4">
              <Label>Options</Label>
              {newQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Input
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...newQuestion.options];
                      newOptions[index] = e.target.value;
                      setNewQuestion({ ...newQuestion, options: newOptions });
                    }}
                    placeholder={`Option ${index + 1}`}
                  />
                  <Button
                    variant={newQuestion.correctAnswer === index ? "default" : "outline"}
                    onClick={() => setNewQuestion({ ...newQuestion, correctAnswer: index })}
                  >
                    Correct
                  </Button>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <Label htmlFor="explanation">Explanation</Label>
              <Textarea
                id="explanation"
                value={newQuestion.explanation}
                onChange={(e) => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                placeholder="Explain the correct answer"
              />
            </div>
            <Button onClick={handleAddQuestion} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Question
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Existing Questions */}
      <div className="space-y-6">
        {questions.map((question, index) => (
          <Card key={question.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Question {index + 1}</span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="font-medium">{question.question}</p>
                <div className="space-y-2">
                  {question.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className={`p-3 rounded-lg ${
                        optIndex === question.correctAnswer
                          ? 'bg-green-100 dark:bg-green-900/20'
                          : 'bg-gray-100 dark:bg-gray-900/20'
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">Explanation:</p>
                  <p className="text-sm">{question.explanation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}