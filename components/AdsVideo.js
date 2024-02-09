import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
const Ads = () => {

  return (
    <div>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(__htavim){
              var d = document,
              s = d.createElement('script'),
              l = d.scripts[d.scripts.length - 1];
              s.settings = __htavim || {};
              s.src = "\/\/creepy-reception.com\/dMmuFSz.d-GqlCtoPB3tpyvsbJm\/V-JyZBDM0Z0lO\/TqM\/znN\/D\/E\/4AL\/TBQy5\/MSztMx0AMlT\/kQ";
              l.parentNode.insertBefore(s, l);
             })()
          `,
          }}
      />
    </div>
  );
};

export default Ads;
