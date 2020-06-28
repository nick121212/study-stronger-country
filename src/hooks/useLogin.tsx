import { WebviewTag } from "electron";
import React, { useEffect, useRef, useState } from "react";

const QG_LOGIN_URL = "https://oapi.dingtalk.com/connect/qrconnect?appid=dingoankubyrfkttorhpou&response_type=code&scope=snsapi_login&redirect_uri=https://pc-api.xuexi.cn/open/api/sns/callback";

async function getCookies(ref: React.RefObject<WebviewTag>): Promise<string> {
    return new Promise((resolve, reject) => {
        const cookieInfo: string[] = [];

        if (ref.current && ref.current.getWebContents) {
            ref.current.getWebContents().session.cookies.get(
                {
                    domain: ".xuexi.cn"
                },
                (err: Error, cookies: any) => {
                    if (err) {
                        return reject(err);
                    }

                    cookies.forEach(({ name, value }: any) => {
                        cookieInfo.push(`${name}=${value}`);
                    });

                    resolve(cookieInfo.join(";"));
                }
            );
        }
    });
}

export default function useLogin(isShow = false) {
    const ref = useRef<WebviewTag>(null);
    const [cookie, setCookie] = useState<string>("");
    const element = React.createElement("webview", {
        className: isShow ? "w-100 h-100 flex-auto" : "clip w-100 h-100",
        ref,
        src: QG_LOGIN_URL,
        height: "500",
        width: "100%"
    });

    async function onDomReady() {
        // const cookie1 = await getCookies(ref);
        setCookie(await getCookies(ref));
    }

    useEffect(() => {
        if (ref.current) {
            ref.current!.addEventListener("dom-ready", onDomReady);
        }

        return () => {
            if (ref.current) {
                ref.current!.removeEventListener("dom-ready", onDomReady);
            }
        };
    }, [ref.current]);

    return {
        cookie,
        webview: element
    };
}
