import '@splidejs/react-splide/css';
import skillsSet from "../data/skills.json";
import 'react-circular-progressbar/dist/styles.css';
import { Flat } from '@alptugidin/react-circular-progress-bar'

export const Skills = () => {

    return (
        <div className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skills-wrapper inner">
                {skillsSet.map(({id, name, clas, range}) => (
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
                ))}
            </div>
        </div>
    )
}
