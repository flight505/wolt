'use client';

import PageHero from '@/components/PageHero';
import ContentSection from '@/components/ContentSection';

export default function PrivacyPage() {
  return (
    <>
      <PageHero 
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        color="secondary"
      />
      
      <main>
        <ContentSection 
          title="Overview"
          bgColor="white"
        >
          <p className="mb-4">
            This Privacy Policy explains how Cancel Wolt ("we", "us", or "our") collects, uses, and 
            shares your personal information through our website cancelwolt.dk. We are committed to
            protecting your privacy and handling your data in an open and transparent manner.
          </p>
          
          <p className="mb-4">
            This policy was last updated on June 1, 2024 and complies with the General Data Protection
            Regulation (GDPR).
          </p>
        </ContentSection>
        
        <ContentSection 
          title="What Information We Collect"
          bgColor="light"
        >
          <p className="mb-4">
            We collect the following types of information:
          </p>
          
          <h3 className="text-xl font-semibold mb-2">Information You Provide to Us</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Pledge Form:</strong> When you sign our pledge, we collect your name, email address, 
              city (optional), and any comments you provide about why you're joining the movement.
            </li>
            <li>
              <strong>Contact Form:</strong> When you contact us, we collect your name, email address, 
              the subject of your inquiry, and your message.
            </li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">Information We Collect Automatically</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Usage Data:</strong> We use Plausible Analytics, a privacy-friendly analytics tool
              that collects anonymous usage statistics. This includes page views, referral sources, and
              browser information, but does not use cookies or collect personal data.
            </li>
          </ul>
        </ContentSection>
        
        <ContentSection 
          title="How We Use Your Information"
          bgColor="white"
        >
          <p className="mb-4">
            We use the information we collect for the following purposes:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <strong>To Process Your Pledge:</strong> We use your name and email to register your 
              pledge and send you a confirmation email.
            </li>
            <li>
              <strong>To Communicate With You:</strong> We use your contact information to respond 
              to your inquiries and send occasional updates about the movement (you can opt out of these 
              at any time).
            </li>
            <li>
              <strong>To Improve Our Website:</strong> We use anonymous usage data to understand how 
              visitors interact with our site and make improvements.
            </li>
            <li>
              <strong>To Count Pledges:</strong> We use anonymous counts of pledges to display the 
              total number of supporters on our website.
            </li>
          </ul>
          
          <p className="mb-4">
            <strong>Legal Basis for Processing:</strong> We process your data based on the following 
            legal grounds:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Your consent (which you can withdraw at any time)</li>
            <li>The legitimate interests of our movement (such as improving our website)</li>
            <li>To fulfill our contractual obligations to you when you sign the pledge</li>
          </ul>
        </ContentSection>
        
        <ContentSection 
          title="How We Share Your Information"
          bgColor="light"
        >
          <p className="mb-4">
            We do not sell, rent, or trade your personal information to third parties. We may share your
            information in the following limited circumstances:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <strong>Service Providers:</strong> We use Supabase to store pledge and contact form data. 
              These providers are contractually bound to protect your data and only process it according 
              to our instructions.
            </li>
            <li>
              <strong>Aggregated Statistics:</strong> We may disclose anonymized, aggregated statistics
              about the number of pledges and their geographic distribution.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your information if required by law,
              such as in response to a court order or legal process.
            </li>
          </ul>
        </ContentSection>
        
        <ContentSection 
          title="Data Retention and Security"
          bgColor="white"
        >
          <h3 className="text-xl font-semibold mb-2">How Long We Keep Your Data</h3>
          <p className="mb-4">
            We retain your personal data for as long as necessary to fulfill the purposes for which it
            was collected, or as required by applicable laws. Specifically:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Pledge data: Retained for the duration of the Cancel Wolt campaign</li>
            <li>Contact form submissions: Retained for up to 1 year after resolution</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-2">How We Protect Your Data</h3>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal data
            against unauthorized or unlawful processing, accidental loss, destruction, or damage. These
            include:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Secure hosting on Vercel's infrastructure</li>
            <li>Encryption of data in transit using HTTPS</li>
            <li>Access controls to limit who can access your data</li>
            <li>Regular security reviews and updates</li>
          </ul>
        </ContentSection>
        
        <ContentSection 
          title="Your Privacy Rights"
          bgColor="light"
        >
          <p className="mb-4">
            Under the GDPR, you have the following rights regarding your personal data:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li>
              <strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong>Right to Rectification:</strong> You can ask us to correct inaccurate or incomplete information.
            </li>
            <li>
              <strong>Right to Erasure:</strong> You can ask us to delete your personal data in certain circumstances.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> You can ask us to limit how we use your data.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You can ask for a copy of your data in a machine-readable format.
            </li>
            <li>
              <strong>Right to Object:</strong> You can object to our processing of your data for certain purposes.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> You can withdraw your consent at any time.
            </li>
          </ul>
          
          <p className="mb-4">
            To exercise any of these rights, please contact us at <a href="mailto:privacy@cancelwolt.dk" className="text-wolt-blue hover:underline">privacy@cancelwolt.dk</a>. 
            We will respond to your request within 30 days.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Cookies and Similar Technologies"
          bgColor="white"
        >
          <p className="mb-4">
            Our website uses minimal cookies that are necessary for the website to function properly. 
            We do not use cookies for advertising or tracking purposes.
          </p>
          
          <p className="mb-4">
            The analytics tool we use (Plausible) is cookie-free and does not track individuals across
            websites or devices.
          </p>
          
          <p className="mb-4">
            You can control cookies through your browser settings. Please note that blocking essential
            cookies may affect the functionality of our website.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Changes to This Policy"
          bgColor="light"
        >
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
            the new policy on this page and updating the "last updated" date.
          </p>
          
          <p className="mb-4">
            We encourage you to review this policy periodically to stay informed about how we protect your
            personal information.
          </p>
        </ContentSection>
        
        <ContentSection 
          title="Contact Us"
          bgColor="white"
        >
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          
          <div className="mb-4">
            <p>Email: <a href="mailto:privacy@cancelwolt.dk" className="text-wolt-blue hover:underline">privacy@cancelwolt.dk</a></p>
          </div>
          
          <p className="mb-4">
            You also have the right to lodge a complaint with the Danish Data Protection Agency (Datatilsynet)
            if you believe that the processing of your personal data violates applicable laws.
          </p>
        </ContentSection>
      </main>
    </>
  );
} 