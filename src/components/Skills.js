import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
export const Skills = () => {

    return (
        <div className="skills" id="skills">
            <div className="skills-wrapper inner">

                <Splide aria-label="My Skills" options={ {
                    type: 'loop',
                    perPage : 3,
                    focus   : 'center',
                    pagination: false,
                    gap: '16px',
                } }>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--jquery"></span>
                            <p>Jquery</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--javascript"></span>
                            <p>JavaScript</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--typescript"></span>
                            <p>Typescript</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--css"></span>
                            <p>CSS</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--html"></span>
                            <p>HTML</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--react"></span>
                            <p>React</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--typo3"></span>
                            <p>Typo3</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--typo3"></span>
                            <p>Typo3</p>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="skills-item">
                            <span className="skills-icon skills-icon--sass"></span>
                            <p>Sass</p>
                        </div>
                    </SplideSlide>

                </Splide>

            </div>
        </div>
    )
}
