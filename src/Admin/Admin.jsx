import React from "react";
import '..//Admin/Admin.css'
import NavibarAdmin from "./NavibarAdmin";
export default function Admin(){
    return(
        <div className="adminpage">
            <NavibarAdmin/>
            
    <div className="adminpage-containner">
      <h1>Welcome Admin!</h1>

      <section className="adminpage-description">
        <h5>
          This portal is designed to empower you with the tools and insights needed to manage and optimize the performance
          analysis capabilities provided by Dazz Software Solutions. As an administrator, you play a crucial role in
          ensuring that our performance analysis tools align with your organization's goals and objectives.
        </h5>
      </section>

      <section className="adminpage-description">
        <h2>Dashboard</h2>

        <div>
          <h3>Performance at a Glance</h3>
          <p>Get an instant overview of the performance metrics across your organization.</p>
        </div>

        <div>
          <h3>Recent Activities</h3>
          <p>
            Stay informed about the latest activities related to performance analysis. Monitor user interactions, system
            updates, and any critical alerts that may impact the overall performance of your applications.
          </p>
        </div>
      </section>

      <section className="adminpage-description">
        <h2>Configuration</h2>

        <div>
          <h3>System Settings</h3>
          <p>
            Customize the performance analysis system settings to match the unique requirements of your organization.
            From data retention policies to notification preferences, fine-tune the configuration to ensure optimal
            performance monitoring.
          </p>
        </div>

        <div>
          <h3>User Management</h3>
          <p>
            Efficiently manage user access and permissions. Grant or revoke access to specific modules and features,
            maintaining control over who can view and modify performance data.
          </p>
        </div>
      </section>

      <section className="adminpage-description">
        <h2>Reports and Analytics</h2>

        <div>
          <h3>Generate Custom Reports</h3>
          <p>
            Create detailed performance reports tailored to your organization's needs. Analyze trends, identify
            bottlenecks, and make informed decisions based on comprehensive performance analytics.
          </p>
        </div>

        <div>
          <h3>Historical Data Analysis</h3>
          <p>
            Dive into historical performance data to identify patterns and trends over time. Use this information to
            proactively address potential issues and optimize system performance.
          </p>
        </div>
      </section>

      <section className="adminpage-description">
        <h2>Support and Documentation</h2>

        <div>
          <h3>Knowledge Base</h3>
          <p>
            Access our comprehensive knowledge base for in-depth information on the performance analysis tools. Find
            step-by-step guides, FAQs, and best practices to make the most of our solutions.
          </p>
        </div>

        <div>
          <h3>Support Tickets</h3>
          <p>
            Submit and track support tickets for any technical issues or inquiries. Our support team is dedicated to
            ensuring a smooth experience for administrators like you.
          </p>
        </div>
      </section>

      <section className="adminpage-description">
        <h2>Stay Connected</h2>

        <div>
          <h3>Latest Updates</h3>
          <p>
            Stay informed about the latest features, updates, and enhancements to our performance analysis tools.
            Subscribe to our newsletter to receive regular updates directly in your inbox.
          </p>
        </div>

        <div>
          <h3>Community Forum</h3>
          <p>
            Join discussions with other administrators and share insights, tips, and best practices. Collaborate with the
            Dazz Software Solutions community to enhance your expertise in performance analysis.
          </p>
        </div>
      </section>
    </div>
        </div>
    );
}