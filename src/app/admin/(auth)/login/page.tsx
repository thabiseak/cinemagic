import { Suspense } from 'react';

import LoginForm from './LoginForm';

const LoadingFallback = () => (
  <main className="min-h-screen bg-black text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-star-field opacity-30" aria-hidden />
    <div className="absolute inset-0 bg-nebula opacity-20" aria-hidden />
    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-black to-black" aria-hidden />

    <section className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg shadow-2xl">
        <div className="h-6 w-32 animate-pulse rounded-full bg-white/20" />
      </div>
    </section>
  </main>
);

export default function LoginPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LoginForm />
    </Suspense>
  );
}
