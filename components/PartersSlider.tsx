'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Virtual } from 'swiper/modules';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { IRootState } from '@/store';

const PartnerSlider = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <Swiper
            modules={[Navigation, Autoplay, Virtual]}
            slidesPerView="auto"
            spaceBetween={30}
            speed={2500}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                },
                600: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 5,
                },
                1600: {
                    slidesPerView: 6,
                },
            }}
            dir={isRtl ? 'rtl' : 'ltr'}
            key={isRtl ? 'true' : 'false'}
        >
            <SwiperSlide>
                <Image src="/assets/images/logo1.svg" width={100} height={25} alt="logo1" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo2.svg" width={100} height={21} alt="logo2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo3.svg" width={100} height={19} alt="logo3" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo4.svg" width={100} height={20} alt="logo4" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo5.svg" width={100} height={27} alt="logo5" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo6.svg" width={100} height={27} alt="logo6" />
            </SwiperSlide>

            <SwiperSlide>
                <Image src="/assets/images/logo1.svg" width={100} height={25} alt="logo1" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo2.svg" width={100} height={21} alt="logo2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo3.svg" width={100} height={19} alt="logo3" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo4.svg" width={100} height={20} alt="logo4" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo5.svg" width={100} height={27} alt="logo5" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logo6.svg" width={100} height={27} alt="logo6" />
            </SwiperSlide>
        </Swiper>
    );
};

export default PartnerSlider;
