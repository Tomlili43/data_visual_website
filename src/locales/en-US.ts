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
  'menu.Visualizations1': 'Test Real-Time Data',
  'menu.Visualizations1.categoryTimeCoverage': 'Category Time Coverage',
  'menu.Visualizations1.categoryDistribution': 'Category Distribution',
  'menu.Visualizations1.categoryCountByMonth': 'Monthly Category Counts',
  'menu.Visualizations1.categoryCountByMonthJS': 'Monthly Category Counts JS',
  'menu.Visualizations1.productSearch108': 'Product Search',
  'menu.Visualizations1.sellerSearch108': 'Seller Search',

  'menu.Visualizations2': 'Production Real-Time Data',
  'menu.Visualizations2.categoryCountByMonthDM': 'Monthly Category Counts DM',
  'menu.Visualizations2.modifiedCount': 'Modified Count',
  'menu.Visualizations2.productSearch93': 'Product Search',
  'menu.Visualizations2.sellerSearch93': 'Seller Search',

  'menu.Visualizations3': 'Public Real-Time Data',
  'menu.Visualizations3.categoryCountByMonthDM': 'Monthly Category Counts DM',
  'menu.Visualizations3.modifiedCount': 'Modified Count',
  'menu.Visualizations3.productSearch148': 'Product Search',
  'menu.Visualizations3.sellerSearch148': 'Seller Search',

  'menu.PanjivaData': 'Panjiva Real-Time Data',
  'menu.PanjivaData.usImpTransactionCount': 'Transaction Count',
  'menu.PanjivaData.usImpTransactionValue': 'Transaction Value',
  'menu.PanjivaData.usImpTransactionWeight': 'Transaction Weight',
  'menu.PanjivaData.usImpTransactionVolume': 'Transaction Volume',
  'menu.PanjivaData.usImpTransactionCountCN': 'Transaction Count CN',
  'menu.PanjivaData.usImpTransactionValueCN': 'Transaction Value CN',
  'menu.PanjivaData.usImpTransactionWeightCN': 'Transaction Weight CN',
  'menu.PanjivaData.usImpTransactionVolumeCN': 'Transaction Volume CN',

  'menu.Data_Clean_Workflow': 'Data Clean Workflow',  // Added to remove console errors, please rename as appropriate
  'menu.Data_Clean_Workflow2': 'Data Clean Workflow 2', // Added to remove console errors, please rename as appropriate
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
