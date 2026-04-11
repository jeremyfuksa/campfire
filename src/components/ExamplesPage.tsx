import React, { useState } from 'react';
import {
  Mail,
  Lock,
  Loader2,
  Search,
  Bell,
  User,
  Pencil,
  Trash2,
  MoreHorizontal,
  FolderOpen,
  AlertCircle,
  Copy,
  RotateCw,
  CheckCircle2,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Skeleton } from './ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { Alert, AlertDescription } from './ui/alert';
import { ErrorAlert } from './composites/AlertBanner';
import { FormInputField } from './composites/FormField';
import { NotificationSwitch } from './composites/NotificationSwitch';
import { BackgroundGradients } from './BackgroundGradients';

export function ExamplesPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-16 relative" style={{ backgroundColor: 'var(--bg-base)' }}>
      <BackgroundGradients layout="fullwidth" />
      
      <div className="relative">
        <div className="relative">
          <h1 className="mb-2">Testing & Examples</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Real-world component combinations and usage patterns</p>
        </div>
      </div>

      {/* Login Form */}
      <section>
        <h2 className="mb-6">Login Form</h2>
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormInputField
                id="login-email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={setEmail}
                icon={Mail}
              />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="login-password">Password</Label>
                  <a href="#" style={{ fontSize: '14px', color: 'var(--interactive-default)' }}>
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-tertiary)' }} />
                  <Input 
                    id="login-password" 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Remember me
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full" onClick={handleLogin} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </Button>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'center' }}>
                Don't have an account?{' '}
                <a href="#" style={{ color: 'var(--interactive-default)' }}>Sign up</a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Dashboard Header */}
      <section>
        <h2 className="mb-6">Dashboard Header</h2>
        <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
          <div className="h-16 px-6 flex items-center justify-between" style={{ backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border-default)' }}>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary-600)' }}>
                  <span style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>A</span>
                </div>
                <h3>Campfire Dashboard</h3>
              </div>
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-tertiary)' }} />
                <Input placeholder="Search..." className="w-64 h-9 pl-10" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell size={16} />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center" style={{ fontSize: '10px' }}>
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="sm">
                <User size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section>
        <h2 className="mb-6">Data Table</h2>
        <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'John Doe', status: 'active', role: 'Admin', email: 'john@example.com' },
                { name: 'Jane Smith', status: 'active', role: 'Editor', email: 'jane@example.com' },
                { name: 'Bob Johnson', status: 'pending', role: 'Viewer', email: 'bob@example.com' },
                { name: 'Alice Williams', status: 'inactive', role: 'Editor', email: 'alice@example.com' },
              ].map((user, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.status === 'active' ? 'default' : user.status === 'pending' ? 'secondary' : 'outline'}
                      style={
                        user.status === 'active' 
                          ? { backgroundColor: 'var(--success-600)', color: 'white' }
                          : user.status === 'pending'
                          ? { backgroundColor: 'var(--warning-100)', color: 'var(--warning-700)' }
                          : {}
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell style={{ color: 'var(--text-secondary)' }}>{user.email}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Pencil size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Settings Panel */}
      <section>
        <h2 className="mb-6">Settings Panel</h2>
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account preferences and settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="display-name">Display Name</Label>
                  <Input id="display-name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" placeholder="Tell us about yourself" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="url">Website</Label>
                  <Input id="url" type="url" placeholder="https://example.com" />
                </div>
              </TabsContent>
              <TabsContent value="security" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                        Receive email updates
                      </p>
                    </div>
                    <Switch
                      id="email-notifications"
                      checked={emailNotifications}
                      onCheckedChange={(state: boolean) => setEmailNotifications(state)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                        Receive push notifications
                      </p>
                    </div>
                    <Switch
                      id="push-notifications"
                      checked={pushNotifications}
                      onCheckedChange={(state: boolean) => setPushNotifications(state)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="marketing-emails">Marketing Emails</Label>
                      <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
                        Receive marketing updates
                      </p>
                    </div>
                    <Switch
                      id="marketing-emails"
                      checked={marketingEmails}
                      onCheckedChange={(state: boolean) => setMarketingEmails(state)}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </CardFooter>
        </Card>
      </section>

      {/* Empty State */}
      <section>
        <h2 className="mb-6">Empty State</h2>
        <Card className="p-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--bg-muted)' }}>
              <FolderOpen size={32} style={{ color: 'var(--text-tertiary)' }} />
            </div>
            <div className="space-y-2">
              <h3>No projects yet</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                Get started by creating your first project. Projects help you organize your work and collaborate with your team.
              </p>
            </div>
            <Button>
              Create Project
            </Button>
          </div>
        </Card>
      </section>

      {/* Loading State */}
      <section>
        <h2 className="mb-6">Loading State (Skeleton)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-24" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Error State */}
      <section>
        <h2 className="mb-6">Error State</h2>
        <Card className="p-8">
          <div className="space-y-6">
            <Alert variant="destructive" className="flex items-center gap-3">
              <AlertCircle size={16} className="flex-shrink-0" />
              <AlertDescription className="flex-1">
                Failed to load data. Please check your connection and try again.
              </AlertDescription>
            </Alert>
            
            <div className="flex flex-col items-center text-center space-y-4 py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--danger-100)' }}>
                <AlertCircle size={32} style={{ color: 'var(--danger-600)' }} />
              </div>
              <div className="space-y-2">
                <h3>Something went wrong</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                  We encountered an error while processing your request. This has been logged and we'll look into it.
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Copy size={16} className="mr-2" />
                  Copy Error
                </Button>
                <Button>
                  <RotateCw size={16} className="mr-2" />
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Success State */}
      <section>
        <h2 className="mb-6">Success State</h2>
        <Card className="p-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--success-100)' }}>
              <CheckCircle2 size={32} style={{ color: 'var(--success-600)' }} />
            </div>
            <div className="space-y-2">
              <h3>Successfully saved!</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                Your changes have been saved and will take effect immediately.
              </p>
            </div>
            <Button variant="outline">
              View Changes
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
