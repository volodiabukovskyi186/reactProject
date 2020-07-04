import React from 'react';
import styles from './style.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { fetchPosts } from './../../redux/action';
import Post from '../../components/Post/Post';

 const Main=()=>{
    const dispatch=useDispatch()
    const posts= useSelector(state=>state.posts.fetchedPosts)
    console.log(posts)
  

    if(!posts.length){
  const componentDidMount=()=>dispatch(fetchPosts())
    componentDidMount()
    //     return<button className='btn btn-primary'
    //     onClick={()=>dispatch(fetchPosts())}
    //     > download data</button>
    }
    let post=posts.map(post => <Post post={post} key={post.word_count}></Post>  )
    return(
        <div className={styles.conteiner}>
             <ul>{post}</ul>
        </div>
       
    )  
}
export default Main