'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import { AuthProvider } from '@/contexts/AuthContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}