import { h } from 'preact';
import { mkComp } from '../core/utils';

const HeaderBar = mkComp('header-bar');
const HeaderContent = mkComp('header-bar-content');
const HeaderLinks = mkComp('header-links');

const Header = () => (
  <HeaderBar>
    <HeaderContent>tiagolisalves</HeaderContent>
  </HeaderBar>
);

export { Header };
