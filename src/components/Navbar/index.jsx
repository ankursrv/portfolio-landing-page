import { useState } from "react"
import { Link } from "react-scroll"
import './style.css'

const Navbar = () => {
    const navLink = [
        {
            link: 'Home',
            href: 'intro'
        },
        {
            link: 'About',
            href: 'about'
        },
        {
            link: 'Portfolio',
            href: 'portfolio'
        },
        {
            link: 'Clients',
            href: 'client'
        }
    ]

    // Mobile Menu Start 
    const [mobileMenu, setMobileMenu] = useState(false)

    // Mobile Menu End 

    return (
        <nav id="home">
            <img src="./images/logo.png" alt="logo" className="desktopLogo" />
            <ul className="desktopMenuItem">
                {
                    navLink.map((item, index) => (
                        <li key={index}>
                            <Link
                                activeClass="active"
                                to={item.href}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                {item.link}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <div className="desktopbtn">
                <button onClick={() =>
                (document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                )}>
                    <img src="./images/contact.png" alt="contact-img" />
                    Contact 
                </button>

                {/* Mobile Menu STart  */}
                <img src="./images/menu.png" alt="logo" className="mobileLogo" onClick={() => (setMobileMenu(!mobileMenu))} />

                <ul className="mobileMenuItem" style={{ display: mobileMenu ? 'flex' : 'none' }}>
                    {
                        navLink.map((item, index) => (
                            <li key={index}>
                                <Link
                                    activeClass="active"
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                >
                                    {item.link}
                                </Link>
                            </li>
                        ))
                    }
                </ul>


                {/* Mobile Menu End  */}

            </div>
        </nav>
    )
}
export default Navbar