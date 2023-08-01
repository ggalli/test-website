'use client';

// import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import { Card } from '../Card';
import { Text } from '../Text';

interface Testimonial {
  name: string;
  photoSrc: string;
  college: string;
  text: string;
}

const TestimonialCard = ({ name, photoSrc, college, text }: Testimonial) => {
  return (
    <Card className="flex flex-col">
      <Text className="text-justify leading-normal grow">“{text}”</Text>
      <div className="flex items-center gap-4 mt-4">
        <div className="w-16 h-16 rounded-full shrink-0 overflow-hidden">
          <img src={photoSrc} width={64} height={64} alt={`Foto do ${name}`} />
        </div>
        <div>
          <Text weight="bold">{name}</Text>
          <Text className="mt-0" size="sm">
            {college}
          </Text>
        </div>
      </div>
    </Card>
  );
};

export const Testimonials = ({ data }: { data: Testimonial[] }) => {
  return (
    <Swiper
      className="p-2"
      spaceBetween={24}
      slidesPerView="auto"
      modules={[Pagination]}
      pagination={{
        dynamicBullets: true,
      }}
      breakpoints={{
        1024: {
          centerInsufficientSlides: true,
        },
      }}
    >
      {data.map(({ name, photoSrc, college, text }) => (
        <SwiperSlide className="max-w-xs flex h-auto" key={name}>
          <TestimonialCard name={name} photoSrc={photoSrc} college={college} text={text} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
