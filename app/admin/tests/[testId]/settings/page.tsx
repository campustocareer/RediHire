'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

interface TestSettings {
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  showResults: boolean;
  passingScore: number;
  negativeMarking: boolean;
  negativeMarkingValue: number;
  allowPause: boolean;
  showTimer: boolean;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

interface Test {
  id: string;
  name: string;
  settings?: TestSettings;
}

const defaultSettings: TestSettings = {
  shuffleQuestions: true,
  shuffleOptions: true,
  showResults: true,
  passingScore: 35,
  negativeMarking: false,
  negativeMarkingValue: 0.25,
  allowPause: false,
  showTimer: true,
  category: '',
  difficulty: 'medium',
};

export default function TestSettingsPage({ params }: { params: { testId: string } }) {
  const router = useRouter();
  const { user } = useAuth();
  const { toast } = useToast();
  const [test, setTest] = useState<Test | null>(null);
  const [settings, setSettings] = useState<TestSettings>(defaultSettings);

  useEffect(() => {
    if (!user?.isAdmin) {
      router.push('/auth');
      return;
    }

    // Load test data
    const tests = JSON.parse(localStorage.getItem('adminTests') || '[]');
    const currentTest = tests.find((t: Test) => t.id === params.testId);
    if (!currentTest) {
      router.push('/admin/tests');
      return;
    }
    setTest(currentTest);

    // Load settings
    const savedSettings = localStorage.getItem(`test_settings_${params.testId}`);
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, [params.testId, router, user]);

  const handleSaveSettings = () => {
    if (!test) return;

    localStorage.setItem(`test_settings_${params.testId}`, JSON.stringify(settings));

    // Update test status to active if it was in draft
    const tests = JSON.parse(localStorage.getItem('adminTests') || '[]');
    const updatedTests = tests.map((t: Test) => {
      if (t.id === test.id) {
        return { ...t, status: 'active' };
      }
      return t;
    });
    localStorage.setItem('adminTests', JSON.stringify(updatedTests));

    toast({
      title: "Success",
      description: "Test settings saved successfully",
    });
  };

  if (!test) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/tests">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-4xl font-bold mb-2">{test.name}</h1>
          <p className="text-muted-foreground">Configure test settings and behavior</p>
        </div>
        <Button className="ml-auto" onClick={handleSaveSettings}>
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Shuffle Questions</Label>
                <p className="text-sm text-muted-foreground">
                  Randomize the order of questions for each attempt
                </p>
              </div>
              <Switch
                checked={settings.shuffleQuestions}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, shuffleQuestions: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Shuffle Options</Label>
                <p className="text-sm text-muted-foreground">
                  Randomize the order of answer options
                </p>
              </div>
              <Switch
                checked={settings.shuffleOptions}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, shuffleOptions: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Show Results Immediately</Label>
                <p className="text-sm text-muted-foreground">
                  Display correct answers after test completion
                </p>
              </div>
              <Switch
                checked={settings.showResults}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, showResults: checked })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Passing Score (%)</Label>
              <Input
                type="number"
                value={settings.passingScore}
                onChange={(e) =>
                  setSettings({ ...settings, passingScore: parseInt(e.target.value) })
                }
                min={0}
                max={100}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Negative Marking</Label>
                <p className="text-sm text-muted-foreground">
                  Deduct marks for incorrect answers
                </p>
              </div>
              <Switch
                checked={settings.negativeMarking}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, negativeMarking: checked })
                }
              />
            </div>
            {settings.negativeMarking && (
              <div className="space-y-2">
                <Label>Negative Marking Value</Label>
                <Input
                  type="number"
                  value={settings.negativeMarkingValue}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      negativeMarkingValue: parseFloat(e.target.value),
                    })
                  }
                  step={0.25}
                  min={0}
                />
              </div>
            )}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Allow Pause</Label>
                <p className="text-sm text-muted-foreground">
                  Let users pause the test
                </p>
              </div>
              <Switch
                checked={settings.allowPause}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, allowPause: checked })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Show Timer</Label>
                <p className="text-sm text-muted-foreground">
                  Display countdown timer during test
                </p>
              </div>
              <Switch
                checked={settings.showTimer}
                onCheckedChange={(checked) =>
                  setSettings({ ...settings, showTimer: checked })
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Properties</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Difficulty Level</Label>
              <Select
                value={settings.difficulty}
                onValueChange={(value: 'easy' | 'medium' | 'hard') =>
                  setSettings({ ...settings, difficulty: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}