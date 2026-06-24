import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { 
  Activity, 
  Plus, 
  MapPin, 
  Calendar,
  Users,
  TrendingUp,
  AlertTriangle,
  FileText
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DiseaseDashboard = () => {
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState('');
  const { toast } = useToast();

  // Mock data for disease trends
  const diseaseData = [
    { date: '2024-01-01', diarrhea: 12, cholera: 2, typhoid: 5, hepatitis: 1 },
    { date: '2024-01-02', diarrhea: 15, cholera: 3, typhoid: 4, hepatitis: 2 },
    { date: '2024-01-03', diarrhea: 18, cholera: 1, typhoid: 6, hepatitis: 1 },
    { date: '2024-01-04', diarrhea: 22, cholera: 4, typhoid: 3, hepatitis: 3 },
    { date: '2024-01-05', diarrhea: 16, cholera: 2, typhoid: 7, hepatitis: 2 },
    { date: '2024-01-06', diarrhea: 19, cholera: 3, typhoid: 5, hepatitis: 1 },
  ];

  const diseaseDistribution = [
    { name: 'Diarrhea', value: 102, color: '#ef4444' },
    { name: 'Typhoid', value: 30, color: '#f97316' },
    { name: 'Cholera', value: 15, color: '#eab308' },
    { name: 'Hepatitis A', value: 10, color: '#22c55e' }
  ];

  const recentCases = [
    {
      id: 1,
      patient: "Patient #2024-001",
      age: 34,
      gender: "Female",
      village: "Kaziranga Village",
      disease: "Diarrhea",
      severity: "Moderate",
      reportedBy: "Dr. Sarah Borah",
      date: "2024-01-06",
      status: "Under Treatment"
    },
    {
      id: 2,
      patient: "Patient #2024-002",
      age: 28,
      gender: "Male",
      village: "Majuli Island",
      disease: "Typhoid",
      severity: "Severe",
      reportedBy: "Dr. Ravi Kumar",
      date: "2024-01-06",
      status: "Hospitalized"
    },
    {
      id: 3,
      patient: "Patient #2024-003",
      age: 45,
      gender: "Female",
      village: "Tezpur Town",
      disease: "Cholera",
      severity: "Mild",
      reportedBy: "Nurse Priya Das",
      date: "2024-01-05",
      status: "Recovering"
    }
  ];

  const handleReportCase = () => {
    toast({
      title: "Case Reported Successfully",
      description: "New disease case has been added to the surveillance system.",
      variant: "default"
    });
    setIsReportDialogOpen(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'mild': return 'success';
      case 'moderate': return 'warning';
      case 'severe': return 'danger';
      default: return 'muted';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Disease Surveillance</h2>
          <p className="text-muted-foreground">Monitor and track waterborne disease outbreaks</p>
        </div>
        
        <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-health text-white">
              <Plus className="w-4 h-4 mr-2" />
              Report New Case
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Report New Disease Case</DialogTitle>
              <DialogDescription>
                Submit a new waterborne disease case to the surveillance system
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Patient Age</Label>
                  <Input id="age" type="number" placeholder="Age" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="village">Village/Location</Label>
                <Input id="village" placeholder="Enter village name" />
              </div>
              
              <div>
                <Label htmlFor="disease">Disease Type</Label>
                <Select value={selectedDisease} onValueChange={setSelectedDisease}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select disease" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="diarrhea">Diarrhea</SelectItem>
                    <SelectItem value="cholera">Cholera</SelectItem>
                    <SelectItem value="typhoid">Typhoid</SelectItem>
                    <SelectItem value="hepatitis">Hepatitis A</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="severity">Severity</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mild">Mild</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="severe">Severe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button onClick={handleReportCase} className="w-full">
                Submit Report
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Cases (7 days)</CardTitle>
            <Activity className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">157</div>
            <p className="text-xs text-muted-foreground">+23 from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">18</div>
            <p className="text-xs text-muted-foreground">Currently under treatment</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outbreak Alerts</CardTitle>
            <AlertTriangle className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">3</div>
            <p className="text-xs text-muted-foreground">High priority zones</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recovery Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">94.2%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Disease Trends</CardTitle>
            <CardDescription>
              Daily reported cases by disease type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={diseaseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="diarrhea" stroke="#ef4444" strokeWidth={2} name="Diarrhea" />
                <Line type="monotone" dataKey="cholera" stroke="#eab308" strokeWidth={2} name="Cholera" />
                <Line type="monotone" dataKey="typhoid" stroke="#f97316" strokeWidth={2} name="Typhoid" />
                <Line type="monotone" dataKey="hepatitis" stroke="#22c55e" strokeWidth={2} name="Hepatitis A" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disease Distribution</CardTitle>
            <CardDescription>
              Current month breakdown
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={diseaseDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {diseaseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {diseaseDistribution.map((disease, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: disease.color }}
                    />
                    <span>{disease.name}</span>
                  </div>
                  <span className="font-medium">{disease.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Cases */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Recent Cases
          </CardTitle>
          <CardDescription>
            Latest reported disease cases in the system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCases.map((case_) => (
              <div key={case_.id} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">{case_.patient}</h4>
                      <p className="text-sm text-muted-foreground">
                        {case_.age} years, {case_.gender} • {case_.village}
                      </p>
                    </div>
                  </div>
                  <Badge className={`status-${getSeverityColor(case_.severity)}`}>
                    {case_.severity}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm font-medium text-foreground">{case_.disease}</div>
                    <div className="text-xs text-muted-foreground">Disease Type</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{case_.status}</div>
                    <div className="text-xs text-muted-foreground">Current Status</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{case_.reportedBy}</div>
                    <div className="text-xs text-muted-foreground">Reported By</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{case_.date}</div>
                    <div className="text-xs text-muted-foreground">Report Date</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiseaseDashboard;