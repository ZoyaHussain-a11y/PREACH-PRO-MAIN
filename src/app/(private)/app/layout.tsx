import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: 'Dashboard - Preach Pro',
      template: '%s - Preach Pro',
    },
    description:
      'Your ministry management dashboard - sermons, calendar, tasks, and more',
    robots: { index: false, follow: false },
  };
}

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
