import {createAction, handleActions} from 'redux-actions'

const INCREASE = 'counter/INCRESE';
const DECREASE = 'counter/DECRESE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number:0
};

const counter = handleActions(
    {
        [INCREASE]: (state,action) => ({number:state.number +1}),
        [DECREASE]: (state,action) => ({number:state.number -1})
    },
    initialState
)

export default counter;