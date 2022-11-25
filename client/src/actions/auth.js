import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index.js'

export const signIn = async () => (dispatch) => {
     
    try {

        history.push('/')        

    } catch (error) {
        console.log(error);
    }
};


export const signup = async () => (dispatch) => {

    try {

        history.push('/')        

    } catch (error) {
        console.log(error);
    }
    
}