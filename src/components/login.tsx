import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import useLogin from "../hooks/useLogin";
import useRate from "../hooks/useRate";
import { SET_CURRENT_STEP } from "../store/reducers/dashboard";
import { SET_LOGIN_INFO } from "../store/reducers/login";

export default function Login() {
    const [loginMode, setLoginMode] = useState(false);
    const { cookie, webview } = useLogin(loginMode);
    const { loading, rate } = useRate(cookie);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading) {
            if (loginMode) {
                setLoginMode(false);
            }

            if (rate.code === 401) {
                setLoginMode(true);
            }

            if (rate.code === 200) {
                dispatch({
                    type: SET_LOGIN_INFO,
                    payload: {
                        isLogin: true,
                        cookie
                    }
                });
                dispatch({
                    type: SET_CURRENT_STEP,
                    payload: {
                        currentStep: 1
                    }
                });
            }
        }
    }, [cookie, loading, rate]);

    return (
        <div className="flex-auto flex flex-column">
            {rate.code === 200 ? null : webview}
            <div className="mb4-l cf">
                {rate.data &&
                    rate.data.dayScoreDtos
                        .filter((r: any) => {
                            return [1, 2, 1001, 9, 1002, 1003].indexOf(r.ruleId) >= 0;
                        })
                        .map((r: any) => {
                            return (
                                <article key={r.ruleId} className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb4 pr2 pr0-ns">
                                    <h4 className="f5 f4-l fw6">{r.name}</h4>
                                    <span className="f7 f6-l db black-70">{r.desc}</span>
                                    <a className="f6 db fw6 pv3 black-70 link dim" title={r.name}>
                                        {r.currentScore}/{r.dayMaxScore}
                                    </a>
                                </article>
                            );
                        })}
            </div>
        </div>
    );
}
