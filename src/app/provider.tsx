import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

import { ThemeProvider } from '@/components/theme-provider';

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <NextTopLoader color="#2a81bb" height={2} />
      {children}
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  );
}
