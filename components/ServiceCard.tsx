import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = (props: any) => {
    return (
        <div className="relative overflow-hidden p-[3px] rounded-2xl group" data-aos="fade-up" data-aos-duration="1000">
             <Link href={`/sluzby/${props.slug}`} className="absolute w-full h-full z-50" aria-label="Email"></Link>
            <div className="bg-gradient green animate-spin-slow absolute w-full h-full left-0 top-0 opacity-0 group-hover:opacity-100"></div>
            <div className="rounded-2xl border-[3px] z-1 relative border-[#9199B5]/10 bg-white p-8 dark:bg-[#112C3C]">
                <div className="mb-7">
                    <Image src={props.icon_path} width={60} height={60} alt="icon mail" />
                </div>
                <div className="space-y-1.5">
                    <h3 className="text-xl font-semibold dark:text-white">{props.title}</h3>
                    <p className="text-lg text-gray">{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
