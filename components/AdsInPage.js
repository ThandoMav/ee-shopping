import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
const Ads = () => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Ads.</h3>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(fofgi){
                var d = document,
                    s = d.createElement('script'),
                    l = d.scripts[d.scripts.length - 1];
                    s.settings = fofgi || {};
                    s.src = "\/\/frighteningship.com\/a.WU5aw\/Y\/WMdElaQ\/2U9GkQZfTe9f6jbP2X5OlgSYW\/Qj9wN-DokLzxMTz\/Q\/2zMKCr0y0XOjTSMXz_NzDhYpxx";
                    l.parentNode.insertBefore(s, l);
            })({})
          `,
          }}
      />
    </div>
  );
};

export default Ads;
