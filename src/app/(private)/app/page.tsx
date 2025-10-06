import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Dashboard',
  description:
    'Your ministry management dashboard with sermons, calendar, tasks, and analytics',
};

export default function DashboardPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome to Preach Pro
              </h1>
              <p className="text-muted-foreground">
                Manage your ministry effectively with AI-powered tools
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              + New Sermon
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Sermons
                </CardTitle>
                <span className="text-2xl">📝</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-muted-foreground text-xs">+3 this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Upcoming Events
                </CardTitle>
                <span className="text-2xl">📅</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-muted-foreground text-xs">Next 30 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Tasks
                </CardTitle>
                <span className="text-2xl">✅</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-muted-foreground text-xs">5 due this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contacts</CardTitle>
                <span className="text-2xl">👥</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-muted-foreground text-xs">+12 this month</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Recent Sermons */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Recent Sermons</CardTitle>
                <CardDescription>
                  Your latest sermon preparations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <p className="font-medium">The Power of Faith</p>
                      <p className="text-muted-foreground text-sm">
                        Last edited 2 days ago
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <p className="font-medium">Grace and Mercy</p>
                      <p className="text-muted-foreground text-sm">
                        Last edited 1 week ago
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <p className="font-medium">Walking in Love</p>
                      <p className="text-muted-foreground text-sm">
                        Last edited 2 weeks ago
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Next scheduled activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="font-medium">Sunday Service</p>
                    <p className="text-muted-foreground text-sm">
                      Oct 6, 2025 at 10:00 AM
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="font-medium">Bible Study</p>
                    <p className="text-muted-foreground text-sm">
                      Oct 8, 2025 at 7:00 PM
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="font-medium">Youth Meeting</p>
                    <p className="text-muted-foreground text-sm">
                      Oct 10, 2025 at 6:00 PM
                    </p>
                  </div>

                  <Button variant="outline" className="mt-4 w-full">
                    View Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common ministry management tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Button
                    variant="outline"
                    className="h-auto flex-col gap-2 py-4"
                  >
                    <span className="text-2xl">✍️</span>
                    <span>Write Sermon</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto flex-col gap-2 py-4"
                  >
                    <span className="text-2xl">📅</span>
                    <span>Schedule Event</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto flex-col gap-2 py-4"
                  >
                    <span className="text-2xl">✅</span>
                    <span>Create Task</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="h-auto flex-col gap-2 py-4"
                  >
                    <span className="text-2xl">👥</span>
                    <span>Add Contact</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
