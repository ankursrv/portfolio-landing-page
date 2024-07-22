import { Link } from 'react-scroll'
import './style.css'
const Intro = () => {
    return (
        <section className="intro" id='intro'>
            <div className="introContent">
                <small className='hello'>Hello,</small>
                <h1 className="introHeading">
                    I'm <span className="smith">Smith</span> <br />
                    Website Designer
                </h1>
                <p className="introDiscription">
                    I am a skilled and passionate web designer with experience in creating  visually appending and user-friendly websites.
                </p>
                <Link href="#" className='hiremeBtn'>
                    <img src="./images/hireme.png" alt="hire-me btn" />
                    Hire me
                </Link>
                <figure className='introHeroImg'>
                    <img src="./images/image.png" alt="hero image" />
                </figure>
            </div>
        </section>
    )
}
export default Intro