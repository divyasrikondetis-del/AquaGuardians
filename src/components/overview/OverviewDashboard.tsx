import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Droplets, 
  Activity, 
  AlertTriangle, 
  Users,
  TrendingUp,
  MapPin
} from 'lucide-react';

const OverviewDashboard = () => {
  const stats = [
    {
      title: "Water Sources Monitored",
      value: "247",
      change: "+12 this week",
      icon: Droplets,
      status: "success"
    },
    {
      title: "Active Disease Cases",
      value: "18",
      change: "-5 from last week",
      icon: Activity,
      status: "warning"
    },
    {
      title: "Active Alerts",
      value: "3",
      change: "2 high priority",
      icon: AlertTriangle,
      status: "danger"
    },
    {
      title: "Villages Covered",
      value: "156",
      change: "+8 new villages",
      icon: Users,
      status: "success"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      village: "Kaziranga Village",
      type: "Water Quality",
      severity: "High",
      time: "2 hours ago",
      description: "High turbidity levels detected in main water source"
    },
    {
      id: 2,
      village: "Majuli Island",
      type: "Disease Outbreak",
      severity: "Medium",
      time: "6 hours ago",
      description: "3 new cases of waterborne illness reported"
    },
    {
      id: 3,
      village: "Tezpur Town",
      type: "Sensor Maintenance",
      severity: "Low",
      time: "1 day ago",
      description: "pH sensor requires calibration"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'muted';
      default: return 'muted';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary-light p-6 rounded-lg text-white">
        <h2 className="text-2xl font-bold mb-2">Smart Health Monitoring System</h2>
        <p className="text-primary-foreground/80">
          Protecting communities in Rural Northeast India through real-time water quality monitoring 
          and early disease detection
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`w-5 h-5 text-${stat.status}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Recent Alerts
            </CardTitle>
            <CardDescription>
              Latest system alerts and notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 p-3 border border-border rounded-lg">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-foreground">{alert.village}</h4>
                    <Badge variant="outline" className={`status-${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{alert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary">{alert.type}</span>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-success" />
              System Health
            </CardTitle>
            <CardDescription>
              Overall system performance and status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Water Sensors Online</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full pulse-gentle"></div>
                  <span className="text-sm font-medium">243/247 (98.4%)</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Disease Reporting</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full pulse-gentle"></div>
                  <span className="text-sm font-medium">Active</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Alert System</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full pulse-gentle"></div>
                  <span className="text-sm font-medium">Operational</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Data Sync</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warning rounded-full pulse-gentle"></div>
                  <span className="text-sm font-medium">2 min delay</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">99.2%</div>
                <div className="text-xs text-muted-foreground">System Uptime (24h)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewDashboard;