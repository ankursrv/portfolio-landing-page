import styles from './skilsbars.module.css'
const SkilsBars = () => {
    const skilCard = [
        {
            imagePath: './images/ui-design.png',
            title: 'UI/UX Design',
            discription: 'This is a demo test, you can while your own content here.'
        },
        {
            imagePath: './images/website-design.png',
            title: 'WebSite  Design',
            discription: 'This demo trust can be changed while macking the production everbody watches'
        },
        {
            imagePath: './images/app-design.png',
            title: 'App Design',
            discription: 'You can while trust to machine app downloade'
        }
    ]
    return (

        <section className={styles.skilsBarsInner}>
            {
                skilCard.map((item, index) => (
                    <section key={index} className={styles.skilsBars}>
                        <figure>
                            <img src={item.imagePath} alt="ui skills image" className={styles.skilsBarsImg} />
                        </figure>
                        <div className={styles.skilsBarsContent}>
                            <h3 className={styles.skilsBarsTitle}>{item.title}</h3>
                            <p className={styles.skilsBarsDiscription}>{item.discription}</p>
                        </div>

                    </section>
                ))
            }
        </section>
    )
}
export default SkilsBars