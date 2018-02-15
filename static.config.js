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
    <Html lang="en">
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

        {/* Google Analytics - Global site tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110594588-3" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={getGoogleAnalyticsScript()}
        />

        {/* Drip analytics */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={getDripScript()}
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  /* eslint-enable */

};

function getGoogleAnalyticsScript() {
  return htmlify(`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-110594588-3');
  `);
}

function getDripScript() {
  return htmlify(`
    var _dcq = _dcq || [];
    var _dcs = _dcs || {};
    _dcs.account = '7185891';

    (function() {
      var dc = document.createElement('script');
      dc.type = 'text/javascript'; dc.async = true;
      dc.src = '//tag.getdrip.com/7185891.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(dc, s);
    })();
  `);
}

/** Returns an object that can be passed to `dangerouslySetInnerHTML`. */
function htmlify(html: string) {
  return {
    __html: html,
  };
}
