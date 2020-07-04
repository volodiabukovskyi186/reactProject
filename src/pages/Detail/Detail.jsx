import React from 'react'
import styles from './style.module.css'
import {connect} from 'react-redux'
const Detail=({suncPosts})=>{
    
    console.log(suncPosts)
    return(
        <div className={styles.conteiner} >
            {suncPosts.map(item=><p key={item.word_count}>{item.abstract}</p>)}
        </div>
    )
}
const mapStateToProps=state=>{
    
    return {
        suncPosts:state.posts.posts
    }
     
    
}
export default connect(mapStateToProps,null)(Detail) 
