'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon_path: string;
  icon_alt: string;
  link_url: string;
  sort_order: number;
  is_active: boolean;
}

export default function ServicesSection() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/cms/services');
        const data = await response.json();
        
        if (data.services) {
          setServices(data.services);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback to default services if API fails
        setServices([
          {
            id: '1',
            title: 'Email Marketing',
            description: 'Our design services starts and ends best in class experience.',
            icon_path: '/assets/images/icon-mail.svg',
            icon_alt: 'Email Marketing',
            link_url: '/services-detail',
            sort_order: 1,
            is_active: true,
          },
          {
            id: '2',
            title: 'Social Media',
            description: 'Our design services starts and ends best in class experience.',
            icon_path: '/assets/images/icon-instagram.svg',
            icon_alt: 'Social Media',
            link_url: '/services-detail',
            sort_order: 2,
            is_active: true,
          },
          {
            id: '3',
            title: 'Google/FB Ads',
            description: 'Our design services starts and ends best in class experience.',
            icon_path: '/assets/images/icon-fb-ads.svg',
            icon_alt: 'Google/FB Ads',
            link_url: '/services-detail',
            sort_order: 3,
            is_active: true,
          },
          {
            id: '4',
            title: 'Content Strategy',
            description: 'Our design services starts and ends best in class experience.',
            icon_path: '/assets/images/icon-content.svg',
            icon_alt: 'Content Strategy',
            link_url: '/services-detail',
            sort_order: 4,
            is_active: true,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-6 text-center md:mb-12">
            <p className="mb-7 inline-flex rounded-full dark:bg-success-light/10 bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
              what we create
            </p>
            <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
              We provide wide range of <br />
              <span className="bg-[url(/assets/images/line1.svg)] bg-bottom-right bg-no-repeat">digital services</span>
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="relative overflow-hidden p-[3px] rounded-2xl">
                  <div className="rounded-2xl border-[3px] border-[#9199B5]/10 bg-white p-8 dark:bg-[#112C3C]">
                    <div className="mb-7">
                      <div className="w-[60px] h-[60px] bg-gray-300 rounded"></div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-6 bg-gray-300 rounded"></div>
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-6 text-center md:mb-12">
          <p className="mb-7 inline-flex rounded-full dark:bg-success-light/10 bg-success-light/[0.08] dark:text-secondary px-5 py-2.5 font-bold uppercase leading-[18px] text-success-light">
            what we create
          </p>
          <h2 className="text-2xl font-extrabold leading-tight md:text-[40px] dark:text-white">
            We provide wide range of <br />
            <span className="bg-[url(/assets/images/line1.svg)] bg-bottom-right bg-no-repeat">digital services</span>
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.id} className="relative overflow-hidden p-[3px] rounded-2xl group" data-aos="fade-up" data-aos-duration="1000">
              <Link href={service.link_url} className="absolute w-full h-full z-50" aria-label={service.title}></Link>
              <div className="bg-gradient green animate-spin-slow absolute w-full h-full left-0 top-0 opacity-0 group-hover:opacity-100"></div>
              <div className="rounded-2xl border-[3px] z-1 relative border-[#9199B5]/10 bg-white p-8 dark:bg-[#112C3C]">
                <div className="mb-7">
                  <Image 
                    src={service.icon_path} 
                    width={60} 
                    height={60} 
                    alt={service.icon_alt || service.title}
                    className="w-[60px] h-[60px] object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-semibold dark:text-white">{service.title}</h3>
                  <p className="text-lg text-gray">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 