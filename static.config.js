export default {

  siteRoot: 'https://lsrfocus.com',

  getSiteData: () => ({
    title: 'React Static',
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

};
