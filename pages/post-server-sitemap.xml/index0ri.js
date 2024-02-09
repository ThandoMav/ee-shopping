//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'www.sastudentgroove.co.za/search-posts';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://www.sastudentgroove.co.za/about-us</loc>
    </url>
		<url>
			 <loc>https://www.sastudentgroove.co.za/about-us</loc>
      </url>
			<url>
			 <loc>https://www.sastudentgroove.co.za/contact-us</loc>
     </url>
		 <url>
       <loc>https://www.sastudentgroove.co.za/search</loc>
    </url>
    <url>
		   <loc>https://www.sastudentgroove.co.za/search-posts</loc>
    <url>
		</url>
			 <loc>https://www.sastudentgroove.co.za/search-res</loc>
     </url>
     <url>
   		 <loc>https://www.sastudentgroove.co.za/search-courses</loc>
    </url>
    <url>
	  	 <loc>https://www.sastudentgroove.co.za/search-institutions</loc>
    </url>
		<url>
		   <loc>https://www.sastudentgroove.co.za/search-jobs</loc>
		 </url>

     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>https://www.sastudentgroove.co.za/post/${`${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
