import React from 'react'
import './testimonials.css'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide, Swiperslide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    name: 'Patrizia Mottl',
    position: 'Teacher At WISS, M322',
    review: 'Mr. Fellmann was always present in class and actively participated. In their project, Mr. Fellmann and his team, created a GUI prototype using Figma. The GUI was consistently structured and tailored to the user requirements. The final usability tests demonstrated, that users could easily navigate the app.',
  },
  {
    name: 'Shatta Wale',
    position: 'Teacher At WISS',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores cupiditate autem inventore molestias! Dolor dolore ipsam similique aliquam iure vero eveniet sit, ad voluptates. Molestias dolore eligendi error perferendis! ad voluptates. Molestias dolore eligendi error perferendis!ad voluptates. Molestias dolore eligendi error perferendis!',
  },
  {
    name: 'Person 3',
    position: 'Teacher At WISS',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores cupiditate autem inventore molestias! Dolor dolore ipsam similique aliquam iure vero eveniet sit, ad voluptates. Molestias dolore eligendi error perferendis!',
  },
  {
    name: 'Person 4',
    position: 'Teacher At WISS',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum asperiores cupiditate autem inventore molestias! Dolor dolore ipsam similique aliquam iure vero eveniet sit, ad voluptates. Molestias dolore eligendi error perferendis!',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

    <Swiper className="container testimonials__container"
    modules={[ Pagination ]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, position, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <h2 className='client__name'>{name}</h2>
              <h5 className='clienst__position' >{position}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials