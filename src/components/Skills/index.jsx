import SkilsBars from '../SkilsBars';
import styles from './skills.module.css';
import SectionTitle from '../SectionTitle';
const Skills = () => {
    return (
        <section className={styles.skills} id="about">
            <SectionTitle
                title="What I do"
                discription=" I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator."
            />

            <SkilsBars />

        </section>
    )
}
export default Skills