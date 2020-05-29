import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index';

interface HeaderProps {}

// export interface LocationDescriptorObject<S = LocationState> {
//     pathname?: Pathname;
//     search?: Search;
//     state?: S;
//     hash?: Hash;
//     key?: LocationKey;
// }

const Header = (props: HeaderProps) => (
  <div>
    <ul>
      <li>
        <NavLink to="/posts" exact activeClassName="activate">
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: '/bugger-counter',
            search: '?counter=1',
            hash: 'bugger',
          }}
          isActive={(match, location) => {
            console.log(match, location);
            return location.pathname.indexOf('bugger-counter') !== -1;
          }}
          activeClassName="activate">
          BuggerCounter
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
