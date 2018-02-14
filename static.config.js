import React from 'react';

export default {

  siteRoot: 'https://lsrfocus.com',

  getSiteData: () => ({
    title: 'LSR Focus',
  }),

  getRoutes: () => [
    {
      path: '/',
      component: 'src/components/MainBody',
    },
    {
      path: '/services',
      component: 'src/components/Services',
    },
    {
      path: '/about',
      component: 'src/components/About',
    },
    {
      path: '/testimonials',
      component: 'src/components/Testimonials',
    },
    {
      is404: true,
      component: 'src/components/NotFound',
    },
  ],

  /* eslint-disable react/prop-types */
  Document: ({ Html, Head, Body, children, siteData }) => (
    <Html amp="" lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

        <title>{siteData.title}</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=47MJ24bJM7" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=47MJ24bJM7" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=47MJ24bJM7" />
        <link rel="manifest" href="/site.webmanifest?v=47MJ24bJM7" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=47MJ24bJM7" color="#000000" />
        <link rel="shortcut icon" href="/favicon.ico?v=47MJ24bJM7" />
        <meta name="apple-mobile-web-app-title" content="LSR" />
        <meta name="application-name" content="LSR" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />

        {/* Facebook Open Graph markup: https://developers.facebook.com/tools/debug/og/object/ */}
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://lsrfocus.com/facebook-preview-v3.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />

        {/* http://google.github.io/material-design-icons/#icon-font-for-the-web */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        {/* AMP */}
        <script async src="https://cdn.ampproject.org/v0.js" />
        <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
        <link rel="canonical" href="/" />
        <style amp-boilerplate="">
          {'body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}'}
        </style>
        <noscript>
          <style amp-boilerplate="">
            {'body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}'}
          </style>
        </noscript>
      </Head>
      <Body>
        {children}

        {/* Google Analytics */}
        <amp-analytics type="googleanalytics">
          <script type="application/json" dangerouslySetInnerHTML={getGoogleAnalyticsScript()} />
        </amp-analytics>
      </Body>
    </Html>
  ),
  /* eslint-enable */

};

function getGoogleAnalyticsScript() {
  return htmlify(`
    {
      "vars": {
        "account": "UA-110594588-3"
      },
      "triggers": {
        "trackPageview": {
          "on": "visible",
          "request": "pageview"
        }
      }
    }
  `);
}

/** Returns an object that can be passed to `dangerouslySetInnerHTML`. */
function htmlify(html: string) {
  return {
    __html: html,
  };
}
