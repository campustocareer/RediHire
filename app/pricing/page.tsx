import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Get started with basic exam preparation',
    features: [
      'Limited tests',
      'Basic quizzes',
      '1 attempt per test',
      'Basic performance tracking',
      'Access to community forums'
    ]
  },
  {
    name: 'Premium',
    price: '₹999/month',
    yearlyPrice: '₹9,999/year',
    description: 'Everything you need for serious preparation',
    features: [
      'Unlimited tests',
      'Detailed analytics',
      'AI recommendations',
      'Unlimited attempts',
      'Certification',
      'Priority support',
      'Mock interviews'
    ]
  },
  {
    name: 'Lifetime',
    price: '₹24,999',
    description: 'One-time payment for lifetime access',
    features: [
      'All premium benefits',
      'Live discussions',
      'Personalized mentorship',
      'Free future updates',
      'Interview preparation',
      'Study material downloads',
      'Career guidance'
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-xl text-muted-foreground">
          Select the perfect plan for your exam preparation journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className="relative">
            {plan.name === 'Premium' && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.yearlyPrice && (
                  <div className="text-muted-foreground mt-2">or {plan.yearlyPrice}</div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8">
                {plan.name === 'Basic' ? 'Get Started' : 'Subscribe Now'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          All plans include access to our community forums and basic study materials.
          <br />
          Need help choosing? Contact our support team.
        </p>
      </div>
    </div>
  );
}