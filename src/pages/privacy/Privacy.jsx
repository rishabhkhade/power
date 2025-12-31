import React from "react";
import "./Privacy.scss";

const Privacy = () => {
  return (
    <>
      <div class="parent">
        <div class="container">
          <section className="privacy">
            <div className="privacy__container">
              <h1>Privacy Policy</h1>
              <p className="privacy__updated">Last Updated: January 2026</p>

              <p>
                At <strong>ER Power Solar</strong>, we respect your privacy and
                are committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, and safeguard your
                data when you interact with our website and services.
              </p>

              <h2>1. Information We Collect</h2>
              <ul>
                <li>
                  Personal details such as name, email address, and contact
                  number
                </li>
                <li>Business or project-related information shared with us</li>
                <li>
                  Technical data such as IP address, browser type, and device
                  data
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>
                  To respond to inquiries and provide renewable energy solutions
                </li>
                <li>To improve our website, services, and user experience</li>
                <li>For project communication, updates, and support</li>
              </ul>

              <h2>3. Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your data from unauthorized access, disclosure, or
                misuse.
              </p>

              <h2>4. Sharing of Information</h2>
              <p>
                ER Power Solar does not sell or rent personal data to third
                parties. Information may be shared only with trusted partners
                when required for project execution or legal compliance.
              </p>

              <div className="privacy__highlight">
                <h2>5. Cookies & Tracking</h2>
                <p>
                  Our website may use cookies to enhance user experience and
                  analyze traffic. You can manage cookie preferences through
                  your browser settings.
                </p>
              </div>

              <h2>6. Third-Party Links</h2>
              <p>
                Our website may contain links to external sites. We are not
                responsible for the privacy practices or content of third-party
                websites.
              </p>

              <h2>7. Data Retention</h2>
              <p>
                We retain personal information only for as long as necessary to
                fulfill business or legal requirements.
              </p>

              <h2>8. Your Rights</h2>
              <ul>
                <li>Access and review your personal information</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2>9. Changes to This Policy</h2>
              <p>
                ER Power Solar may update this Privacy Policy periodically.
                Continued use of our services indicates acceptance of the
                updated policy.
              </p>

              <h2>10. Contact Information</h2>
              <p>
                If you have any questions regarding this Privacy Policy, please
                contact <strong>ER Power Solar</strong>.
              </p>

              <footer className="privacy__footer">
                © 2026 ER Power Solar. All Rights Reserved.
              </footer>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;
