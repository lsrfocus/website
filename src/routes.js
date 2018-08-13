import MainBody from './components/MainBody/component';
import Services from './components/Services/component';
import About from './components/About/component';
import Testimonials from './components/Testimonials/component';

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
