import { Home, AccountCircle, Favorite, Settings } from '@material-ui/icons';
import Contacts from '../views/Contacts/Contacts'
import DisplayLanguage from '../views/Settings/DisplayLanguage'

import Test from '../Test'

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    navbarName: 'Home',
    icon: Home,
    component: Contacts
  },
  {
    path: '/profile',
    sidebarName: 'Profile',
    navbarName: 'Profile',
    icon: AccountCircle,
    component: Test
  },
  {
    path: '/favorite',
    sidebarName: 'Favorite',
    navbarName: 'Favorite',
    icon: Favorite,
    component: Test
  },
  {
    path: '/settings',
    sidebarName: 'Settings',
    navbarName: 'Settings',
    icon: Settings,
    component: DisplayLanguage
  }
];

export default Routes;