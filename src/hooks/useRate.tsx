import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function useRate(cookie: string) {
    const [rate, setRate] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();
    const rateInfo = useSWR(
        cookie ? () => "https://pc-api.xuexi.cn/open/api/score/today/queryrate?a=" + cookie : null,
        (url: string) => {
            return fetch(url, {
                credentials: "include"
            });
        },
        { suspense: true }
    );

    useEffect(() => {
        if (rateInfo.error) {
            setError(rateInfo.error);
            setLoading(false);
        }

        if (rateInfo.data) {
            rateInfo.data.json().then((data: any) => {
                // if (data.code !== 200) {
                //     return setError(new Error(data.error));
                // }

                setRate(data);
            });
            setLoading(false);
        }
    }, [rateInfo.data, rateInfo.error]);

    return { loading, rate, error };
}
