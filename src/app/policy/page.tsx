// pages/privacy-policy.tsx

import Head from 'next/head';
import { FC } from 'react';

const PrivacyPolicy: FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <Head>
        <title>Privacy Policy - Gusherlabs</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          This is the privacy policy of Gusherlabs, a software development company dedicated to creating innovative and user-friendly mobile applications. This Privacy Policy is designed to inform you about how we collect, use, and protect your personal information when you use our mobile applications available on the Google Play Store Apps.
        </p>
        {/* Information We Collect */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Information We Collect</h2>
          <p>
            <strong>Personal Information:</strong> We may collect the following personal information when you use our Apps:
          </p>
          <ul className="list-disc ml-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Device information (e.g., device type, operating system)</li>
            <li>Usage data (e.g., app features used, interactions within the app)</li>
          </ul>
          <p>
            <strong>Non-Personal Information:</strong> We may also collect non-personal information that does not directly identify you. This information may include aggregated usage data, anonymous analytics, and other non-personal information.
          </p>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">How We Use Your Information</h2>
          <p>
            We may use your information for the following purposes:
          </p>
          <ul className="list-disc ml-6">
            <li>To provide and improve our Apps</li>
            <li>To personalize your app experience</li>
            <li>To analyze usage patterns and optimize app performance</li>
            <li>To send you updates and notifications related to our Apps</li>
            <li>To respond to your inquiries and provide customer support</li>
          </ul>
        </section>

        {/* Cookies and Analytics */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Cookies and Analytics</h2>
          <p>
            Our Apps may use cookies and similar tracking technologies to collect and store certain information. These technologies help us analyze app usage and improve the user experience. You can manage your cookie preferences within the app settings.
          </p>
        </section>

        {/* Data Sharing */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Data Sharing</h2>
          <p>
            We do not sell your personal information to third parties. However, we may share your information with trusted third-party service providers to assist us in operating and improving our Apps.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Data Security</h2>
          <p>
            We take data security seriously and implement industry-standard security measures to protect your information from unauthorized access or disclosure.
          </p>
        </section>

        {/* Your Choices */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Your Choices</h2>
          <p>
            You can exercise the following rights regarding your personal information:
          </p>
          <ul className="list-disc ml-6">
            <li>Access: You can request access to the personal information we hold about you.</li>
            <li>Correction: You can request corrections to any inaccurate or incomplete personal information.</li>
            <li>Deletion: You can request the deletion of your personal information.</li>
            <li>Opt-Out: You can opt-out of receiving promotional communications from us.</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Childrens Privacy</h2>
          <p>
            Our Apps are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately.
          </p>
        </section>

        {/* Changes to this Privacy Policy */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the revised Privacy Policy within our Apps. Your continued use of our Apps after the changes are posted constitutes your acceptance of the updated Privacy Policy.
          </p>
        </section>

        {/* Contact Us */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p>[Your Contact Information]</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
