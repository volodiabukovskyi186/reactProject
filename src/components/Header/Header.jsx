import React from 'react';
import styles from './style.module.css'
import { NavLink ,Link} from 'react-router-dom'
// import SingUp from '../SingUp/SingUp';
import { BrowserRouter as Router, Route,Switch, link } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import SingUp from '../../pages/SingUp/SingUp';
import SingIn from '../../pages/SingIn/SingIn';
import PrivateRoute from '../../PrivateRoute';
import Detail from '../../pages/Detail/Detail';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1> NewYork Times</h1>
            </div>
            <div className={styles.navbar}>
                <ul className={styles.navButton}>
                    <Router>

                    <li>
                    <Link   to='/'> Home</Link>
                    </li>
                    <li>
                    <NavLink to='/singUp'> Sing Up</NavLink>
                    </li>
                    <li>
                    <NavLink to='/singIn'> Sing In</NavLink>
                    </li>

                    </Router>
                   

                </ul>
            </div>
        </header>
    )
}
export default Header
