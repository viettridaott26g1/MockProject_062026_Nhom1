import React from 'react';
import { GraduationCap } from 'lucide-react';

export function LoginInfo(): React.ReactElement {
  return (
    <section className="login-info-section" aria-label="EldCare Information">
      <div>
        <header className="brand-header">
          <div className="brand-icon" aria-hidden="true">
            <GraduationCap size={20} />
          </div>
          <span className="brand-title">EldCare</span>
        </header>

        <span className="welcome-badge">Sign In</span>
        
        <h1 className="welcome-heading">
          Welcome Back!<br />
          <span className="accent-text">Sign in</span> to Your<br />
          EldCare Portal
        </h1>
        
        <p className="welcome-description">
          Access your personalized care plan and connect with your care team.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-number">10K+</span>
          <span className="stat-label">Active Patients</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Care Providers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">99.9%</span>
          <span className="stat-label">Uptime</span>
        </div>
      </div>
    </section>
  );
}
