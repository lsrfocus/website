import MainBody from './components/MainBody';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';

const routes = [
  {
    path: '/',
    component: MainBody,
  },
  {
    path: '/services',
    component: Services,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/testimonials',
    component: Testimonials,
  },
];

export default routes;
