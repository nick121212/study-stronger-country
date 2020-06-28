import { AnyAction } from "redux";

export const SET_LOGIN_INFO = Symbol();

export interface IState {
    UID?: string;
    tmzw?: string;
    token?: string;
    uaToken?: string;
    webUmidToken?: string;
    zwfigprt?: string;
    isLogin: boolean;
    cookie?: string;
}

const initialState: IState = {
    UID: "",
    tmzw: "",
    token: "",
    uaToken: "",
    webUmidToken: "",
    zwfigprt: "",
    isLogin: false,
    cookie: ""
};

export const reducer = (state: IState = initialState, action: AnyAction) => {
    console.log(action);
    switch (action.type) {
        case SET_LOGIN_INFO:
            return Object.assign({}, state, {
                ...action.payload
            });
        default:
            return state;
    }
};
