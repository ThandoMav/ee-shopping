import React, {useEffect, useRef } from "react";

export default function AdComponent() {
 const banner = useRef();

 const atOptions = {
   key: "a8fcae9788aebc3259e36cb3ef130e41",
   format: "iframe",
   height: 600,
   width: 160,
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
