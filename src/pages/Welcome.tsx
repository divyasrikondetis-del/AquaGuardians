import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Droplets, Shield, Users, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  const handleWaterQuality = () => {
    navigate('/water-quality');
  };

  const handleDiseaseSurveillance = () => {
    navigate('/disease-surveillance');
  };

  const handleEarlyWarning = () => {
    navigate('/alerts');
  };

  const handleOverviewSystem = () => {
    navigate('/dashboard');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const features = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Quality Monitoring",
      description: "Real-time monitoring of water sources for pH, turbidity, and bacterial contamination"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Disease Surveillance",
      description: "Track and monitor water-borne disease cases across rural communities"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Early Warning System",
      description: "Automated alerts for potential health risks and outbreak prevention"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Dashboard",
      description: "Centralized platform for health workers and community leaders"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 relative">
      {/* Colorful background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgb(59,130,246,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgb(168,85,247,0.1)_0%,transparent_50%)]"></div>
      <div className="relative z-10">
        {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={handleBack} className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-60 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-full shadow-lg">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold text-primary">AQUA GUARDIANS</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Button variant="ghost" onClick={() => navigate('/')}>Home</Button>
              <Button variant="ghost" onClick={() => navigate('/about')}>About</Button>
              <Button variant="ghost" onClick={() => navigate('/how-to-use')}>How to Use</Button>
              <Button variant="ghost" onClick={() => navigate('/documentation')}>Documentation</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Smart Community Health Monitoring and Early Warning System for Water-Borne Diseases in Rural Northeast India
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-2 rounded-full border-2 border-gradient-to-r from-blue-300 to-cyan-300 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm opacity-50"></div>
                  <div className="relative">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AQUA GUARDIANS</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Protecting rural communities through intelligent water quality monitoring, disease surveillance, and early warning systems powered by technology.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Comprehensive Health Monitoring Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our integrated platform combines IoT sensors, data analytics, and community engagement to prevent water-borne diseases.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={
                feature.title === "Water Quality Monitoring" ? handleWaterQuality :
                feature.title === "Disease Surveillance" ? handleDiseaseSurveillance :
                feature.title === "Early Warning System" ? handleEarlyWarning :
                feature.title === "Community Dashboard" ? handleOverviewSystem :
                undefined
              }
            >
              <CardContent className="p-6 text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {feature.title === "Water Quality Monitoring" ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full shadow-xl">
                        <Droplets className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ) : feature.title === "Disease Surveillance" ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full shadow-xl">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ) : feature.title === "Early Warning System" ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <div className="relative bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full shadow-xl">
                        <AlertTriangle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ) : feature.title === "Community Dashboard" ? (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                      <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full shadow-xl">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ) : (
                    feature.icon
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <Button size="sm" className="mt-2">
                  {feature.title === "Water Quality Monitoring" ? "View Dashboard" :
                   feature.title === "Disease Surveillance" ? "View Surveillance" :
                   feature.title === "Early Warning System" ? "View Alerts" :
                   feature.title === "Community Dashboard" ? "View Overview" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Protect Your Community?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the digital health revolution and help prevent water-borne diseases in rural Northeast India.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-md opacity-60"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 p-1.5 rounded-full shadow-lg">
                <Droplets className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AQUA GUARDIANS</span>
          </div>
          <p className="text-muted-foreground">
            Building healthier communities through technology
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Welcome;