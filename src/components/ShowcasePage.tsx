import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { StatCard } from './ui/stat-card';
import { SearchInput } from './ui/search-input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { StatusDot, type StatusValue } from './ui/status-dot';
import { CodeBlock } from './ui/code-block';
import { BackgroundGradients } from './BackgroundGradients';

export function ShowcasePage() {
  const [view, setView] = useState<'dashboard' | 'article'>('dashboard');

  return (
    <div className="max-w-7xl mx-auto p-8 relative" style={{ backgroundColor: 'var(--bg-base)' }}>
      <BackgroundGradients layout="fullwidth" />
      
      {/* View Toggle */}
      <div className="mb-8 flex items-center justify-between relative z-10">
        <div>
          <h1 className="mb-2">Live Showcase</h1>
          <p style={{ color: 'var(--text-secondary)' }}>See the Campfire Design System in realistic contexts</p>
        </div>
        <Tabs value={view} onValueChange={(value) => setView(value as 'dashboard' | 'article')}>
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="article">Article</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {view === 'dashboard' && <DashboardView />}
      {view === 'article' && <ArticleView />}
    </div>
  );
}

function DashboardView() {
  const teamMembers: Array<{
    name: string;
    role: string;
    status: StatusValue;
    lastActive: string;
    avatar: string;
  }> = [
    { name: 'Sarah Chen', role: 'Product Designer', status: 'active', lastActive: '2 min ago', avatar: 'SC' },
    { name: 'Mike Johnson', role: 'Developer', status: 'active', lastActive: '1 hour ago', avatar: 'MJ' },
    { name: 'Emily Davis', role: 'Marketing Lead', status: 'away', lastActive: '3 hours ago', avatar: 'ED' },
    { name: 'Alex Turner', role: 'UX Researcher', status: 'offline', lastActive: '2 days ago', avatar: 'AT' },
  ];

  return (
    <div className="space-y-8 relative z-10">
      {/* Header */}
      <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
        <div className="h-16 px-6 flex items-center justify-between" style={{ backgroundColor: 'var(--bg-base)', borderBottom: '1px solid var(--border-default)' }}>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--primary-600), var(--secondary-600))' }}>
                <i className="fa-solid fa-fire" style={{ color: 'white', fontSize: '18px' }}></i>
              </div>
              <div>
                <h2 style={{ fontSize: '18px', marginBottom: '0' }}>Project Dashboard</h2>
                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>Overview</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <SearchInput placeholder="Search..." className="w-64" />
            <Button variant="ghost" size="sm" className="relative">
              <i className="fa-solid fa-bell" style={{ fontSize: '16px' }}></i>
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--danger-500)' }} />
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarFallback style={{ backgroundColor: 'var(--primary-200)', color: 'var(--primary-700)' }}>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          label="Total Users"
          value="2,847"
          icon="fa-users"
          iconColor="var(--primary-600)"
          iconBgColor="var(--primary-100)"
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          label="Revenue"
          value="$48.2k"
          icon="fa-chart-line"
          iconColor="var(--secondary-600)"
          iconBgColor="var(--secondary-100)"
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          label="Completed"
          value="127"
          icon="fa-circle-check"
          iconColor="var(--success-600)"
          iconBgColor="var(--success-100)"
          trend={{ value: 3, isPositive: false }}
        />
        <StatCard
          label="Pending"
          value="23"
          icon="fa-clock"
          iconColor="var(--warning-600)"
          iconBgColor="var(--warning-100)"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { user: 'Sarah Chen', action: 'completed', item: 'Homepage Redesign', time: '2 minutes ago', avatar: 'SC', color: 'var(--primary-600)' },
                { user: 'Mike Johnson', action: 'commented on', item: 'Mobile App Feature', time: '1 hour ago', avatar: 'MJ', color: 'var(--secondary-600)' },
                { user: 'Emily Davis', action: 'uploaded', item: 'Brand Guidelines v2.0', time: '3 hours ago', avatar: 'ED', color: 'var(--success-600)' },
                { user: 'Alex Turner', action: 'started', item: 'Q4 Marketing Campaign', time: '5 hours ago', avatar: 'AT', color: 'var(--warning-600)' },
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback style={{ backgroundColor: `${activity.color}20`, color: activity.color }}>
                      {activity.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p style={{ fontSize: '14px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: '600' }}>{activity.user}</span>
                      {' '}<span style={{ color: 'var(--text-secondary)' }}>{activity.action}</span>{' '}
                      <span style={{ color: 'var(--interactive-default)' }}>{activity.item}</span>
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Current progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { name: 'Website Redesign', progress: 75, status: 'On Track', color: 'var(--primary-600)' },
              { name: 'Mobile App', progress: 45, status: 'In Progress', color: 'var(--secondary-600)' },
              { name: 'Brand Refresh', progress: 90, status: 'Almost Done', color: 'var(--success-600)' },
            ].map((project, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <p style={{ fontSize: '14px', fontWeight: '500' }}>{project.name}</p>
                  <Badge variant="outline" style={{ fontSize: '11px' }}>{project.status}</Badge>
                </div>
                <Progress value={project.progress} className="h-2" style={{ backgroundColor: 'var(--bg-muted)' }} />
                <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{project.progress}% complete</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Data Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Manage your team and their permissions</CardDescription>
            </div>
            <Button>
              <i className="fa-solid fa-plus mr-2" style={{ fontSize: '16px' }}></i>
              Add Member
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid var(--border-default)' }}>
            <Table>
              <TableHeader>
                <TableRow style={{ backgroundColor: 'var(--bg-subtle)' }}>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamMembers.map((member, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback style={{ backgroundColor: 'var(--primary-100)', color: 'var(--primary-700)' }}>
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{member.role}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <StatusDot status={member.status} />
                        <Badge 
                          style={{ 
                            backgroundColor: member.status === 'active' ? 'var(--success-100)' : member.status === 'away' ? 'var(--warning-100)' : 'var(--neutral-100)',
                            color: member.status === 'active' ? 'var(--success-700)' : member.status === 'away' ? 'var(--warning-700)' : 'var(--neutral-700)',
                            border: 'none'
                          }}
                        >
                          {member.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>{member.lastActive}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <i className="fa-solid fa-ellipsis" style={{ fontSize: '16px' }}></i>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ArticleView() {
  return (
    <div className="max-w-4xl mx-auto relative z-10">
      {/* Article Header */}
      <article className="space-y-8">
        <header className="space-y-6 pb-8" style={{ borderBottom: '1px solid var(--border-default)' }}>
          <div className="flex gap-2">
            <Badge style={{ backgroundColor: 'var(--primary-100)', color: 'var(--primary-700)', border: 'none' }}>Design Systems</Badge>
            <Badge style={{ backgroundColor: 'var(--secondary-100)', color: 'var(--secondary-700)', border: 'none' }}>UI/UX</Badge>
          </div>
          
          <h1 style={{ fontSize: '42px', lineHeight: '1.2', marginBottom: '16px' }}>
            Building Cohesive Design Systems: A Comprehensive Guide
          </h1>
          
          <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Learn how to create, maintain, and scale design systems that bring consistency and efficiency to your product development workflow.
          </p>
          
          <div className="flex items-center gap-4 pt-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback style={{ backgroundColor: 'var(--primary-200)', color: 'var(--primary-700)' }}>JD</AvatarFallback>
            </Avatar>
            <div>
              <p style={{ fontWeight: '600', marginBottom: '2px' }}>Jordan Davies</p>
              <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>Published on Nov 5, 2025 · 12 min read</p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="space-y-6" style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--text-primary)' }}>
          <p>
            In the rapidly evolving landscape of digital product design, <strong>design systems</strong> have emerged as 
            essential tools for maintaining consistency, improving collaboration, and accelerating development. A well-crafted 
            design system serves as the single source of truth for your product's visual language and interaction patterns.
          </p>

          <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>What is a Design System?</h2>
          
          <p>
            A design system is more than just a style guide or component library. It's a comprehensive collection of reusable 
            components, guided by clear standards, that can be assembled together to build any number of applications. Think of 
            it as the DNA of your product's design.
          </p>

          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)', margin: '32px 0' }}>
            <div className="flex gap-3">
              <i className="fa-solid fa-lightbulb" style={{ fontSize: '20px', color: 'var(--warning-600)', marginTop: '2px' }}></i>
              <div>
                <p style={{ fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>Key Insight</p>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '0' }}>
                  Design systems reduce design debt, improve team collaboration, and ensure product consistency across all 
                  touchpoints. Teams using design systems report 30-40% faster development cycles.
                </p>
              </div>
            </div>
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>Core Components of a Design System</h2>

          <h3 style={{ marginTop: '32px', marginBottom: '12px' }}>1. Design Tokens</h3>
          <p>
            Design tokens are the foundational building blocks of your design system. They store visual design attributes like 
            colors, typography, spacing, and border radius as data. This approach allows you to maintain consistency across 
            platforms while enabling easy theming and customization.
          </p>

          <div style={{ margin: '24px 0' }}>
            <CodeBlock
              language="css"
              code={`:root {
  /* Primary colors */
  --primary-600: #4c627d;
  --primary-700: #3e4f66;
  
  /* Spacing scale */
  --space-4: 1rem;
  --space-6: 1.5rem;
  
  /* Border radius */
  --radius-md: 0.5rem;
}`}
            />
          </div>

          <h3 style={{ marginTop: '32px', marginBottom: '12px' }}>2. Component Library</h3>
          <p>
            Your component library contains reusable UI components built using your design tokens. Each component should be 
            well-documented with usage guidelines, accessibility considerations, and code examples.
          </p>

          <div className="grid grid-cols-2 gap-4 my-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                  <i className="fa-solid fa-box" style={{ fontSize: '20px', color: 'var(--primary-600)' }}></i>
                </div>
                <h4 style={{ marginBottom: '8px' }}>Buttons</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '0' }}>
                  Primary, secondary, and tertiary button variants
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--secondary-100)' }}>
                  <i className="fa-solid fa-file-lines" style={{ fontSize: '20px', color: 'var(--secondary-600)' }}></i>
                </div>
                <h4 style={{ marginBottom: '8px' }}>Forms</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '0' }}>
                  Input fields, selects, and validation states
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>Best Practices for Scaling</h2>

          <p>
            As your design system grows, maintaining it becomes increasingly important. Here are key practices that successful 
            teams follow:
          </p>

          <ul className="space-y-3" style={{ paddingLeft: '24px', margin: '24px 0' }}>
            <li><strong>Version Control:</strong> Treat your design system like any other product. Use semantic versioning and maintain clear changelogs.</li>
            <li><strong>Documentation:</strong> Comprehensive documentation is critical. Include usage examples, do's and don'ts, and accessibility guidelines.</li>
            <li><strong>Governance:</strong> Establish a team responsible for maintaining and evolving the system based on feedback and needs.</li>
            <li><strong>Adoption Metrics:</strong> Track how teams are using your system and identify areas for improvement.</li>
          </ul>

          <Separator className="my-8" />

          <blockquote className="pl-6 py-4" style={{ borderLeft: '4px solid var(--primary-600)', backgroundColor: 'var(--bg-subtle)', borderRadius: '0 8px 8px 0', margin: '32px 0' }}>
            <p style={{ fontSize: '19px', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              "A design system is never finished. It's a living, breathing organism that evolves with your product and organization."
            </p>
            <p style={{ fontSize: '15px', color: 'var(--text-tertiary)', marginBottom: '0' }}>
              — Brad Frost, Author of Atomic Design
            </p>
          </blockquote>

          <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>Measuring Success</h2>

          <p>
            How do you know if your design system is working? Track these key metrics:
          </p>

          <div className="grid grid-cols-3 gap-4 my-6">
            {[
              { metric: 'Adoption Rate', value: '85%', trend: 'up' },
              { metric: 'Time to Ship', value: '-40%', trend: 'up' },
              { metric: 'Design Debt', value: '-60%', trend: 'up' },
            ].map((stat, i) => (
              <Card key={i}>
                <CardContent className="pt-6 text-center">
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {stat.metric}
                  </p>
                  <p style={{ fontSize: '32px', fontWeight: '700', color: 'var(--success-600)', marginBottom: '0' }}>
                    {stat.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 style={{ marginTop: '48px', marginBottom: '16px' }}>Conclusion</h2>

          <p>
            Building a design system is an investment that pays dividends in consistency, efficiency, and product quality. 
            Start small with the components you use most frequently, then expand gradually. Remember: a design system is a 
            product serving products, and like any product, it needs care, attention, and continuous improvement.
          </p>

          <div className="p-6 rounded-lg" style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border-default)', margin: '32px 0' }}>
            <h4 style={{ marginBottom: '12px' }}>Ready to build your design system?</h4>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Explore the Campfire Design System documentation and see how we've implemented these principles.
            </p>
            <Button>
              Explore Components
              <i className="fa-solid fa-arrow-right ml-2" style={{ fontSize: '16px' }}></i>
            </Button>
          </div>
        </div>

        {/* Article Footer */}
        <footer className="pt-8 mt-8" style={{ borderTop: '1px solid var(--border-default)' }}>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Badge variant="outline">design-systems</Badge>
              <Badge variant="outline">ui-ux</Badge>
              <Badge variant="outline">best-practices</Badge>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <i className="fa-solid fa-heart mr-2" style={{ fontSize: '16px' }}></i>
                124
              </Button>
              <Button variant="outline" size="sm">
                <i className="fa-solid fa-bookmark mr-2" style={{ fontSize: '16px' }}></i>
                Save
              </Button>
              <Button variant="outline" size="sm">
                <i className="fa-solid fa-share-nodes mr-2" style={{ fontSize: '16px' }}></i>
                Share
              </Button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
