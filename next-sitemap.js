
module.exports = {
  siteUrl: 'www.sastudentgroove.co.za',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    additionalSitemaps: [
      'www.sastudentgroove.co.za/post-server-sitemap.xml',
      'www.sastudentgroove.co.za/product-server-sitemap.xml',
      'www.sastudentgroove.co.za/accomodation-server-sitemap.xml',
      'www.sastudentgroove.co.za/institution-server-sitemap.xml',
      'www.sastudentgroove.co.za/course-server-sitemap.xml',
      'www.sastudentgroove.co.za/job-server-sitemap.xml',
      
    ],
  },
}