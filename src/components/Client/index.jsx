import styles from './client.module.css'
import SectionTitle from '../SectionTitle'
const Client = () => {
    const brand = [
        {
            image: './images/walmart.png',
            imageName: 'brandImage'
        },
        {
            image: './images/adobe.png',
            imageName: 'brandImage'
        },
        {
            image: './images/microsoft.png',
            imageName: 'brandImage'
        },
        {
            image: './images/facebook.png',
            imageName: 'brandImage'
        }
    ]
    return (
        <section className={styles.client} id="client">
            <SectionTitle
                title="My Clients"
                discription="I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with include"
            />

            <ul className={styles.clientName}>
                {
                    brand.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} className={styles.ClientBrandImage} />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
export default Client