'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  Save,
  Sun,
  Moon,
  CheckCircle2,
  XCircle,
  BarChart3,
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

const mockQuestions: Question[] = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    correctAnswer: 1,
    explanation: "New Delhi is the capital city of India.",
    topic: "General Knowledge"
  },
  {
    id: 2,
    question: "Which of these is not a data type in JavaScript?",
    options: ["string", "boolean", "float", "undefined"],
    correctAnswer: 2,
    explanation: "JavaScript does not have a float data type. It uses 'number' for all numeric values.",
    topic: "Computer Knowledge"
  },
  // Add more questions as needed
];

export default function ExamPage() {
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(mockQuestions.length).fill(-1));
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [savedProgress, setSavedProgress] = useState<boolean>(false);

  useEffect(() => {
    // Load saved progress if exists
    const savedAnswers = localStorage.getItem('examAnswers');
    const savedTime = localStorage.getItem('examTimeLeft');
    if (savedAnswers && savedTime) {
      setAnswers(JSON.parse(savedAnswers));
      setTimeLeft(parseInt(savedTime));
      setSavedProgress(true);
    }
  }, []);

  useEffect(() => {
    if (!examStarted || examSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examSubmitted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSaveProgress = () => {
    localStorage.setItem('examAnswers', JSON.stringify(answers));
    localStorage.setItem('examTimeLeft', timeLeft.toString());
    toast({
      title: "Progress Saved",
      description: "Your exam progress has been saved successfully.",
    });
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === mockQuestions[index].correctAnswer) correct++;
    });
    return {
      correct,
      total: mockQuestions.length,
      percentage: Math.round((correct / mockQuestions.length) * 100)
    };
  };

  const handleSubmit = () => {
    setExamSubmitted(true);
    localStorage.removeItem('examAnswers');
    localStorage.removeItem('examTimeLeft');
    const score = calculateScore();
    toast({
      title: "Exam Submitted",
      description: `You scored ${score.correct}/${score.total} (${score.percentage}%)`,
    });
  };

  const startExam = () => {
    setExamStarted(true);
  };

  if (!examStarted) {
    return (
      <div className="container mx-auto py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Ready to Start Your Exam?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Exam Details:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Duration: 60 minutes</li>
                <li>Total Questions: {mockQuestions.length}</li>
                <li>All questions are multiple choice</li>
              </ul>
            </div>
            {savedProgress && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <p className="text-sm">You have a saved exam in progress. Would you like to continue?</p>
              </div>
            )}
            <Button onClick={startExam} className="w-full">
              {savedProgress ? "Continue Exam" : "Start Exam"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (examSubmitted) {
    const score = calculateScore();
    const weakTopics = new Map<string, { total: number; correct: number }>();
    
    // Calculate performance by topic
    mockQuestions.forEach((question, index) => {
      if (!weakTopics.has(question.topic)) {
        weakTopics.set(question.topic, { total: 0, correct: 0 });
      }
      const topicStats = weakTopics.get(question.topic)!;
      topicStats.total++;
      if (answers[index] === question.correctAnswer) {
        topicStats.correct++;
      }
    });

    return (
      <div className="container mx-auto py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Exam Results</span>
              <Badge variant={score.percentage >= 60 ? "default" : "destructive"}>
                {score.percentage}%
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance Analysis
              </h3>
              <Progress value={score.percentage} className="h-2" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{score.correct}</p>
                  <p className="text-sm text-muted-foreground">Correct</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{score.total - score.correct}</p>
                  <p className="text-sm text-muted-foreground">Incorrect</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{score.total}</p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Question Analysis</h3>
              <div className="space-y-4">
                {mockQuestions.map((question, index) => (
                  <div key={question.id} className="border rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      {answers[index] === question.correctAnswer ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      <div className="space-y-2">
                        <p className="font-medium">{question.question}</p>
                        <p className="text-sm text-muted-foreground">
                          Your answer: {question.options[answers[index]]}
                        </p>
                        {answers[index] !== question.correctAnswer && (
                          <p className="text-sm text-green-600 dark:text-green-400">
                            Correct answer: {question.options[question.correctAnswer]}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="text-lg py-1 px-4">
              <Clock className="h-4 w-4 mr-2" />
              {formatTime(timeLeft)}
            </Badge>
            <Badge variant="outline" className="text-lg py-1 px-4">
              {currentQuestion + 1}/{mockQuestions.length}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSaveProgress}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save Progress
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Question {currentQuestion + 1}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">{mockQuestions[currentQuestion].question}</p>
            <div className="space-y-3">
              {mockQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={answers[currentQuestion] === index ? "default" : "outline"}
                  className="w-full justify-start text-left"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          {currentQuestion === mockQuestions.length - 1 ? (
            <Button onClick={handleSubmit}>Submit Exam</Button>
          ) : (
            <Button
              onClick={() => setCurrentQuestion(prev => Math.min(mockQuestions.length - 1, prev + 1))}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>

        <div className="flex justify-center">
          <div className="flex flex-wrap gap-2 max-w-md">
            {mockQuestions.map((_, index) => (
              <Button
                key={index}
                variant={answers[index] === -1 ? "outline" : "default"}
                size="sm"
                className="w-10 h-10"
                onClick={() => setCurrentQuestion(index)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}