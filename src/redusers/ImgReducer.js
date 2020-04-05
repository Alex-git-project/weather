import * as React from 'react';

const ADD_IMG = "ADD-IMG";

let initialState = {
};

const ImgReducer =(state = initialState, action) => {
    if (action.type === "ADD-IMG") {
        return {...state, img: action.img};
    } else {
        return state;
    }
};

export const titleSetPhoto = (img) => ({type: ADD_IMG,img})

export default ImgReducer
