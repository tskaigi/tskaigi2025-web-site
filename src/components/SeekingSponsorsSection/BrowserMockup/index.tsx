import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function BrowserMockup({ children, className }: Props) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="bg-zinc-100 px-4 py-2 border-b flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <Input
          readOnly
          value="https://2025.tskaigi.org"
          className="h-8 bg-white/80 text-sm focus-visible:ring-0"
        />
      </div>
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  );
}
