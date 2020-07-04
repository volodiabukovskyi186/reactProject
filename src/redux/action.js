import { FETCH_POST, DETAIL_POST } from "./type";


export function fetchPosts(){
    return async dispatch=>{
        const response=await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=poland&api-key=Gq7R1AnrAVgMZAwswdju1PEZBMXI2hv8')
        const json =await response.json();
        let mas=json.response.docs
        dispatch({type:FETCH_POST,payload:mas})

    }
}

export function detailPost( post){
    console.log(post)
    return{
        type:DETAIL_POST,
        payload:post
    }

}