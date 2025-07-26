import RedLocationIcon from './Icons/RedLocationIcon';
import SmallTopRightArrowIcon from './SmallTopRightArrowIcon';

const OpenPositionCard = (props: any) => {
    return (
        <div
            className="border-2 border-[#9199B5]/[0.12] dark:bg-[#9199B5]/[0.12] shadow-[0px_0px_80px_rgba(119,128,161,0.1)] p-[30px] rounded-2xl"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <span className="text-white bg-success px-5 py-3 rounded-[50px] uppercase font-bold">{props.type}</span>
            <h3 className="text-xl font-bold mt-8">{props.title}</h3>
            <p className="text-gray dark:text-[#9199B5] mt-2.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="sm:flex items-center mt-7 justify-between">
                <div className="flex items-center gap-2.5">
                    <span>
                        <span className="sr-only">Location</span>
                        <RedLocationIcon />
                    </span>
                    <p className="font-semibold text-gray dark:text-[#9199B5]">Los Angeles, California</p>
                </div>
                <div className="flex items-center mt-5 sm:mt-0 gap-7">
                    <button
                        type="button"
                        className="border-2 border-[#9199B5]/[0.12] hover:bg-primary hover:text-white duration-200 rounded-[70px] px-5 py-4 leading-[19px] font-semibold items-center flex gap-2.5"
                    >
                        <span className="bg-secondary h-[5px] w-[5px] rounded-full"></span> Full Time
                    </button>
                    <a
                        href="#"
                        className="group flex items-center justify-center w-12 h-12 border-2 border-[#9199B5]/[0.12] hover:bg-primary duration-200 rounded-full"
                    >
                        <span className="sr-only">View</span>
                        <SmallTopRightArrowIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default OpenPositionCard;
