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
                310: {
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
                <Image src="/assets/images/hero/logo1.png" width={100} height={10} alt="logo1" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo2.png" width={100} height={10} alt="logo2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo3.png" width={100} height={10} alt="logo3" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo4.png" width={100} height={10} alt="logo4" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo5.png" width={100} height={10} alt="logo5" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo6.png" width={100} height={10} alt="logo6" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo7.png" width={100} height={10} alt="logo7" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo8.png" width={100} height={10} alt="logo8" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo9.png" width={100} height={10} alt="logo9" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/hero/logo10.png" width={100} height={10} alt="logo10" />
            </SwiperSlide>
        </Swiper>
    );
};

export default PartnerSlider;
