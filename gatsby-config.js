require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MotoSchool`,
    siteUrl: `https://www.motoschool.co.nz`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", 
  {
    resolve: `gatsby-source-datocms`,
    options: {
      apiToken: process.env.READ_ONLY_DATOCMS,
      preview: false,
      disableLiveReload: false,
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: `src/images/icon.png`,
      icons: [
        {
        src: `src/images/favicons/motoschool-social.png`,
        sizes: `512x512`,
        type: `image/png`
        },
        {
          src: `src/images/favicons/motoschool-med.png`,
          sizes: `192x192`,
          type: `image/png`
        },
        {
        src: `src/images/favicons/motoschool-96x96.png`,
        sizes: `96x96`,
        type: `image/png`
        },
      ]
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-XL1JF0DFZT", // Google Analytics / GA
      ],
      gtagConfig: {
        optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: false,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        delayOnRouteUpdate: 0,
      },
    },
  },

]
};