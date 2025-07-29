import Image from 'next/image';
import React from 'react';

interface ReviewCardProps {
  title: string;
  text: string;
  img: string;
  name: string;
  role: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ title, text, img, name, role }) => (
  <div className="rounded-2xl border-[2px] border-[#9199B5]/10 bg-white dark:bg-[#9199B5]/[0.12] p-4 md:p-6">
    <h3 className="mb-4 border-s-2 border-secondary ps-2 text-xs font-bold uppercase text-success dark:text-secondary">
      {title}
    </h3>
    <p className="mb-4 text-sm md:text-base dark:text-white">
      {text}
    </p>
    <div className="flex gap-2.5 items-center">
      <div className="h-9 w-9 flex-none overflow-hidden rounded-full">
        <Image src={img} alt={name} className="h-full w-full object-cover rtl:rotate-y-180" width={36} height={36} />
      </div>
      <div className="font-semibold">
        <h4 className="text-base text-success dark:text-secondary leading-tight">{name}</h4>
        <p className="text-xs text-gray dark:text-[#9199B5] leading-tight">{role}</p>
      </div>
    </div>
  </div>
);

export default ReviewCard; 