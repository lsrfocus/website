import MainBody from '../MainBody/component';
import Services from '../Services/component';
import About from '../About/component';
import Testimonials from '../Testimonials/component';

const routes = [
  {
    path: '/',
    component: MainBody,
    displayName: 'Home',
  },
  {
    path: '/services',
    component: Services,
    displayName: 'Services',
  },
  {
    path: '/about',
    component: About,
    displayName: 'About',
  },
  {
    path: '/testimonials',
    component: Testimonials,
    displayName: 'Testimonials',
  },
];

export default routes;
