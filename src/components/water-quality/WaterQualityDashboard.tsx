import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { 
  Droplets, 
  Thermometer, 
  Beaker, 
  Activity,
  MapPin,
  Calendar,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const WaterQualityDashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [timeRange, setTimeRange] = useState('24h');

  // Mock data for water quality metrics
  const qualityData = [
    { time: '00:00', pH: 7.2, turbidity: 2.1, temperature: 24, bacteria: 12 },
    { time: '04:00', pH: 7.1, turbidity: 2.3, temperature: 23, bacteria: 15 },
    { time: '08:00', pH: 6.9, turbidity: 3.2, temperature: 25, bacteria: 18 },
    { time: '12:00', pH: 6.8, turbidity: 4.1, temperature: 28, bacteria: 22 },
    { time: '16:00', pH: 6.7, turbidity: 3.8, temperature: 27, bacteria: 20 },
    { time: '20:00', pH: 7.0, turbidity: 2.9, temperature: 25, bacteria: 16 },
  ];

  const waterSources = [
    {
      id: 1,
      name: "Brahmaputra River - Guwahati",
      status: "Good",
      pH: 7.2,
      turbidity: 2.1,
      bacteria: 12,
      lastUpdated: "2 min ago",
      riskLevel: "Low"
    },
    {
      id: 2,
      name: "Village Well - Kaziranga",
      status: "Warning",
      pH: 6.8,
      turbidity: 4.2,
      bacteria: 28,
      lastUpdated: "5 min ago",
      riskLevel: "Medium"
    },
    {
      id: 3,
      name: "Tube Well - Majuli",
      status: "Critical",
      pH: 6.5,
      turbidity: 5.8,
      bacteria: 45,
      lastUpdated: "1 min ago",
      riskLevel: "High"
    },
    {
      id: 4,
      name: "Spring Water - Shillong",
      status: "Good",
      pH: 7.4,
      turbidity: 1.2,
      bacteria: 8,
      lastUpdated: "3 min ago",
      riskLevel: "Low"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good': return 'success';
      case 'Warning': return 'warning';
      case 'Critical': return 'danger';
      default: return 'muted';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-success';
      case 'Medium': return 'text-warning';
      case 'High': return 'text-danger';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Water Quality Monitoring</h2>
          <p className="text-muted-foreground">Real-time water quality data from 247 sources</p>
        </div>
        
        <div className="flex gap-3">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="assam">Assam</SelectItem>
              <SelectItem value="meghalaya">Meghalaya</SelectItem>
              <SelectItem value="nagaland">Nagaland</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">24 Hours</SelectItem>
              <SelectItem value="7d">7 Days</SelectItem>
              <SelectItem value="30d">30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quality Metrics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              pH & Turbidity Levels
            </CardTitle>
            <CardDescription>
              Water quality indicators over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={qualityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="pH" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  name="pH Level"
                />
                <Line 
                  type="monotone" 
                  dataKey="turbidity" 
                  stroke="hsl(var(--warning))" 
                  strokeWidth={2}
                  name="Turbidity (NTU)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beaker className="w-5 h-5 text-secondary" />
              Bacterial Count
            </CardTitle>
            <CardDescription>
              E.coli bacteria levels (CFU/100ml)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={qualityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="bacteria" 
                  fill="hsl(var(--danger))" 
                  name="Bacteria Count"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Water Sources Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Water Sources Status
          </CardTitle>
          <CardDescription>
            Current status of monitored water sources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {waterSources.map((source) => (
              <div key={source.id} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">{source.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Updated {source.lastUpdated}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={`status-${getStatusColor(source.status)}`}>
                      {source.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{source.pH}</div>
                    <div className="text-xs text-muted-foreground">pH Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{source.turbidity}</div>
                    <div className="text-xs text-muted-foreground">Turbidity (NTU)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">{source.bacteria}</div>
                    <div className="text-xs text-muted-foreground">Bacteria (CFU)</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-semibold ${getRiskColor(source.riskLevel)}`}>
                      {source.riskLevel}
                    </div>
                    <div className="text-xs text-muted-foreground">Risk Level</div>
                  </div>
                </div>
                
                {source.status === 'Critical' && (
                  <div className="mt-3 flex items-center gap-2 text-danger text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Immediate action required - High contamination detected</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterQualityDashboard;