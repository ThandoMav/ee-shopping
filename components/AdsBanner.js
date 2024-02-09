import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
const Ads = () => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">banner Ads.</h3>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
             (function(xaj){
                 var d = document,
                     s = d.createElement('script'),
                     l = d.scripts[d.scripts.length - 1];
                     s.settings = xaj || {};
                     s.src = "\/\/frighteningship.com\/b\/X.Vbs-dpGUl\/0jY\/WydkikY\/Wo5cuEZ\/XIId\/ceEmI9\/u\/ZTUUlrkbPsT\/QF5ZM\/zDMI0vNSz\/QYtfNLDqk_zeMazdQo3XNoQC";
                     l.parentNode.insertBefore(s, l);
            })({})
          `,
          }}
      />
    </div>
  );
};

export default Ads;
