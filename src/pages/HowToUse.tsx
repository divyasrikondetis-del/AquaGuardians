import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Droplets, Play, CheckCircle, AlertTriangle, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowToUse = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleAbout = () => {
    navigate('/about');
  };

  const steps = [
    {
      step: 1,
      title: "Access the Dashboard",
      description: "Start by clicking 'View Overview' from the home page to access the main dashboard.",
      icon: <Play className="w-6 h-6" />,
      actions: ["Navigate to dashboard", "View system overview"]
    },
    {
      step: 2,
      title: "Monitor Water Quality",
      description: "Check real-time water quality data from IoT sensors across different locations.",
      icon: <Droplets className="w-6 h-6" />,
      actions: ["View pH levels", "Check turbidity", "Monitor bacterial count"]
    },
    {
      step: 3,
      title: "Track Disease Surveillance",
      description: "Monitor disease patterns and outbreaks in your community.",
      icon: <AlertTriangle className="w-6 h-6" />,
      actions: ["View disease statistics", "Check outbreak patterns", "Monitor trends"]
    },
    {
      step: 4,
      title: "Manage Alerts",
      description: "Create, monitor, and respond to health alerts for your community.",
      icon: <AlertTriangle className="w-6 h-6" />,
      actions: ["Create new alerts", "Monitor active alerts", "Track response rates"]
    },
    {
      step: 5,
      title: "Engage Community",
      description: "Coordinate with community members and health workers.",
      icon: <Users className="w-6 h-6" />,
      actions: ["Send notifications", "Coordinate responses", "Share updates"]
    }
  ];

  const userRoles = [
    {
      role: "Health Workers",
      description: "Monitor community health, create alerts, and coordinate responses",
      features: ["Disease surveillance", "Alert management", "Community coordination"]
    },
    {
      role: "Community Leaders",
      description: "Oversee community health initiatives and emergency responses",
      features: ["Overview dashboard", "Alert monitoring", "Community engagement"]
    },
    {
      role: "System Administrators",
      description: "Manage system configuration and user permissions",
      features: ["System configuration", "User management", "Data analytics"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
                <Droplets className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-primary">AQUA GUARDIANS</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleHome}>Home</Button>
              <Button variant="ghost" onClick={handleAbout}>About</Button>
              <Button variant="default">How to Use</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">How to Use AQUA GUARDIANS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete guide to using our health monitoring and early warning system effectively.
          </p>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Getting Started</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">{step.icon}</div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.actions.map((action, actionIndex) => (
                          <Badge key={actionIndex} variant="secondary" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {action}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* User Roles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">User Roles & Permissions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {userRoles.map((user, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {user.role}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{user.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Features:</h4>
                    <ul className="space-y-1">
                      {user.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-success" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              className="h-20 flex-col gap-2"
              onClick={() => navigate('/dashboard')}
            >
              <Play className="w-6 h-6" />
              Start Dashboard
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => navigate('/water-quality')}
            >
              <Droplets className="w-6 h-6" />
              Water Quality
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => navigate('/disease-surveillance')}
            >
              <AlertTriangle className="w-6 h-6" />
              Disease Tracking
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col gap-2"
              onClick={() => navigate('/alerts')}
            >
              <AlertTriangle className="w-6 h-6" />
              Alert System
            </Button>
          </div>
        </section>

        {/* Help & Support */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Our system is designed to be intuitive, but if you need assistance, 
                contact your local health coordinator or system administrator.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  System Guide
                </Button>
                <Button>
                  <Users className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default HowToUse;