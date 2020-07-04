import React from 'react';
import styles from './style.module.css'

import { detailPost } from './../../redux/action'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom'
const Post = ({ post, detailPost }) => {


    return (
        // ()=>detailPost(post)
        <Router>

            <Link to="/detail">
                <li className={styles.card}>
                    <p onClick={() => detailPost(post)}>{post.headline.main}</p>
                </li>
            </Link>
        </Router>

        //     <NavLink to="/detail"   >    
        //     <li      className={styles.card}>
        //          <p onClick={()=>detailPost(post)}>{post.headline.main}</p>   
        //     </li>
        //    </NavLink>
    )
}

const mapDispatchToProps = {
    detailPost
}


export default connect(null, mapDispatchToProps)(Post)  