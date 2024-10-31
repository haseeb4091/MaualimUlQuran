import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { GeometricPattern } from '@/components/ui/geometric-pattern';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mualim ul Quran - Islamic Education Platform',
  description: 'Learn Quran online with qualified teachers. Quran reading, memorization, and Islamic studies courses available.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen")}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-900/10">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="text-xl font-bold text-blue-900">Mualim ul Quran</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-blue-900/70 hover:text-blue-900 transition-colors">Home</a>
              <a href="#" className="text-blue-900/70 hover:text-blue-900 transition-colors">Courses</a>
              <a href="#" className="text-blue-900/70 hover:text-blue-900 transition-colors">About</a>
              <a href="#" className="text-blue-900/70 hover:text-blue-900 transition-colors">Contact</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-blue-900 text-white py-12 relative">
          <GeometricPattern />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-amber-400">About Us</h3>
                <p className="text-blue-100">Dedicated to providing quality Islamic education worldwide through online learning.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
                <ul className="space-y-2 text-blue-100">
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Courses</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-amber-400">Programs</h3>
                <ul className="space-y-2 text-blue-100">
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Quran Reading</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Quran Memorization</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Islamic Studies</a></li>
                  <li><a href="#" className="hover:text-amber-400 transition-colors">Online Classes</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>Email: info@mualimulquran.com</li>
                  <li>Phone: +1 234 567 890</li>
                  <li>Address: Your Location</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-100">
              <p>&copy; {new Date().getFullYear()} Mualim ul Quran. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}