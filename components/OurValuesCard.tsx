const OurValuesCard = (props: any) => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] duration-200 hover:bg-success/10 dark:hover:bg-success/10 rounded-2xl dark:shadow-none shadow-[0px_0px_80px_rgba(119,128,161,0.1)] p-4 lg:p-8">
                <span>{props.icon}</span>
                <h3 className="text-xl font-semibold mt-5">{props.title}</h3>
                <p className="text-lg text-gray dark:text-[#9199B5] mt-2.5">
                    Our design services starts and ends best in class experience.
                </p>
            </div>
        </div>
    );
};

export default OurValuesCard;
