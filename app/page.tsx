"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap, Users, BookOpenCheck, ArrowRight, Scroll } from "lucide-react";
import Image from "next/image";
import { GeometricPattern } from "@/components/ui/geometric-pattern";
import { FeatureCard } from "@/components/ui/feature-card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-blue-900">
        <GeometricPattern />
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2048&auto=format&fit=crop"
            alt="Islamic Architecture"
            fill
            className="object-cover mix-blend-overlay opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Scroll className="h-16 w-16 mx-auto mb-6 text-amber-400" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
            Mualim ul Quran
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Illuminating Minds Through Divine Knowledge
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-blue-900">
              Begin Your Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-amber-400 border-amber-400 hover:bg-amber-400/10">
              Discover More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <GeometricPattern />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Sacred Programs</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Quran Reading"
              description="Master Quranic recitation with proper Tajweed rules and pronunciation"
            />
            <FeatureCard
              icon={BookOpenCheck}
              title="Quran Memorization"
              description="Comprehensive Hifz program with dedicated mentorship"
            />
            <FeatureCard
              icon={GraduationCap}
              title="Islamic Studies"
              description="Deep dive into Islamic history, fiqh, and fundamental principles"
            />
            <FeatureCard
              icon={Users}
              title="Online Classes"
              description="Interactive learning sessions with qualified scholars"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-blue-900 relative">
        <GeometricPattern />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=1280&auto=format&fit=crop"
                alt="Students Learning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/40"></div>
            </div>
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Mualim ul Quran</h2>
              <div className="w-24 h-1 bg-amber-400 mb-6"></div>
              <p className="text-blue-100 mb-6">
                Mualim ul Quran stands as a beacon of Islamic education, dedicated to nurturing souls through authentic knowledge. Our mission is to make traditional Islamic learning accessible while embracing modern educational methods.
              </p>
              <ul className="space-y-4">
                {[
                  "Qualified and Experienced Teachers",
                  "Flexible Learning Schedule",
                  "One-on-One Attention",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-400/20 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                    </div>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 relative">
        <GeometricPattern />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Begin Your Sacred Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-900/80">
            Join our growing community of seekers and embark on a transformative journey of Islamic learning
          </p>
          <Button size="lg" variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-amber-500">
            Enroll Now
          </Button>
        </div>
      </section>
    </main>
  );
}