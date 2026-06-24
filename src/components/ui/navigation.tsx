import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  Droplets, 
  AlertTriangle, 
  Users, 
  Settings,
  Home
} from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const Navigation = ({ activeTab, onTabChange, className }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Overview', icon: Home },
    { id: 'water-quality', label: 'Water Quality', icon: Droplets },
    { id: 'disease-surveillance', label: 'Disease Tracking', icon: Activity },
    { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'admin', label: 'Admin', icon: Settings },
  ];

  return (
    <nav className={cn("bg-card border-b border-border p-4", className)}>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-health rounded-lg flex items-center justify-center">
            <Droplets className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">HealthGuard</h1>
        </div>
        
        <div className="flex gap-2 ml-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onTabChange(item.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;