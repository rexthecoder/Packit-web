import {
  NavLink,
  Route,
} from 'react-router-dom';

import { Button } from '@windmill/react-ui';

import * as Icons from '../../icons';
import routes from '../../routes/sidebar';
import SidebarSubmenu from './SidebarSubmenu';

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent({ click }) {

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">

      <ul className="mt-6 ">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name} onClick={route.name == 'Sign in' ? click : console.log('This is not sign in')}>
              <NavLink
                exact
                to={route.path}

                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-accentLight dark:hover:text-blue-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-accentLight rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}

      </ul>
      <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
    </div>
  )
}

export default SidebarContent
