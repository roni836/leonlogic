const TechnologyCard = (props: any) => {
    return (
        <div data-aos="zoom-in-up" data-aos-duration="1000">
            <div className={`border-2 dark:bg-[#9199B5]/[0.12] border-[#9199B5]/[0.12]  hover:bg-[#EF652A]/10 duration-200 rounded-2xl shadow-[0px_0px_80px_rgba(119,128,161,0.1)] py-[30px] ${props.borderHover}`}>
                <div className="flex items-center justify-center gap-2.5">
                    <span>{props.icon}</span>
                    <p className="text-lg font-semibold text-gray dark:text-white">{props.title}</p>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;
