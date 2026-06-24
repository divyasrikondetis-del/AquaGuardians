import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  AlertTriangle, 
  Send, 
  Phone, 
  MessageSquare, 
  Bell,
  Volume2,
  Users,
  MapPin,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AlertsSystem = () => {
  const [isCreateAlertOpen, setIsCreateAlertOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState('');
  const { toast } = useToast();

  const activeAlerts = [
    {
      id: 1,
      title: "High Water Contamination - Kaziranga Village",
      type: "Water Quality",
      severity: "Critical",
      description: "Bacterial count exceeds safe limits by 300%. Immediate boiling recommended.",
      affectedAreas: ["Kaziranga Village", "Nearby settlements"],
      timeIssued: "2 hours ago",
      status: "Active",
      responseRate: "78%",
      peopleNotified: 1247
    },
    {
      id: 2,
      title: "Disease Outbreak Alert - Majuli Island",
      type: "Disease Outbreak",
      severity: "High",
      description: "Multiple cases of diarrhea reported. Potential cholera outbreak suspected.",
      affectedAreas: ["Majuli Island", "Jorhat District"],
      timeIssued: "6 hours ago",
      status: "Active",
      responseRate: "85%",
      peopleNotified: 2156
    },
    {
      id: 3,
      title: "Sensor Maintenance Required - Tezpur",
      type: "System Alert",
      severity: "Medium",
      description: "Water quality sensor offline. Manual testing recommended until repair.",
      affectedAreas: ["Tezpur Town"],
      timeIssued: "1 day ago",
      status: "Acknowledged",
      responseRate: "92%",
      peopleNotified: 567
    }
  ];

  const alertHistory = [
    {
      id: 4,
      title: "Water Shortage Alert - Sivasagar",
      severity: "Medium",
      resolvedDate: "2024-01-05",
      duration: "3 hours",
      status: "Resolved"
    },
    {
      id: 5,
      title: "pH Level Warning - Guwahati",
      severity: "Low",
      resolvedDate: "2024-01-04",
      duration: "6 hours",
      status: "Resolved"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'danger';
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'muted';
      default: return 'muted';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'danger';
      case 'acknowledged': return 'warning';
      case 'resolved': return 'success';
      default: return 'muted';
    }
  };

  const handleCreateAlert = () => {
    toast({
      title: "Alert Created Successfully",
      description: "Alert has been issued and notifications are being sent to affected communities.",
      variant: "default"
    });
    setIsCreateAlertOpen(false);
  };

  const handleDismissAlert = (alertId: number) => {
    toast({
      title: "Alert Dismissed",
      description: "Alert has been marked as resolved and notifications have been sent.",
      variant: "default"
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Alert Management System</h2>
          <p className="text-muted-foreground">Monitor and manage community health alerts</p>
        </div>
        
        <Dialog open={isCreateAlertOpen} onOpenChange={setIsCreateAlertOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-alert text-white">
              <Bell className="w-4 h-4 mr-2" />
              Create Alert
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create New Alert</DialogTitle>
              <DialogDescription>
                Issue a new community health alert
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="alert-type">Alert Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select alert type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="water-quality">Water Quality</SelectItem>
                    <SelectItem value="disease-outbreak">Disease Outbreak</SelectItem>
                    <SelectItem value="system-alert">System Alert</SelectItem>
                    <SelectItem value="emergency">Emergency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="severity">Severity Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="title">Alert Title</Label>
                <Input id="title" placeholder="Brief alert title" />
              </div>
              
              <div>
                <Label htmlFor="areas">Affected Areas</Label>
                <Input id="areas" placeholder="Village names or districts" />
              </div>
              
              <div>
                <Label htmlFor="description">Alert Message</Label>
                <Textarea 
                  id="description" 
                  placeholder="Detailed alert description and recommended actions..."
                  rows={4}
                />
              </div>
              
              <Button onClick={handleCreateAlert} className="w-full">
                Issue Alert
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="w-4 h-4 text-danger" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-danger">3</div>
            <p className="text-xs text-muted-foreground">2 critical, 1 medium</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">People Notified</CardTitle>
            <Users className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">3,970</div>
            <p className="text-xs text-muted-foreground">In last 24 hours</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
            <CheckCircle className="w-4 h-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">82%</div>
            <p className="text-xs text-muted-foreground">Alert acknowledgment</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Resolution</CardTitle>
            <Clock className="w-4 h-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">4.2h</div>
            <p className="text-xs text-muted-foreground">Average time to resolve</p>
          </CardContent>
        </Card>
      </div>

      {/* Active Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-danger" />
            Active Alerts
          </CardTitle>
          <CardDescription>
            Current alerts requiring attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeAlerts.map((alert) => (
              <div key={alert.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={`status-${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </Badge>
                      <Badge variant="outline" className={`status-${getStatusColor(alert.status)}`}>
                        {alert.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{alert.timeIssued}</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{alert.affectedAreas.join(', ')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{alert.peopleNotified.toLocaleString()} notified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span>{alert.responseRate} response rate</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline">
                      <Send className="w-4 h-4 mr-1" />
                      Resend
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDismissAlert(alert.id)}
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Dismiss
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notification Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Notification Channels
            </CardTitle>
            <CardDescription>
              Available alert delivery methods
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-success" />
                <div>
                  <div className="font-medium">SMS Alerts</div>
                  <div className="text-sm text-muted-foreground">Text message notifications</div>
                </div>
              </div>
              <Badge className="status-success">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-success" />
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">WhatsApp group messages</div>
                </div>
              </div>
              <Badge className="status-success">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-warning" />
                <div>
                  <div className="font-medium">Voice Calls (IVR)</div>
                  <div className="text-sm text-muted-foreground">Automated voice messages</div>
                </div>
              </div>
              <Badge className="status-warning">Limited</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-success" />
                <div>
                  <div className="font-medium">Community App</div>
                  <div className="text-sm text-muted-foreground">Push notifications</div>
                </div>
              </div>
              <Badge className="status-success">Active</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alert History</CardTitle>
            <CardDescription>
              Recently resolved alerts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {alertHistory.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <div className="font-medium text-foreground">{alert.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Resolved on {alert.resolvedDate} • Duration: {alert.duration}
                  </div>
                </div>
                <Badge className={`status-${getStatusColor(alert.status)}`}>
                  {alert.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlertsSystem;