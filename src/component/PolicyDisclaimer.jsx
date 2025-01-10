import React from 'react';

const PolicyDisclaimer = () => {
  return (
    <>
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto p-5">
          <h1 className="text-center text-4xl font-bold text-zinc-700 mb-10">Policy Disclaimer</h1>

          <div className="text-zinc-700">
            <h2 className="text-2xl font-semibold mb-5">Introduction</h2>
            <p className="mb-5">
              The information provided on this website is for general informational purposes only. While we make every
              effort to ensure that the information is accurate and up to date, we do not guarantee the accuracy, completeness,
              or reliability of any content on this site.
            </p>

            <h2 className="text-2xl font-semibold mb-5">Content Accuracy</h2>
            <p className="mb-5">
              All content, including text, images, and other materials on this website, are provided "as is" without any warranties or guarantees. We are not responsible for any errors or omissions in the content.
            </p>

            <h2 className="text-2xl font-semibold mb-5">External Links</h2>
            <p className="mb-5">
              Our website may contain links to third-party websites. We do not control the content of these external websites, and we are not responsible for the information or actions on those sites. Clicking on these links is done at your own risk.
            </p>

            <h2 className="text-2xl font-semibold mb-5">Limitation of Liability</h2>
            <p className="mb-5">
              We are not liable for any damages arising from the use of this website or the information provided, including but not limited to, any direct, indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-2xl font-semibold mb-5">Changes to Disclaimer</h2>
            <p className="mb-5">
              We reserve the right to modify this disclaimer at any time without prior notice. Any changes will be posted on this page, and we encourage you to review this page regularly to stay informed about any updates.
            </p>

            <h2 className="text-2xl font-semibold mb-5">Contact Us</h2>
            <p className="mb-5">
              If you have any questions regarding this disclaimer or any other policy, feel free to contact us at [Your Contact Email].
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

export default PolicyDisclaimer;
