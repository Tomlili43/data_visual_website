import component from './en-US/component';
import globalHeader from './en-US/globalHeader';
import menu from './en-US/menu';
import pages from './en-US/pages';
import pwa from './en-US/pwa';
import settingDrawer from './en-US/settingDrawer';
import settings from './en-US/settings';

export default {
  'navBar.lang': 'Languages',
  'menu.Visualizations': 'Real-Time Data',
  'menu.Visualizations.categoryTimeCoverage': 'Category Time Coverage',
  'menu.Visualizations.totalProductByMonth': 'Total Product By Month',
  'menu.Visualizations.totalDBProductByWeek': 'Total DB Product By Week',
  'menu.Visualizations.categoryDistribution': 'Category Distribution',
  'menu.Visualizations.categoryCountByMonth': 'Category Counts By Month',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.copyright.produced': 'Produced by Data Services Platform',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
