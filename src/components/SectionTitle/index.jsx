import styles from './sectionTitle.module.css'
const SectionTitle = ({title, discription}) => {
    return (
        <div className={styles.sectionTitleContent}>
            <h2 className={styles.sectionTitleTitle}> {title} </h2>
            <p className={styles.sectionTitleDiscription}> {discription} </p>
        </div>
    )
}
export default SectionTitle