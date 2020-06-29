import React from "react"
import {Link} from 'gatsby'

// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <div>
            <nav>
            <ul>
                <li><Link to='/' className={headerStyles.nav_link} >Home</Link></li>
                <li><Link to='/about' className={headerStyles.nav_link} >About</Link></li>
                <li><Link to='/blog' className={headerStyles.nav_link} >Blog</Link></li>
                <li><Link to='/contact' className={headerStyles.nav_link} >Contact</Link></li>
            </ul>
            </nav>
            
        </div>
    )
}

export default Header