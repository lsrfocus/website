import MainBody from './components/MainBody';
import Services from './components/Services';
import About from './components/About';

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
];

export default routes;
