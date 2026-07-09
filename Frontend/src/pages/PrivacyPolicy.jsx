import PageMeta from '../components/seo/PageMeta'
import BreadCrumb from '../components/ui/BreadCrumb'
import { COMPANY } from '../data/staticContent'

export default function PrivacyPolicy() {
  return (
    <>
      <PageMeta title="Privacy Policy | SAFE Core" description="Privacy Policy for SAFE Core Company Limited." />
      
      <main id="main-content">
        <section className="bg-brand-navy-dark pt-32 pb-20 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BreadCrumb items={[{ label: 'Privacy Policy' }]} />
            <h1 className="text-4xl md:text-5xl font-black text-white mt-8 mb-4">Privacy Policy</h1>
            <p className="text-white/70">Last updated: July 2025</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg text-brand-grey-dark prose-headings:text-brand-navy prose-a:text-brand-green">
              <h2>1. Introduction</h2>
              <p>Welcome to {COMPANY.name}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

              <h2>2. The data we collect about you</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>

              <h2>3. How is your personal data collected?</h2>
              <p>We use different methods to collect data from and about you including through:</p>
              <ul>
                <li><strong>Direct interactions.</strong> You may give us your Identity and Contact by filling in forms or by corresponding with us by post, phone, email or otherwise.</li>
                <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns.</li>
              </ul>

              <h2>4. How we use your personal data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2>5. Contact Details</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:</p>
              <p>
                Email address: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a><br />
                Postal address: {COMPANY.address}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
