import { FETCH_POST, DETAIL_POST } from './type'
const initialState = {
    fetchedPosts: [],
    posts:[]
}
export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST:
            return { ...state, fetchedPosts: action.payload }
        case DETAIL_POST:
            return { ...state, posts: state.posts.concat([action.payload]) }
        default: return state
    }
}