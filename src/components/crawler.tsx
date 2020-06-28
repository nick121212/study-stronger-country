import React, { useEffect } from "react";
import { unstable_createResource as createResource } from "react-cache";

import { isArray } from "../utils";

const delay = (interval: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, interval);
    });
};

const resource = createResource((interval: number) => delay(interval));
function getDataFromQGInterface(layout: any) {
    if (layout.children) {
        layout.children.forEach((ele: any) => {
            getDataFromQGInterface(ele);
        });
    }

    if (layout.dataId) {
        console.log(layout.schemaId, layout.type, layout.dataId);
    }
}

function getArticleAndVideoFromData(data: any, list: string[] = []) {
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];

            if (isArray(element)) {
                getArticleAndVideoFromData(element, list);
            }

            if (isArray(element.list)) {
                getArticleAndVideoFromData(element.list, list);
            }

            if (element.itemId) {
                list.push(element.itemId);
                // console.log(element.itemId, element);
            }

            // "6394204748288964992"
        }
    }

    return list;
}

export default function Crawler() {
    // const articlesInfo = useSWR(
    //     "http://localhost:3001/hw",
    //     (url: string) => {
    //         return fetch(url, {
    //             credentials: "include"
    //         });
    //     },
    //     { suspense: true }
    // );

    // useEffect(() => {
    //     if (articlesInfo.data) {
    //         console.log("----------", articlesInfo.data);
    //         if (articlesInfo.data.ok && !articlesInfo.data.bodyUsed) {
    //             articlesInfo.data
    //                 .json()
    //                 .then((data) => {
    //                     // getDataFromQGInterface(data.Layout);
    //                     return getArticleAndVideoFromData(data.pageData);
    //                 })
    //                 .then((data: string[]) => {
    //                     for (const key in data) {
    //                         if (data.hasOwnProperty(key)) {
    //                             const element = data[key];
    //                         }
    //                     }
    //                 })
    //                 .then(console.log)
    //                 .catch(console.error);
    //         }
    //     }
    // }, [articlesInfo.data]);

    const a = resource.read(3000);

    console.log(a, "a");

    return <div>等待了3秒钟后加载</div>;
}
