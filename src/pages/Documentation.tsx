import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, FileText, Users, Shield, Droplets, AlertTriangle, Database, Globe, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Documentation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: FileText },
    { id: 'abstract', title: 'Abstract', icon: FileText },
    { id: 'requirements', title: 'Requirements', icon: Settings },
    { id: 'design', title: 'Design', icon: Users },
    { id: 'implementation', title: 'Implementation', icon: Database },
    { id: 'testing', title: 'Testing', icon: Shield },
    { id: 'deployment', title: 'Deployment & Maintenance', icon: Globe },
    { id: 'output', title: 'Output', icon: Droplets },
    { id: 'conclusion', title: 'Conclusion', icon: AlertTriangle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10"></div>
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
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation for the Smart Community Health Monitoring and Early Warning System for Water-Borne Diseases in Rural Northeast India
            </p>
          </div>

          {/* Table of Contents */}
          <Card className="mb-8 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Table of Contents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {sections.map((section, index) => (
                  <Button
                    key={section.id}
                    variant="outline"
                    className="justify-start h-auto py-3"
                    onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <section.icon className="w-4 h-4 mr-2" />
                    <div className="text-left">
                      <div className="font-medium">{index + 1}. {section.title}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Documentation Sections */}
          <div className="space-y-8">
            {/* 1. Introduction */}
            <Card id="introduction" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="w-6 h-6 mr-2" />
                  1. Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Water-borne diseases pose a significant public health challenge in rural Northeast India, where access to clean water and healthcare infrastructure remains limited. The AQUA GUARDIANS system addresses this critical need by providing a comprehensive, technology-driven solution for community health monitoring and disease prevention.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This project integrates IoT sensors, real-time data analytics, and community engagement platforms to create an early warning system that can detect potential health risks before they escalate into outbreaks. By empowering local health workers and community leaders with actionable insights, we aim to significantly reduce the incidence of water-borne diseases in underserved rural communities.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold mb-2">Project Scope</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Real-time water quality monitoring across multiple sources</li>
                    <li>Disease surveillance and outbreak tracking</li>
                    <li>Automated early warning system for health risks</li>
                    <li>Community dashboard for health workers and leaders</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 2. Abstract */}
            <Card id="abstract" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="w-6 h-6 mr-2" />
                  2. Abstract
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The Smart Community Health Monitoring and Early Warning System (AQUA GUARDIANS) is an innovative digital health platform designed to combat water-borne diseases in rural Northeast India. This system combines Internet of Things (IoT) technology, machine learning algorithms, and community-centered design to provide comprehensive health monitoring capabilities.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Continuous water quality monitoring (pH, turbidity, bacterial levels)</li>
                      <li>Real-time disease surveillance and case tracking</li>
                      <li>Predictive analytics for outbreak prevention</li>
                      <li>Mobile-friendly community dashboard</li>
                      <li>Automated alert system for health emergencies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Expected Impact</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>50% reduction in water-borne disease incidents</li>
                      <li>Improved response time to health emergencies</li>
                      <li>Enhanced community health awareness</li>
                      <li>Data-driven public health decision making</li>
                      <li>Strengthened healthcare infrastructure</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Requirements */}
            <Card id="requirements" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Settings className="w-6 h-6 mr-2" />
                  3. Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">3.1 Functional Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Water Quality Monitoring</h4>
                      <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                        <li>Real-time pH monitoring (range: 6.0-8.5)</li>
                        <li>Turbidity measurement (0-1000 NTU)</li>
                        <li>Bacterial contamination detection</li>
                        <li>Temperature monitoring</li>
                        <li>Data logging and storage</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Disease Surveillance</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                        <li>Case registration and tracking</li>
                        <li>Symptom pattern analysis</li>
                        <li>Geographic clustering detection</li>
                        <li>Outbreak identification</li>
                        <li>Epidemiological reporting</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">3.2 Non-Functional Requirements</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Performance</h4>
                      <ul className="list-disc list-inside text-sm text-purple-700 space-y-1">
                        <li>Response time &lt; 2 seconds</li>
                        <li>99.5% system uptime</li>
                        <li>Support for 1000+ concurrent users</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Security</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li>End-to-end data encryption</li>
                        <li>Role-based access control</li>
                        <li>GDPR compliance</li>
                      </ul>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-teal-800 mb-2">Usability</h4>
                      <ul className="list-disc list-inside text-sm text-teal-700 space-y-1">
                        <li>Mobile-responsive design</li>
                        <li>Multi-language support</li>
                        <li>Offline data collection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Design */}
            <Card id="design" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-6 h-6 mr-2" />
                  4. System Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">4.1 System Architecture</h3>
                  <div className="bg-slate-50 p-6 rounded-lg border">
                    <div className="text-center text-sm text-slate-600 mb-4">System Architecture Overview</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-blue-100 p-4 rounded-lg text-center">
                        <Database className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                        <div className="font-semibold">Data Layer</div>
                        <div className="text-sm text-slate-600">IoT Sensors, Database, APIs</div>
                      </div>
                      <div className="bg-green-100 p-4 rounded-lg text-center">
                        <Settings className="w-8 h-8 mx-auto mb-2 text-green-600" />
                        <div className="font-semibold">Processing Layer</div>
                        <div className="text-sm text-slate-600">Analytics, ML Models, Alerts</div>
                      </div>
                      <div className="bg-purple-100 p-4 rounded-lg text-center">
                        <Globe className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                        <div className="font-semibold">Presentation Layer</div>
                        <div className="text-sm text-slate-600">Web App, Mobile Interface</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">4.2 Technology Stack</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Frontend Technologies</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>React 18 with TypeScript</li>
                        <li>Tailwind CSS for styling</li>
                        <li>Shadcn/ui component library</li>
                        <li>React Router for navigation</li>
                        <li>Recharts for data visualization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Backend Technologies</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Node.js runtime environment</li>
                        <li>Supabase for database and auth</li>
                        <li>RESTful API architecture</li>
                        <li>Real-time data streaming</li>
                        <li>Cloud-based deployment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Implementation */}
            <Card id="implementation" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Database className="w-6 h-6 mr-2" />
                  5. Implementation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">5.1 Development Phases</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Phase 1: Core Infrastructure</h4>
                        <p className="text-sm text-muted-foreground">Setup development environment, database schema, and basic authentication system.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Phase 2: Water Quality Module</h4>
                        <p className="text-sm text-muted-foreground">Implement IoT sensor integration, real-time monitoring, and data visualization.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Phase 3: Disease Surveillance</h4>
                        <p className="text-sm text-muted-foreground">Build case tracking, pattern analysis, and outbreak detection features.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">Phase 4: Alert System</h4>
                        <p className="text-sm text-muted-foreground">Implement automated alerts, notification system, and emergency protocols.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">5.2 Key Components</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border">
                      <Droplets className="w-6 h-6 text-blue-600 mb-2" />
                      <h4 className="font-semibold">Water Quality Dashboard</h4>
                      <p className="text-sm text-muted-foreground">Real-time monitoring interface with interactive charts and alerts.</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border">
                      <Shield className="w-6 h-6 text-green-600 mb-2" />
                      <h4 className="font-semibold">Disease Surveillance Module</h4>
                      <p className="text-sm text-muted-foreground">Case tracking system with epidemiological analysis tools.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 6. Testing */}
            <Card id="testing" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="w-6 h-6 mr-2" />
                  6. Testing Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">6.1 Testing Methodology</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Unit Testing</h4>
                      <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                        <li>Component isolation testing</li>
                        <li>Function validation</li>
                        <li>90% code coverage target</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Integration Testing</h4>
                      <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                        <li>API endpoint validation</li>
                        <li>Database connectivity</li>
                        <li>IoT sensor integration</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">User Acceptance</h4>
                      <ul className="list-disc list-inside text-sm text-purple-700 space-y-1">
                        <li>Community health worker feedback</li>
                        <li>Usability testing</li>
                        <li>Performance validation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">6.2 Test Cases</h3>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Critical Test Scenarios</h4>
                        <ul className="list-decimal list-inside text-sm space-y-1">
                          <li>Water quality sensor data accuracy</li>
                          <li>Alert system response time</li>
                          <li>Disease case data integrity</li>
                          <li>System performance under load</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Security Testing</h4>
                        <ul className="list-decimal list-inside text-sm space-y-1">
                          <li>Authentication and authorization</li>
                          <li>Data encryption validation</li>
                          <li>SQL injection prevention</li>
                          <li>Cross-site scripting protection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 7. Deployment & Maintenance */}
            <Card id="deployment" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Globe className="w-6 h-6 mr-2" />
                  7. Deployment & Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">7.1 Deployment Strategy</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Cloud Infrastructure</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          <li>Lovable Cloud platform deployment</li>
                          <li>Supabase backend integration</li>
                          <li>CDN for global content delivery</li>
                          <li>Auto-scaling capabilities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">DevOps Pipeline</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          <li>Continuous integration/deployment</li>
                          <li>Automated testing workflows</li>
                          <li>Environment management</li>
                          <li>Monitoring and logging</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">7.2 Maintenance Plan</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Regular Maintenance</h4>
                      <ul className="list-disc list-inside text-sm text-green-700 space-y-1">
                        <li>Weekly system health checks</li>
                        <li>Monthly security updates</li>
                        <li>Quarterly performance optimization</li>
                        <li>Annual feature updates</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Support Structure</h4>
                      <ul className="list-disc list-inside text-sm text-orange-700 space-y-1">
                        <li>24/7 system monitoring</li>
                        <li>Community support forum</li>
                        <li>Technical documentation</li>
                        <li>Training materials for users</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 8. Output */}
            <Card id="output" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Droplets className="w-6 h-6 mr-2" />
                  8. System Output & Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">8.1 Key Deliverables</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Technical Outputs</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Web-based monitoring dashboard</li>
                        <li>Mobile-responsive interface</li>
                        <li>Real-time data analytics engine</li>
                        <li>Automated alert system</li>
                        <li>Community reporting tools</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Data Outputs</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Water quality trend reports</li>
                        <li>Disease incidence analytics</li>
                        <li>Risk assessment summaries</li>
                        <li>Community health metrics</li>
                        <li>Predictive insights</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">8.2 Expected Outcomes</h3>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                        <div className="text-sm text-muted-foreground">Reduction in water-borne diseases</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                        <div className="text-sm text-muted-foreground">Faster outbreak detection</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                        <div className="text-sm text-muted-foreground">Community engagement increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 9. Conclusion */}
            <Card id="conclusion" className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  9. Conclusion
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The AQUA GUARDIANS system represents a significant advancement in community health technology for rural Northeast India. By integrating IoT sensors, real-time analytics, and community-centered design, this platform addresses critical gaps in water quality monitoring and disease prevention infrastructure.
                </p>
                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Comprehensive real-time monitoring system for water quality parameters</li>
                    <li>Integrated disease surveillance with predictive analytics capabilities</li>
                    <li>Community-friendly dashboard accessible on mobile and web platforms</li>
                    <li>Automated early warning system for health emergencies</li>
                    <li>Scalable architecture supporting multiple communities</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Future Enhancements</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Machine learning for predictive modeling</li>
                      <li>Integration with government health systems</li>
                      <li>Expansion to other health indicators</li>
                      <li>Community health education modules</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Social Impact</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>Improved health outcomes for rural communities</li>
                      <li>Enhanced capacity for local health workers</li>
                      <li>Data-driven public health decision making</li>
                      <li>Sustainable technology adoption</li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The successful implementation of this system demonstrates the potential for technology to bridge healthcare gaps in underserved regions. As we continue to refine and expand the platform, AQUA GUARDIANS will serve as a model for community health monitoring systems in similar contexts across developing regions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;