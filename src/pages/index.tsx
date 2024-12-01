// pages/index.tsx
import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Sadia Tanzeel</h1>
          <p>I'm a Front-End Developer specializing in React & Next.js.</p>
          <a href="/projects" className="btn-primary">View My Work</a>
        </div>
        <Image src="/images/hero.jpg" alt="Hero Image" width={300} height={300} />
      </section>
    </Layout>
  );
};

export default Home;
