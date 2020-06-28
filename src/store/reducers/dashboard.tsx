import { AnyAction } from "redux";

export const SET_CURRENT_STEP = Symbol();

export interface IState {
    currentStep: number;
}

const initialState: IState = {
    currentStep: 0
};

export const reducer = (state: IState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_CURRENT_STEP:
            return Object.assign({}, state, {
                ...action.payload
            });
        default:
            return state;
    }
};
