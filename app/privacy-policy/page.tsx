import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ochrana osobných údajov – LeonLogic digitálna agentúra',
    description: 'Zásady ochrany osobných údajov spoločnosti LeonLogic. Ako spracúvame, uchovávame a chránime vaše dáta v súlade s GDPR a slovenskou legislatívou.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Ochrana osobných údajov – LeonLogic digitálna agentúra',
        description: 'Zásady ochrany osobných údajov spoločnosti LeonLogic. Ako spracúvame, uchovávame a chránime vaše dáta v súlade s GDPR a slovenskou legislatívou.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/privacy-policy',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Ochrana osobných údajov – LeonLogic digitálna agentúra',
        description: 'Zásady ochrany osobných údajov spoločnosti LeonLogic. Ako spracúvame, uchovávame a chránime vaše dáta v súlade s GDPR a slovenskou legislatívou.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/privacy-policy` },
    },
};

const page = () => {
    return (
        <>
            <section className="pb-12 pt-32 md:pt-52">
                <div className="container">
                    <div>
                        <h1 className="text-[28px] font-bold leading-8">Privacy policy</h1>
                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-8">
                            At www.leonlogic.com, accessible at www.leonlogic.com, one of our main priorities is the privacy of our visitors. This Privacy Policy
                            document contains types of information that is collected and recorded by www.leonlogic.com and how we use it.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email
                            at hello@leonlogic.com
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5">
                            This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information
                            that they shared and/or collect in www.leonlogic. This policy is not applicable to any information collected offline or via channels
                            other than this website.
                        </p>
                        <h2 className="text-[28px] font-bold leading-8 mt-12 md:mt-16">Consent</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-8">
                            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-2.5">{`Most interactive websites use cookies to let us retrieve the
                            user's
                            details for each visit. Cookies are used by our website to enable the functionality of
                            certain areas to make it easier for people visiting ourwebsite. Some of our
                            affiliate/advertising partners may also use cookies.`}</p>
                        <h2 className="text-[28px] font-bold leading-8 mt-12 md:mt-16">Information we collect</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-8">
                            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you
                            at the point we ask you to provide your personal information.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-2.5">
                            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the
                            contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        </p>
                        <p className="text-gray dark:text-[#9199B5] mt-2.5">
                            When you register for an Account, we may ask for your contact information, including items such as name, company name, address,
                            email address, and telephone number.
                        </p>
                        <h2 className="text-[28px] font-bold leading-8 mt-12 md:mt-16">How we use your information</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-8">We use the information we collect in various ways, including to:</p>
                        <ul className="space-y-2 text-gray dark:text-[#9199B5] mt-2.5 list-disc list-inside">
                            <li>Provide, operate, and maintain our website</li>
                            <li>Improve, personalize, and expand our website</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>
                                Communicate with you, either directly or through one of our partners, including for customer service, to provide you with
                                updates
                            </li>
                        </ul>
                        <h2 className="text-[28px] font-bold leading-8 mt-12 md:mt-16">Links to Other Sites/Apps</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-8">
                            Our Website links to other websites/Websites that may collect personally identifiable information about you. Mntra is not
                            responsible for the privacy practices or the content of those linked websites/Websites.
                        </p>
                        <h2 className="text-[28px] font-bold leading-8 mt-12 md:mt-16">Security Precautions</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-8">
                            Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our
                            control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in
                            our possession we adhere to strict security guidelines, protecting it against unauthorized access.
                        </p>
                        <h2 className="text-[28px] font-bold leading-8 mt-12 md:mt-16">Choice/Opt-Out</h2>
                        <p className="text-gray dark:text-[#9199B5] mt-5 md:mt-8">
                            We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from
                            us on behalf of our partners, and from us in general, after setting up an account. If you want to remove your contact information
                            from all our lists and newsletters, please visit unsubscribe.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <BlogSlider />
            </section>

            <section className="py-10 md:py-16">
                <ClientsFeedbackSlider />
            </section>

            <section className="bg-[url('/assets/images/newsletter.png')] bg-cover bg-bottom bg-no-repeat bg-success py-12 relative">
                <GetInTouch />
            </section>
        </>
    );
};

export default page;
