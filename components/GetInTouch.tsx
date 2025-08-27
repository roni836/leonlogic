import Image from 'next/image';
import Link from 'next/link';


const GetInTouch = () => {
    return (
        <div className="container">
            <div className="max-w-[447px]">
                <h2 className="text-3xl md:text-[40px] font-extrabold text-white md:leading-[47px] mb-8">
                    Potrebujete pomoc s <span className="bg-[url('/assets/images/line1.svg')] bg-bottom-right bg-no-repeat"> projektom? </span>
                    Spojte sa s nami ešte dnes!
                </h2>
                
                <Link
                    href="/kontakt"
                    className="bg-white rounded-[70px] uppercase text-success py-4 px-[30px] font-bold hover:bg-black hover:text-white duration-200 inline-flex"
                >
                    KONTAKTOVAŤ NÁS
                </Link>
            </div>
            <Image
                src="/assets/images/avatar.png"
                className="absolute end-0 sm:end-7 rtl:rotate-y-180 bottom-0 max-w-[200px] sm:max-w-[460px]"
                alt="avatar"
                height={160}
                width={460}
            />
        </div>
    );
};

export default GetInTouch;
