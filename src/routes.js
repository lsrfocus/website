import MainBody from './components/MainBody';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';

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
