import { CREATE_POST, FETCH_POSTS, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER } from "./types"

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export const fetchPosts = () => {
    return {
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     try {
    //         dispatch(showLoader())
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10') 
    //         const json = await response.json()
    //         setTimeout(() => {
    //             dispatch({type: FETCH_POSTS, payload: json})
    //             dispatch(hideLoader())
    //         }, 500)
    //     } catch (e) {
    //         dispatch(showAlert('Что-то пошло не так'))
    //         dispatch(hideLoader())
    //     }
    // }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })

        setTimeout(() => dispatch(hideAlert()), 3000)
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}