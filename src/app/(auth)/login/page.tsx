import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your Preach Pro account',
};

export default function LoginPage() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="bg-card w-full max-w-md space-y-6 rounded-lg border p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome to Preach Pro</h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <div className="space-y-4">
          {/* Login form will go here */}
          <p className="text-muted-foreground text-center text-sm">
            Login form coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
