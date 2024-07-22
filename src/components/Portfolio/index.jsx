import styles from './portfolio.module.css'
import SectionTitle from '../SectionTitle'
const Portfolio = () => {
    const portfolioCard = [
        {
            image: './images/portfolio-1.png',
            imageName: 'portfolio-Image'
        },
        {
            image: './images/portfolio-2.png',
            imageName: 'portfolio-Image'
        },
        {
            image: './images/portfolio-3.png',
            imageName: 'portfolio-Image'
        },
        {
            image: './images/portfolio-4.png',
            imageName: 'portfolio-Image'
        },
        {
            image: './images/portfolio-5.png',
            imageName: 'portfolio-Image'
        },
        {
            image: './images/portfolio-6.png',
            imageName: 'portfolio-Image'
        }
    ]
    return (
        <section className={styles.portfolio} id="portfolio">
            <SectionTitle
                title="My Portfolio"
                discription="I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence."
            />
            {/* <div className={styles.portfolioContent}>
                <h2 className={styles.portfolioTitle}>My Portfolio</h2>
                <p className={styles.portfolioDiscription}>
                    I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
                </p>
            </div> */}

            <div className={styles.portfolioWork}>
                <ul className={styles.portfolioContainer}>
                    {
                        portfolioCard.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.imageName} className={styles.portfolioImg} />
                            </li>
                        ))
                    }
                </ul>
                <button className={styles.portfolioBtn}>See More</button>
            </div>
        </section>
    )
}
export default Portfolio