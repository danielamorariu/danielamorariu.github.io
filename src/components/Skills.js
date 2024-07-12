import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import skillsSet from "../data/skills.json";
export const Skills = () => {

    const openItem = (id, clas) => {
        // const item = document.querySelector(id)
        const skillClass = 'skills-icon--' + clas.clas
        const item = document.querySelector('skillClass')
        console.log('skillClass', skillClass)
        console.log('open item', item)
        // const panel = item.querySelector('.skills__panel')
        // console.log('open item', panel)
        // panel.classList.toggle('active')
    }

    return (
        <div className="skills" id="skills">
            <div className="skills-wrapper inner">

                <Splide aria-label="My Skills" options={ {
                    type: 'loop',
                    perPage : 3,
                    focus   : 'center',
                    pagination: false,
                    breakpoints: {
                        992: {
                            perPage: 1,
                        },
                        1520: {
                            perPage: 2,
                        }
                    }
                } }>
                    {skillsSet.map(({ id, name, clas, intro }) => (
                        <SplideSlide key={id}>
                            <div className="skills-item" id={id} onClick={() => {openItem ({id}, {clas}) }}>
                                <span className={`skills-icon skills-icon--${clas}`}></span>
                                <p>{name}</p>
                                <div className="skills__panel">
                                    <p>{intro}</p>
                                </div>
                            </div>
                        </SplideSlide>
                    ))}

                </Splide>
            </div>

        </div>
    )
}
