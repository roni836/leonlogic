import Image from 'next/image';
const TeamMemberCard = (props: any) => {
    return (
        <div className="text-center group">
            <div className="rounded-full overflow-hidden mx-auto w-40 sm:w-48 rtl:rotate-y-180 bg-[#9199B5]/[0.12] duration-300 grayscale group-hover:grayscale-0">
                <Image src={props.src} width={props.width} height={props.height} alt="developer 2" />
            </div>
            <h3 className="text-xl font-bold mt-5">{props.name}</h3>
            <p className="text-lg font-semibold text-gray dark:text-[#9199B5] mt-1">{props.position}</p>
        </div>
    );
};

export default TeamMemberCard;
