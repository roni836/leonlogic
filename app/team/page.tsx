import BlogSlider from '@/components/BlogSlider';
import ClientsFeedbackSlider from '@/components/ClientsFeedbackSlider';
import GetInTouch from '@/components/GetInTouch';
import DownRightArrowIcon from '@/components/Icons/DownRightArrowIcon';
import TeamMemberCard from '@/components/TeamMemberCard';
import helper from '@/libs/helper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Náš tím – LeonLogic: odborníci na SEO, web a marketing',
    description: 'Spoznajte tím digitálnej agentúry LeonLogic. Naši odborníci na SEO, webové riešenia, marketing a e-commerce vám pomôžu dosiahnuť rast a úspech.',
    openGraph: {
        ...helper.openGraphData,
        title: 'Náš tím – LeonLogic: odborníci na SEO, web a marketing',
        description: 'Spoznajte tím digitálnej agentúry LeonLogic. Naši odborníci na SEO, webové riešenia, marketing a e-commerce vám pomôžu dosiahnuť rast a úspech.',
        url: process.env.NEXT_PUBLIC_APP_URL + '/team',
        type: 'website',
    },
    twitter: {
        ...helper.twitterData,
        title: 'Náš tím – LeonLogic: odborníci na SEO, web a marketing',
        description: 'Spoznajte tím digitálnej agentúry LeonLogic. Naši odborníci na SEO, webové riešenia, marketing a e-commerce vám pomôžu dosiahnuť rast a úspech.',
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_APP_URL}/team`,
        languages: { 'x-default': `${process.env.NEXT_PUBLIC_APP_URL}/team` },
    },
};

const page = () => {
    const teamMembers = [
        {
            src: '/assets/images/developer-2.png',
            name: 'David Bowie',
            position: 'Developer',
            width: '192',
            height: '185',
        },
        {
            src: '/assets/images/developer-1.png',
            name: 'Smith Joe',
            position: 'Web Designer',
            width: '192',
            height: '181',
        },
        {
            src: '/assets/images/developer-6.png',
            name: 'Joni Mitchell',
            position: 'UI Lead',
            width: '192',
            height: '183',
        },
        {
            src: '/assets/images/developer-3.png',
            name: 'Sylvester Stallone',
            position: 'Designer',
            width: '192',
            height: '184',
        },
        {
            src: '/assets/images/developer-4.png',
            name: 'Lucy Liu',
            position: 'Developer',
            width: '192',
            height: '181',
        },
    ];

    return (
        <>
            <section className="pb-12 pt-32 md:pt-52">
                <div className="container">
                    <div className="text-center">
                        <h1
                            className="max-w-[918px] mx-auto text-3xl md:text-[50px] md:leading-[60px] font-black italic uppercase"
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            We picked best specialists that are <span className="text-secondary">suited just for you.</span>
                        </h1>
                    </div>
                </div>
            </section>

            <section className="mt-12 md:mt-24 relative">
                <div className="container">
                    <span className="absolute end-0 rtl:rotate-180 -top-64 hidden 2xl:block">
                        <svg width="167" height="500" viewBox="0 0 167 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M485.54 291.729C485.54 358.607 458.446 410.386 414.663 445.467C370.856 480.567 310.275 499 243.27 499C176.265 499 115.685 480.567 71.8775 445.467C28.0943 410.386 1 358.607 1 291.729C1 224.672 15.4367 151.919 46.5857 95.9681C77.722 40.0399 125.483 1.00001 192.19 1.00001C259.01 1.00001 332.359 40.1611 389.045 96.1929C445.732 152.226 485.54 224.917 485.54 291.729Z"
                                stroke="#FFC010"
                                strokeWidth="2"
                            />
                        </svg>
                    </span>
                    <span className="absolute start-0 rtl:rotate-180 bottom-80 hidden 2xl:block">
                        <svg width="167" height="500" viewBox="0 0 167 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M165.54 291.729C165.54 358.607 138.446 410.386 94.663 445.467C50.8557 480.567 -9.72491 499 -76.7298 499C-143.735 499 -204.315 480.567 -248.123 445.467C-291.906 410.386 -319 358.607 -319 291.729C-319 224.672 -304.563 151.919 -273.414 95.9681C-242.278 40.0399 -194.517 1.00001 -127.81 1.00001C-60.9904 1.00001 12.3591 40.1611 69.0451 96.1929C125.732 152.226 165.54 224.917 165.54 291.729Z"
                                stroke="#07D673"
                                strokeWidth="2"
                            />
                        </svg>
                    </span>
                    <div>
                        <div className="flex gap-2.5">
                            <h2 className="text-[30px] font-bold">Designers</h2>
                            <span>
                                <span className="sr-only">Arrow down</span>
                                <DownRightArrowIcon />
                            </span>
                        </div>
                        <div className="flex justify-between whitespace-nowrap pb-2.5 overflow-x-auto mt-12 gap-5" data-aos="fade-up" data-aos-duration="1000">
                            {teamMembers.map((member, index) => {
                                return (
                                    <TeamMemberCard
                                        key={index}
                                        src={member.src}
                                        name={member.name}
                                        position={member.position}
                                        height={member.height}
                                        width={member.width}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="mt-16 md:mt-28">
                        <div className="flex gap-2.5">
                            <h2 className="text-[30px] font-bold">Designer</h2>
                            <span>
                                <span className="sr-only">Arrow down</span>
                                <DownRightArrowIcon />
                            </span>
                        </div>
                        <div className="flex justify-between whitespace-nowrap pb-2.5 overflow-x-auto mt-12 gap-5" data-aos="fade-up" data-aos-duration="1000">
                            {teamMembers.map((member, index) => {
                                return (
                                    <TeamMemberCard
                                        key={index}
                                        src={member.src}
                                        name={member.name}
                                        position={member.position}
                                        height={member.height}
                                        width={member.width}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="mt-16 md:mt-28">
                        <div className="flex gap-2.5">
                            <h2 className="text-[30px] font-bold">Designer</h2>
                            <span>
                                <span className="sr-only">Arrow down</span>
                                <DownRightArrowIcon />
                            </span>
                        </div>
                        <div className="flex justify-between whitespace-nowrap pb-2.5 overflow-x-auto mt-12 gap-5" data-aos="fade-up" data-aos-duration="1000">
                            {teamMembers.map((member, index) => {
                                return (
                                    <TeamMemberCard
                                        key={index}
                                        src={member.src}
                                        name={member.name}
                                        position={member.position}
                                        height={member.height}
                                        width={member.width}
                                    />
                                );
                            })}
                        </div>
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
