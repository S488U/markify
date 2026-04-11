'use client';

import { usePathname } from 'next/navigation';

type AppShellProps = {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
};

export default function AppShell({ children, navbar, footer }: AppShellProps) {
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith('/dashboard');

  if (isDashboardRoute) {
    return <>{children}</>;
  }

  return (
    <>
      {navbar}
      {children}
      {footer}
    </>
  );
}
