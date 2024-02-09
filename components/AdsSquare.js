import React, {useEffect, useRef } from "react";

export default function AdComponent() {
 const banner = useRef();

 const atOptions = {
   key: "16cbcbec5d48756322cfe8992e71620e",
   format: "iframe",
   height: 250,
   width: 300,
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
