'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Virtual } from 'swiper/modules';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { IRootState } from '@/store';

const AboutUsPartnersSlider = () => {
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
                <Image src="/assets/images/logodark1.svg" width={141} height={34} alt="logodark1" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark2.svg" width={141} height={28} alt="logodark2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark3.svg" width={141} height={26} alt="logodark3" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark4.svg" width={141} height={28} alt="logodark4" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark5.svg" width={141} height={36} alt="logodark5" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark6.svg" width={141} height={36} alt="logodark6" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark1.svg" width={141} height={34} alt="logodark1" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark2.svg" width={141} height={28} alt="logodark2" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark3.svg" width={141} height={26} alt="logodark3" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark4.svg" width={141} height={28} alt="logodark4" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark5.svg" width={141} height={36} alt="logodark5" />
            </SwiperSlide>
            <SwiperSlide>
                <Image src="/assets/images/logodark6.svg" width={141} height={36} alt="logodark6" />
            </SwiperSlide>
        </Swiper>
    );
};

export default AboutUsPartnersSlider;
