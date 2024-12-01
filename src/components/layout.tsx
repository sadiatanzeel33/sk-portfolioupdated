// components/Layout.tsx
import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header className="navbar">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main className="container">{children}</main>
      <footer className="footer">
        <p>© 2024 sadia. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;
