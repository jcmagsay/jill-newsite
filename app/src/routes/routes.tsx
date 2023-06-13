import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Ideas from '../pages/Ideas/Ideas';
import NotFound from '../pages/NotFound/NotFound';
import Projects from '../pages/Projects/Projects';
import Resume from '../pages/Resume/Resume';
import Contact from '../pages/Contact/Contact';
import Cms from '../pages/Cms/Cms';

const navRoutes = [
  {
    'path': '/about',
    'name': 'About',
    'component': About,
  },
  {
    'path': '/projects',
    'name': 'Projects',
    'component': Projects,
  },
  {
    'path': '/resume',
    'name': 'Resume',
    'component': Resume,
  },
  {
    'path': '/ideas',
    'name': 'Ideas',
    'component': Ideas,
  },
  {
    'path': '/contact',
    'name': 'Contact',
    'component': Contact,
  },
];

const otherRoutes = [
  {
    'path': '/',
    'name': 'Home',
    'component': Home,
  },
  {
    'path': '/cms',
    'name': 'CMS',
    'component': Cms,
  },
  {
    'path': '/*',
    'name': 'Not Found',
    'component': NotFound,
  },
];

const routes = {
  'navRoutes': navRoutes,
  'all': [...navRoutes, ...otherRoutes],
};

export default routes;
