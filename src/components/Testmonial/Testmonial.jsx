import React from 'react';
import "./testmonial.css";
import Image1 from '../../assets/avatar-1.svg';
import Image2 from '../../assets/avatar-2.svg';
import Image3 from '../../assets/avatar-3.svg';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        image: Image1,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
        id: 2,
        image: Image2,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },

    {
        id: 3,
        image: Image3,
        title: "John Doe",
        subtitle: "Product designer at Dribble",
        comment:
            "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
];


const Testmonial = () => {
    return (
        <section className="testmonial container section">
            <h2 className="section__title active">Clients & Reviews</h2>

            <Swiper className="testimonials_container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                grabCursor={true}
            >
                {data.map(({ id, image, title, subtitle, comment }) => {
                    return (
                        <SwiperSlide className="testimonials__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonial__title">{title}</h3>
                            <span className="subtitle">{subtitle}</span>
                            <div className="comment">{comment}</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}


export default Testmonial