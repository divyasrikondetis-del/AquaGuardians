import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Droplets } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WaterQualityDashboard from '@/components/water-quality/WaterQualityDashboard';

const WaterQualityPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="flex items-center space-x-2">
                <Droplets className="w-8 h-8 text-primary" />
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <WaterQualityDashboard />
      </main>
    </div>
  );
};

export default WaterQualityPage;