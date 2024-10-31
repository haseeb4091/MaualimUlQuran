"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow border-blue-900/10 hover:border-blue-900/20 bg-white/50 backdrop-blur-sm">
      <Icon className="h-12 w-12 text-blue-900 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
      <p className="text-blue-800/70">{description}</p>
    </Card>
  );
};