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
          content="Here you can read out cookies policy"
        />
        <title>BiQ pH - Cookies policy</title>
      </Helmet>
      <section className="policy">
        <p className="policy-head">Cookie Policy</p>
        <p className="policy-text">
          Effective Date: [May 12, 2023]
          <br />
          This Cookie Policy explains how cookies and similar tracking
          technologies are used on our website. It applies to all visitors,
          users, and customers of our website. By accessing or using our
          website, you consent to cookies as described in this Cookie Policy.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">What Are Cookies?</p>
        <p className="policy-text">
          Cookies are small text files that are placed on your computer or
          mobile device when you visit a website. They are widely used to make
          websites work more efficiently and enhance the user experience.
          Cookies may store information about your browsing preferences and
          activities on the website.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">Types of Cookies We Use</p>
        <PolicyTextComponent subhead="1.1 Essential Cookies">
          These cookies are necessary for the website to function correctly.
          They enable essential functions such as page navigation, access to
          secure areas, and adding items to the shopping cart. These cookies do
          not collect personal information.
        </PolicyTextComponent>
        <PolicyTextComponent subhead="1.2 Analytical Cookies">
          We use analytical cookies to collect information about how visitors
          use our website. This helps us analyze the number of visitors, pages
          visited, and the traffic source. The data collected improves the
          website's performance and enhances the user experience.
        </PolicyTextComponent>
        <PolicyTextComponent subhead="1.3 Marketing Cookies">
          Marketing cookies are used to track visitors across websites. The
          intention is to display relevant and engaging ads to individual users.
          In addition, these cookies may collect information about your browsing
          habits and interests for targeted advertising.
        </PolicyTextComponent>
        <Divider margin="20px 0" />
        <p className="policy-head">Third-Party Cookies</p>
        <p className="policy-text">
          We may allow third-party service providers to place cookies on our
          website to provide analytics, advertising, and other services. These
          third-party cookies are subject to the respective privacy policies of
          the providers.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">Cookie Management</p>
        <p className="policy-text">
          You can control and manage cookies through your browser settings. Most
          web browsers allow you to accept or reject cookies, delete existing
          cookies, or set preferences for certain websites. Please note that
          disabling or deleting cookies may affect our website's functionality
          and user experience.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">Changes to this Cookie Policy</p>
        <p className="policy-text">
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or legal requirements. Therefore, please review this
          page periodically for any updates. Your continued use of our website
          after any modifications to this Cookie Policy will constitute your
          acknowledgment of the changes and your consent to abide by the updated
          policy.
        </p>
        <Divider margin="20px 0" />
        <p className="policy-head">Contact Us</p>
        <p className="policy-text">
          If you have any questions, concerns, or requests regarding this Cookie
          Policy, don't hesitate to contact us at [contact information]. By
          using our website, you acknowledge that you have read, understood, and
          agreed to the terms of this Cookie Policy.
        </p>
      </section>
    </>
  );
}
