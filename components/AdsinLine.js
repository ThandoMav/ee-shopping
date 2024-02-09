import React, {useEffect, useRef } from "react";

export default function AdComponent() {
 const banner = useRef();

 const atOptions = {
   key: "ae1b953439b18ec3777758dd4fb5fcf5",
   format: "iframe",
   height: 90,
   width: 728,
 };

     useEffect(() => {
       if (!banner.current.firstChild) {
         const conf = document.createElement("script");
         const script = document.createElement("script");
         script.type = "text/javascript";
         script.src = `//www.highcpmcreativeformat.com/${atOptions.key}/invoke.js`;
         conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

         if (banner.current) {
           banner.current.append(conf);
           banner.current.append(script);
         }
       }
     }, []);


 return <div ref={banner} />;
};
