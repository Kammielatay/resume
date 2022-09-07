import { Outlet, Link } from 'react-router-dom'
import { Fragment } from 'react';
//import { ReactComponent as CrwnLogo} from '../../assets/kli.png';
import './navigation.styles.scss'


const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo here!!
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about-me">
            About
          </Link>
          <Link className="nav-link" to="/contact-me">
            Contact
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
