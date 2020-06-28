import React, { useEffect, useState } from "react";
import { unstable_createResource as createResource } from "react-cache";

const delay = (interval: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, interval);
    });
};

const resource = createResource((interval: number) => delay(interval));

/**
 * 了解了suspend原理后的测试hook
 * 延时加载一段时间
 * @export
 * @param {number} interval
 * @returns
 */
export default function useRate(interval: number) {
    // const [rate, setRate] = useState<any>();
    const data = resource.read(interval);
    // if (!rate) {
    //     throw delay(interval).then((d) => {
    //         console.log("d");
    //         setRate(d);
    //     });
    // }

    // console.log(rate, "rate");

    return { value: data };
}
