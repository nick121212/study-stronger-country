import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Dashboard from "./components/dashboard";
import store from "./store/store";

import "./app.css";

// function Counter({ step }: { step?: number }) {
//     const [data, setData] = useState({ hits: [] });
//     const [query, setQuery] = useState(window.location.href);
//     const ref = useRef<WebviewTag>(null);
//     const result1: any = useSelector((state: any) => {
//         return state.loginInfo;
//     });

//     useEffect(() => {
//         async function fetchData() {
//             const result = await axios("https://hn.algolia.com/api/v1/search?query=" + query);

//             setData(result.data);
//         }

//         fetchData();
//     }, [query]);

//     useEffect(() => {
//         if (ref.current && ref.current.getWebContents()) {
//             console.log(ref.current.getWebContents().session.cookies);
//         }
//     }, [ref.current]);

//     function getCookies() {
//         if (ref.current && ref.current.getWebContents()) {
//             ref.current.getWebContents().session.cookies.get(
//                 {
//                     domain: ".xuexi.cn"
//                 },
//                 (err: Error, cookies: any) => {
//                     console.log(err, cookies);

//                     if (!err) {
//                         cookies.forEach((cookie: any) => {
//                             console.log(cookie.name, cookie.value);
//                         });
//                     }
//                 }
//             );
//         }
//     }

//     return (
//         <div>
//             <webview style={{ height: 300 }} ref={ref} src="https://pc.xuexi.cn/points/my-study.html"></webview>

//             <button onClick={getCookies}>获取cookies</button>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={(e: any) => {
//                     setQuery(e.currentTarget.value);
//                 }}
//             />
//             {data.hits.map((d: any, index: number) => {
//                 return (
//                     <a key={index} style={{ display: "block" }} href={d.url}>
//                         {d.title}
//                     </a>
//                 );
//             })}
//         </div>
//     );
// }

const rootElement = document.getElementById("root");

if (rootElement) {
    (ReactDOM as any).createRoot(rootElement).render(
        <Provider store={store}>
            <Suspense fallback="loading...">
                <Dashboard />
            </Suspense>
        </Provider>
    );
}
