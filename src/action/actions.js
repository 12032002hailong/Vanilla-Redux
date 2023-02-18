import { INCREMENT, DECREMENT } from './types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,
        payload: { like: 'Buy milk', name: 'Hai Long' }

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};