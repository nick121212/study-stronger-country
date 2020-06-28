import { Divider, Steps } from "antd";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import Crawler from "./crawler";
import Login from "./login";

export default function Dashboard() {
    const dbInfo = useSelector((state: any) => {
        return state.dashboardInfo;
    });
    // const loginInfo = useSelector((state: any) => {
    //     return state.loginInfo;
    // });

    // useEffect(() => {
    //     console.log(loginInfo, dbInfo);
    // });

    return (
        <div className="w-100 h-100 overflow-auto pa3 flex flex-column">
            <Steps
                className="w-100"
                style={{
                    minHeight: 40
                }}
                current={dbInfo.currentStep}>
                <Steps.Step title="检测登陆中" />
                <Steps.Step title="爬取文章和视屏链接" />
                <Steps.Step title="开始完成文章和视屏的阅读" />
            </Steps>

            <Divider dashed />

            {/**
                <Suspense fallback="loading...">
                    <Login />
                </Suspense>
            */}

            <Suspense fallback="loading...">
                <Crawler />
            </Suspense>
        </div>
    );
}
