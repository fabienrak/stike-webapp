// PROJECT IMPORTS
/* import applications from './applications';
import widget from './widget';
import formsTables from './forms-tables';
import chartsMap from './charts-map';
import support from './support';
import pages from './pages'; */
import gestion from './gestion';
import dashboard from './dashboard';

// TYPES
import { NavItemType } from 'types/menu';
import settings from './settings';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  // items: [gestion, widget, applications, formsTables, chartsMap, pages]
  items: [dashboard, gestion, settings]
};

export default menuItems;
