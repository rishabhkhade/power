import React from "react";
import "./Terms.scss";

const Terms = () => {
  return (
    <>
      <div class="parent">
        <div class="container">
          <section className="terms">
            <div className="terms__container">
              <h1>Terms & Conditions</h1>
              <p className="terms__updated">Last Updated: January 2026</p>

              <p>
                Welcome to <strong>ER Power Solar</strong>. These Terms &
                Conditions govern your access to and use of our website,
                products, and renewable energy services. By using our services,
                you agree to comply with these terms.
              </p>

              <h2>1. About ER Power Solar</h2>
              <p>
                ER Power delivers tailored renewable energy solutions for global
                projects, emphasizing sustainability, innovation, and seamless
                power plant integration.
              </p>

              <h2>2. Use of Services</h2>
              <ul>
                <li>Services must be used for lawful purposes only.</li>
                <li>Unauthorized use or access is strictly prohibited.</li>
                <li>
                  Content may not be copied or redistributed without permission.
                </li>
              </ul>

              <h2>3. Project Scope & Deliverables</h2>
              <p>
                All projects are executed as per agreed proposals, timelines,
                and specifications. Any modifications require written approval
                from both parties.
              </p>

              <h2>4. Payments & Pricing</h2>
              <ul>
                <li>
                  Pricing is defined in the approved quotation or agreement.
                </li>
                <li>Payments must follow the agreed schedule.</li>
                <li>Delays may result in suspension of services.</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                All technical documents, designs, and branding remain the
                intellectual property of ER Power Solar unless stated otherwise.
              </p>

              <div className="terms__highlight">
                <h2>6. Warranty & Liability</h2>
                <p>
                  ER Power Solar provides warranties only as defined in
                  contractual agreements and shall not be liable for indirect or
                  consequential damages.
                </p>
              </div>

              <h2>7. Sustainability Commitment</h2>
              <p>
                Energy generation and savings depend on multiple external
                factors. Actual results may vary based on location and usage
                conditions.
              </p>

              <h2>8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate services if terms
                are violated or contractual obligations are not met.
              </p>

              <h2>9. Governing Law</h2>
              <p>
                These Terms & Conditions shall be governed by applicable laws
                related to renewable energy projects.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                ER Power Solar may update these terms periodically. Continued
                use of services implies acceptance of the updated terms.
              </p>

              <h2>11. Contact</h2>
              <p>
                For any queries regarding these Terms & Conditions, please
                contact
                <strong> ER Power Solar</strong>.
              </p>

              <footer className="terms__footer">
                © 2026 ER Power Solar. All Rights Reserved.
              </footer>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Terms;
