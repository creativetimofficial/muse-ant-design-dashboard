import * as React from 'react';
import { Link } from 'bisheng/router';
import * as utils from '../../utils';

import MainLogo from '../../../../../assets/logo.png';

import './Logo.less';

export interface LogoProps {
  isZhCN: boolean;
  location: any;
}

const Logo = ({ isZhCN, location }: LogoProps) => (
  <h1>
    <Link to={utils.getLocalizedPathname('/', isZhCN, location.query)} id="logo">
      <img alt="logo" src={MainLogo} />
      Muse React Docs
    </Link>
  </h1>
);

export default Logo;
