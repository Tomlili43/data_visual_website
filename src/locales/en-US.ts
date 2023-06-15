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
  'menu.Visualizations1': '108 Real-Time Data',
  'menu.Visualizations1.categoryTimeCoverage': 'Category Time Coverage',
  'menu.Visualizations1.categoryDistribution': 'Category Distribution',
  'menu.Visualizations1.categoryCountByMonth': 'Category Counts',
  'menu.Visualizations1.categoryCountByMonthJS': 'Category Counts JS',
  'menu.Visualizations2': '93 Real-Time Data',
  // 'menu.Visualizations2.categoryTimeCoverage': 'Category Time Coverage',
  // 'menu.Visualizations2.totalDBProductByWeek': 'Total DB Product By Week',
  // 'menu.Visualizations2.categoryDistribution': 'Category Distribution',
  // 'menu.Visualizations2.categoryCountByMonth': 'Category Counts By Month',
  'menu.Visualizations2.categoryCountByMonthDP': 'Category Counts DP',
  'menu.Visualizations2.modifiedCount': 'Modified Count',
  'menu.PanjivaData': 'Panjiva Real-Time Data',
  'menu.PanjivaData.usImpTransactionCount': 'Transaction Count',
  'menu.PanjivaData.usImpTransactionValue': 'Transaction Value',
  'menu.PanjivaData.usImpTransactionWeight': 'Transaction Weight',
  'menu.PanjivaData.usImpTransactionVolume': 'Transaction Volume',
  'menu.PanjivaData.usImpTransactionCountCN': 'Transaction Count CN',
  'menu.PanjivaData.usImpTransactionValueCN': 'Transaction Value CN',
  'menu.PanjivaData.usImpTransactionWeightCN': 'Transaction Weight CN',
  'menu.PanjivaData.usImpTransactionVolumeCN': 'Transaction Volume CN',
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
