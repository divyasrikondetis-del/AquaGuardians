import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Droplets, Users, Heart, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleHowToUse = () => {
    navigate('/how-to-use');
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
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <Droplets className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-primary">AQUA GUARDIANS</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleHome}>Home</Button>
              <Button variant="default">About</Button>
              <Button variant="ghost" onClick={handleHowToUse}>How to Use</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About AQUA GUARDIANS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protecting rural communities in Northeast India through intelligent water quality monitoring 
            and disease surveillance technology.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To prevent water-borne diseases in rural Northeast India by providing real-time water quality monitoring, 
                early disease detection, and community-centered health alerts. We combine IoT sensors, data analytics, 
                and local community engagement to create a comprehensive health protection system.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A future where every rural community in Northeast India has access to safe drinking water 
                and is protected from water-borne diseases through technology-enabled early warning systems 
                and community empowerment.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 water quality tracking with IoT sensors
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Early Warnings</h3>
                <p className="text-sm text-muted-foreground">
                  Instant alerts for potential health risks
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Designed for rural communities and health workers
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Health Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Preventing disease outbreaks and saving lives
                </p>
              </CardContent>
            </Card>
          </div>
        </section>


        {/* Impact Section */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Making a Difference</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <p className="text-muted-foreground">Villages Monitored</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                  <p className="text-muted-foreground">People Protected</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <p className="text-muted-foreground">Disease Prevention Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default About;