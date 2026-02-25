import React from 'react';

import { Button } from '@ui-components/Button';

import styles from './Home.module.scss';

export const Home: React.FC = (): JSX.Element => {
  const handleGetStarted = (): void => {
    console.warn('Get started clicked');
  };

  const handleLearnMore = (): void => {
    console.warn('Learn more clicked');
  };

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to Praxis Engenharia</h1>
        <p className={styles.subtitle}>Building the future with innovative engineering solutions</p>
        <div className={styles.actions}>
          <Button size="large" onClick={handleGetStarted}>
            Get Started
          </Button>
          <Button size="large" variant="outline" onClick={handleLearnMore}>
            Learn More
          </Button>
        </div>
      </section>

      <section className={styles.features}>
        <h2>Our Services</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Structural Engineering</h3>
            <p>Comprehensive structural analysis and design solutions</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Project Management</h3>
            <p>Expert project coordination and execution</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Consulting</h3>
            <p>Professional engineering consultation services</p>
          </div>
        </div>
      </section>
    </div>
  );
};

Home.displayName = 'Home';
