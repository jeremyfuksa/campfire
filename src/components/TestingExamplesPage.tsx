import React, { useState } from 'react';
import type { CheckedState as CheckboxCheckedState } from '@radix-ui/react-checkbox';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';

export function TestingExamplesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subscribe: false,
    notifications: true,
    role: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Form submitted successfully!', {
      description: 'Thank you for your submission.',
    });
  };

  return (
    <div className="flex min-h-screen">
      <Toaster />
      
      {/* Sidebar */}
      <aside className="w-64 sticky top-40 h-[calc(100vh-10rem)] overflow-y-auto" style={{ borderRight: '1px solid var(--border-default)', backgroundColor: 'var(--bg-base)' }}>
        <nav className="p-6">
          <div className="mb-6">
            <h3 className="mb-3" style={{ fontSize: '12px', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Examples</h3>
            <ul className="space-y-1">
              <li><a href="#forms" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Forms</a></li>
              <li><a href="#cards" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Cards</a></li>
              <li><a href="#data-tables" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Data Tables</a></li>
              <li><a href="#dashboard" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Dashboard</a></li>
              <li><a href="#dialogs" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Dialogs</a></li>
              <li><a href="#notifications" className="block px-3 py-1.5 rounded transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Notifications</a></li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
              <i className="fa-solid fa-flask" style={{ fontSize: '12px', color: 'var(--primary-600)' }}></i>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Testing Area</span>
            </div>
            <h1 className="mb-4">Testing & Examples</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '42rem' }}>
              Real-world examples and interactive components to test the Campfire design system.
            </p>
          </div>

          {/* Forms Section */}
          <section id="forms" className="mb-16">
            <h2 className="mb-6">Contact Form</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              A complete form example with various input types and validation states.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) => setFormData({ ...formData, role: value })}
                      >
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="product-manager">Product Manager</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what you're thinking..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <Checkbox
                        id="subscribe"
                        checked={formData.subscribe}
                        onCheckedChange={(state: CheckboxCheckedState) =>
                          setFormData({ ...formData, subscribe: state === true })
                        }
                      />
                      <Label htmlFor="subscribe" className="cursor-pointer" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        Subscribe to newsletter
                      </Label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Switch
                          id="notifications"
                          checked={formData.notifications}
                          onCheckedChange={(state: boolean) =>
                            setFormData({ ...formData, notifications: state })
                          }
                        />
                        <Label htmlFor="notifications" className="cursor-pointer" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                          Enable notifications
                        </Label>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button">Cancel</Button>
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
              </CardFooter>
            </Card>
          </section>

          {/* Cards Section */}
          <section id="cards" className="mb-16">
            <h2 className="mb-6">Card Layouts</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Various card layouts for displaying content and features.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { title: 'Analytics', icon: 'fa-chart-line', value: '12,543', change: '+12.5%', positive: true },
                { title: 'Users', icon: 'fa-users', value: '8,241', change: '+8.2%', positive: true },
                { title: 'Revenue', icon: 'fa-dollar-sign', value: '$45.2K', change: '-2.4%', positive: false },
              ].map((stat) => (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle style={{ fontSize: '14px' }}>{stat.title}</CardTitle>
                    <i className={`fa-solid ${stat.icon}`} style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}></i>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-1" style={{ fontSize: '32px' }}>{stat.value}</div>
                    <p style={{ fontSize: '14px', color: stat.positive ? 'var(--success-600)' : 'var(--destructive-600)', margin: 0 }}>
                      {stat.change} from last month
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Feature Card</CardTitle>
                  <CardDescription>A card with icon, title, and description</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--primary-100)' }}>
                      <i className="fa-solid fa-fire" style={{ fontSize: '20px', color: 'var(--primary-600)' }}></i>
                    </div>
                    <div>
                      <h3 className="mb-2">Quick Setup</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
                        Get started with Campfire in minutes with our comprehensive documentation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Action Card</CardTitle>
                  <CardDescription>Cards can include buttons and actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    Upgrade your plan to unlock premium features and advanced capabilities.
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm">Upgrade Now</Button>
                    <Button size="sm" variant="outline">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Data Tables Section */}
          <section id="data-tables" className="mb-16">
            <h2 className="mb-6">Data Table</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              A sortable table displaying project data.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Your most recent projects and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                        <th className="text-left py-3 px-4" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Project</th>
                        <th className="text-left py-3 px-4" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Status</th>
                        <th className="text-left py-3 px-4" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Team</th>
                        <th className="text-left py-3 px-4" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Progress</th>
                        <th className="text-left py-3 px-4" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Website Redesign', status: 'In Progress', team: 'Design', progress: 65, date: 'Mar 15, 2025', statusColor: 'primary' },
                        { name: 'Mobile App', status: 'In Review', team: 'Development', progress: 90, date: 'Mar 10, 2025', statusColor: 'warning' },
                        { name: 'Brand Guidelines', status: 'Completed', team: 'Design', progress: 100, date: 'Feb 28, 2025', statusColor: 'success' },
                        { name: 'API Integration', status: 'Planning', team: 'Backend', progress: 25, date: 'Mar 30, 2025', statusColor: 'secondary' },
                        { name: 'User Research', status: 'In Progress', team: 'Research', progress: 45, date: 'Mar 20, 2025', statusColor: 'primary' },
                      ].map((project, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid var(--border-default)' }}>
                          <td className="py-3 px-4">
                            <div style={{ fontSize: '14px', color: 'var(--text-primary)' }}>{project.name}</div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge 
                              variant={project.statusColor === 'success' ? 'default' : 'secondary'}
                              style={{ 
                                backgroundColor: `var(--${project.statusColor}-100)`,
                                color: `var(--${project.statusColor}-700)`,
                                border: `1px solid var(--${project.statusColor}-300)`
                              }}
                            >
                              {project.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{project.team}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-muted)' }}>
                                <div 
                                  className="h-full rounded-full" 
                                  style={{ 
                                    width: `${project.progress}%`,
                                    backgroundColor: 'var(--primary-600)'
                                  }}
                                />
                              </div>
                              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', minWidth: '40px' }}>{project.progress}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{project.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dashboard Section */}
          <section id="dashboard" className="mb-16">
            <h2 className="mb-6">Dashboard Layout</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              A complex dashboard combining multiple components.
            </p>

            <div className="space-y-6">
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: 'Total Revenue', value: '$124.5K', icon: 'fa-dollar-sign', color: 'primary' },
                  { label: 'Active Users', value: '8,241', icon: 'fa-users', color: 'secondary' },
                  { label: 'Conversion', value: '3.24%', icon: 'fa-chart-line', color: 'success' },
                  { label: 'Bounce Rate', value: '42.3%', icon: 'fa-arrow-trend-down', color: 'warning' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg p-4" style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border-default)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{stat.label}</span>
                      <i className={`fa-solid ${stat.icon}`} style={{ fontSize: '14px', color: `var(--${stat.color}-600)` }}></i>
                    </div>
                    <div style={{ fontSize: '24px', color: 'var(--text-primary)' }}>{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your team's latest updates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { user: 'Sarah Chen', action: 'completed task "Design Review"', time: '2 hours ago', avatar: 'SC' },
                          { user: 'Mike Johnson', action: 'commented on "API Documentation"', time: '4 hours ago', avatar: 'MJ' },
                          { user: 'Emily Davis', action: 'created new project "Mobile App"', time: '6 hours ago', avatar: 'ED' },
                          { user: 'Alex Thompson', action: 'uploaded 3 files', time: '1 day ago', avatar: 'AT' },
                        ].map((activity, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--primary-100)', color: 'var(--primary-700)', fontSize: '12px' }}>
                              {activity.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p style={{ fontSize: '14px', color: 'var(--text-primary)', margin: 0 }}>
                                <strong>{activity.user}</strong> {activity.action}
                              </p>
                              <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', margin: 0 }}>{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <Button className="w-full justify-start" variant="outline">
                        <i className="fa-solid fa-plus mr-2"></i>
                        New Project
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <i className="fa-solid fa-user-plus mr-2"></i>
                        Invite Team
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <i className="fa-solid fa-download mr-2"></i>
                        Export Data
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <i className="fa-solid fa-cog mr-2"></i>
                        Settings
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Dialogs Section */}
          <section id="dialogs" className="mb-16">
            <h2 className="mb-6">Dialogs & Modals</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Interactive dialog examples for confirmations and forms.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Action</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to proceed with this action? This cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Confirm</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Form Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                    <DialogDescription>
                      Enter the details for your new project below.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-name">Project Name</Label>
                      <Input id="project-name" placeholder="Enter project name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-desc">Description</Label>
                      <Textarea id="project-desc" placeholder="Brief description" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Project</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          {/* Notifications Section */}
          <section id="notifications" className="mb-16">
            <h2 className="mb-6">Notifications (Toast)</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Click the buttons to test different toast notification styles.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Button onClick={() => toast.success('Success!', { description: 'Your action was completed successfully.' })}>
                Success Toast
              </Button>
              <Button onClick={() => toast.error('Error!', { description: 'Something went wrong. Please try again.' })} variant="destructive">
                Error Toast
              </Button>
              <Button onClick={() => toast.info('Info', { description: 'Here\'s some information you should know.' })} variant="outline">
                Info Toast
              </Button>
              <Button onClick={() => toast.warning('Warning', { description: 'Please be careful with this action.' })} variant="outline">
                Warning Toast
              </Button>
            </div>
          </section>

          {/* Tabs Example */}
          <section className="mb-16">
            <h2 className="mb-6">Tabs Component</h2>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
              Organize content into tabbed sections.
            </p>

            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <h3 className="mb-2">Overview</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      This is the overview tab containing summary information about your account and projects.
                    </p>
                  </TabsContent>
                  <TabsContent value="analytics" className="space-y-4">
                    <h3 className="mb-2">Analytics</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      View detailed analytics and metrics about your performance.
                    </p>
                  </TabsContent>
                  <TabsContent value="reports" className="space-y-4">
                    <h3 className="mb-2">Reports</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Generate and download custom reports for your data.
                    </p>
                  </TabsContent>
                  <TabsContent value="settings" className="space-y-4">
                    <h3 className="mb-2">Settings</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      Configure your preferences and account settings.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
