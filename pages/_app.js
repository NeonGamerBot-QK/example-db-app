import { useEffect, useState } from "react";
import "../styles/globals.css";
import Product from '../components/Product';
import ThemeElement from '../components/ThemeElement';
export default function MyApp({ Component, pageProps, window }) {
  const [stop, setStop] = useState(false);
  const [theme,setTheme] = useState(null);
useEffect(() => {

  const inter = setInterval(() => {
let value = localStorage.getItem("theme")
setTheme(value)
  })
return () => clearInterval(inter)
}, [setTheme])
  global && process.env.NODE_ENV !== 'production' && process.browser && window
    ? (global.reactDebugger = {
        stopPage: function () {
          setStop(true);
        },
        load: () => {
          setStop(false);
        },
        Component,
        pageProps
      })
    : process.browser && window ? (window.reactDebugger = {
      stopPage: () => {},
      load: () => {}
    }) : null
  console.debug("Attached window.reactDebugger");
if(process.browser && theme === "dark") {
  document.documentElement.style.setProperty('--bg-color', '#111');
  document.documentElement.style.setProperty('--fg-color', '#fff');
  document.documentElement.style.setProperty('--fg2-color', `#3333`);
} else if(process.browser && theme !== "dark") {
  document.documentElement.style.setProperty('--bg-color', '#fff');
  document.documentElement.style.setProperty('--fg-color', '#111');
  document.documentElement.style.setProperty('--fg2-color', `#fff`);
}
  return stop ? (
    <Product product={{ name: "Debugger", description: "Component render stopped" }} />
  ) : (
   <>
<span style={{ float: "right" }}>{" "}<ThemeElement /></span>
    <Component {...pageProps} />
    
</>
    );
}
