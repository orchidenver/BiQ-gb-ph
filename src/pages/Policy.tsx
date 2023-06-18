import Divider from "../components/Divider";
import PolicyTextComponent from "../components/PolicyTextComponent";
import { Helmet } from "react-helmet";

import "../pages/Policy.css";

export default function Policy() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Here you can read out privacy policy"
        />
        <title>BiQ pH - Privacy policy</title>
      </Helmet>
      <section className="policy">
        <p className="policy-head">Privacy Policy</p>
        <p className="policy-text">
          Effective Date: [May 12, 2023].
          <br />
          This Privacy Policy describes how we collect, use, and disclose
          personal information when you visit our website and purchase our water
          products. It applies to all visitors, users, and customers of our
          website. By accessing or using our website, you agree to collect and
          use your personal information as described in this Privacy Policy.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">Privacy Policy</p>
        <PolicyTextComponent subhead="1.1 Personal Information">
          We may collect personal information such as your name, email address,
          phone number, billing and shipping address, and payment information
          when you place an order on our website. This information is necessary
          for us to process and fulfill your order.
        </PolicyTextComponent>
        <PolicyTextComponent subhead="1.2 Usage Information">
          We may also collect non-personal information about your visit to our
          website, including your IP address, browser type, operating system,
          referral source, and pages visited. This information is collected to
          analyze trends, administer the website, track users' movements, and
          gather demographic information for aggregate use.
        </PolicyTextComponent>
        <Divider margin="20px 0" />
        <p className="policy-head">Use of information</p>
        <PolicyTextComponent subhead="2.1 Order Processing">
          We use the personal information provided by you to process and fulfill
          your orders, communicate with you about your order status, and provide
          customer support.
        </PolicyTextComponent>
        <PolicyTextComponent subhead="2.2 Marketing Communication">
          We may use your email address to send you promotional emails about our
          products, special offers, and updates with your consent. You can opt
          out of receiving these emails at any time by following the unsubscribe
          instructions provided in the email or contacting us directly.
        </PolicyTextComponent>
        <PolicyTextComponent subhead="2.3 Website Improvement">
          We may use the usage information collected to improve our website's
          functionality, troubleshoot technical issues, and enhance the overall
          user experience.
        </PolicyTextComponent>
        <Divider margin="20px 0" />
        <p className="policy-head">Data Sharing and Disclosure</p>
        <PolicyTextComponent subhead="3.1 Service Providers">
          We may share your personal information with trusted third-party
          service providers who assist us in operating our website, processing
          payments, and delivering products to you. These service providers have
          access to your personal information only to perform their tasks on our
          behalf and must maintain confidentiality.
        </PolicyTextComponent>
        <PolicyTextComponent subhead="3.2 Legal Compliance">
          We may disclose your personal information if required by law or if we
          believe such action is necessary to comply with a legal obligation,
          protect our rights, or investigate potential violations of our Terms
          of Service.
        </PolicyTextComponent>
        <Divider margin="20px 0" />
        <p className="policy-head">Data Security</p>
        <p className="policy-text">
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the Internet or
          electronic storage is 100% secure, and we cannot guarantee absolute
          security.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">Children's Privacy</p>
        <p className="policy-text">
          Our website is not intended for individuals under the age of 13. We do
          not knowingly collect personal information from children. However, if
          you are a parent or guardian and believe your child has provided us
          with personal information, don't hesitate to contact us, and we will
          promptly delete that information.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">Changes to this Privacy Policy</p>
        <p className="policy-text">
          We may update this Privacy Policy occasionally to reflect changes in
          our practices or legal requirements. Therefore, please review this
          page periodically for any updates. Your continued use of our website
          after any modifications to this Privacy Policy will constitute your
          acknowledgment of the changes and your consent to abide by the updated
          policy.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">Contact Us</p>
        <p className="policy-text">
          f you have any questions, concerns, or requests regarding this Privacy
          Policy, don't hesitate to contact us at [contact information]. By
          using our website, you acknowledge that you have read, understood, and
          agreed to the terms of this Privacy Policy.
        </p>
      </section>
    </>
  );
}
