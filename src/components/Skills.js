// import '@splidejs/react-splide/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow } from 'swiper/modules';

import skillsSet from "../data/skills.json";
import 'react-circular-progressbar/dist/styles.css';
import { Flat } from '@alptugidin/react-circular-progress-bar'

export const Skills = () => {

    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-wrapper inner">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide="3"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow]}
                    className="skills__swiper"
                >

                    {skillsSet.map(({id, name, clas, range}) => (
                        <SwiperSlide>
                            <div className="skills-item" id={id} key={id}>
                                <span className={`skills-icon skills-icon--${clas}`}></span>
                                <p>{name}</p>
                                <p>{range}%</p>
                                <div className="skills__panel">
                                    <Flat
                                        progress={range}
                                        sx={{
                                            strokeColor: '#004cff',
                                            barWidth: 5,
                                            miniCircleColor: '#3f3fff',
                                            miniCircleSize: 9,
                                        }}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
                {/*{skillsSet.map(({id, name, clas, range}) => (*/}
                {/*    <div className="skills-item" id={id} key={id}>*/}
                {/*        <span className={`skills-icon skills-icon--${clas}`}></span>*/}
                {/*        <p>{name}</p>*/}
                {/*        <p>{range}%</p>*/}
                {/*        <div className="skills__panel">*/}
                {/*            <Flat*/}
                {/*                progress={range}*/}
                {/*                sx={{*/}
                {/*                    strokeColor: '#004cff',*/}
                {/*                    barWidth: 5,*/}
                {/*                    miniCircleColor: '#3f3fff',*/}
                {/*                    miniCircleSize: 9,*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>
        </div>
    )
}
