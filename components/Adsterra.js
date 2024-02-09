import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

const Ads = () => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>

        <Link href='' passHref >
            <p> AD HERE</p>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-KKLYPTGH22"></Script>
            <Script
              id='google-analytics'
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                atOptions = {
              		'key' : 'a8fcae9788aebc3259e36cb3ef130e41',
              		'format' : 'iframe',
              		'height' : 600,
              		'width' : 160,
              		'params' : {}
              	};
              	document.write('<scr' + 'ipt type="text/javascript" src="//www.highcpmcreativeformat.com/a8fcae9788aebc3259e36cb3ef130e41/invoke.js"></scr' + 'ipt>');
                `,
                }}
            />
        </Link>
    </div>
  );
};

export default Ads;
