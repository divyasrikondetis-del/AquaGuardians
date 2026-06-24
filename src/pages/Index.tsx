import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/ui/navigation';
import OverviewDashboard from '@/components/overview/OverviewDashboard';
import WaterQualityDashboard from '@/components/water-quality/WaterQualityDashboard';
import DiseaseDashboard from '@/components/disease-surveillance/DiseaseDashboard';
import AlertsSystem from '@/components/alerts/AlertsSystem';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <OverviewDashboard />;
      case 'water-quality':
        return <WaterQualityDashboard />;
      case 'disease-surveillance':
        return <DiseaseDashboard />;
      case 'alerts':
        return <AlertsSystem />;
      case 'community':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Community Dashboard</h2>
            <p className="text-muted-foreground">Community health information and resources (Coming Soon)</p>
          </div>
        );
      case 'admin':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            <p className="text-muted-foreground">System administration and configuration (Coming Soon)</p>
          </div>
        );
      default:
        return <OverviewDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button Header */}
      <nav className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-2">
                <Home className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-primary">AQUA GUARDIANS</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="default" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/about')}>About</Button>
              <Button variant="ghost" onClick={() => navigate('/how-to-use')}>How to Use</Button>
            </div>
          </div>
        </div>
      </nav>
      
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="container mx-auto px-4 py-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;