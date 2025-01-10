import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto p-5">
          <h1 className="text-center text-4xl font-bold text-zinc-700 mb-10">Privacy Policy</h1>
          
          <div className="text-zinc-700">
            <h2 className="text-2xl font-semibold mb-5">Introduction</h2>
            <p className="mb-5">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>

            <h2 className="text-2xl font-semibold mb-5">Information We Collect</h2>
            <p className="mb-5">
              We collect personal information that you provide to us, such as your name, email address, and other contact details. We may also collect data about your usage of our website through cookies and other tracking technologies.
            </p>

            <h2 className="text-2xl font-semibold mb-5">How We Use Your Information</h2>
            <p className="mb-5">
              We use your information to provide and improve our services, communicate with you, and personalize your experience on our website. We may also use your information to send you marketing communications, if you've opted in.
            </p>

            <h2 className="text-2xl font-semibold mb-5">Data Protection</h2>
            <p className="mb-5">
              We take appropriate measures to protect your personal data from unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-5">Your Rights</h2>
            <p className="mb-5">
              You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at [Your Contact Email].
            </p>

            <h2 className="text-2xl font-semibold mb-5">Changes to This Privacy Policy</h2>
            <p className="mb-5">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. Please check this page periodically for updates.
            </p>
          </div>
        </div>
      </section>

      {/* <footer className="w-full bg-zinc-700 text-white py-5 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p>&#169; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        </div>
      </footer> */}
    </>
  );
};

export default PrivacyPolicy;
