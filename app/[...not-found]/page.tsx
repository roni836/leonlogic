import Image from 'next/image';
import Link from 'next/link';

const Notfound = () => {
    return (
        <div className="pt-36 lg:pt-56 pb-16 lg:pb-40 text-center max-w-lg w-full mx-auto">
            <div className="pb-12">
                <Image
                    src="/assets/images/404.svg"
                    alt="error Image"
                    className="w-full h-full object-cover block dark:hidden"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    width={512}
                    height={512}
                />
                <Image
                    src="/assets/images/404-dark.svg"
                    alt="error Image"
                    className="w-full h-full object-cover hidden dark:block"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    width={512}
                    height={512}
                />
            </div>
            <div>
                <h1 className="text-[40px]/6 font-semibold pb-7">Oops!</h1>
                <p className="text-[22px]/6">We can’t seems to find the page you’re looking for.</p>
                <Link href="/" className="btn inline-flex mt-14">
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default Notfound;
