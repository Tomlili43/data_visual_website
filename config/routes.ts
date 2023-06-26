/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },

  {
    path: '/visualizations1',
    name: 'Visualizations1',
    icon: 'BarChartOutlined',
    divider: true,
    routes: [
      {
        path: 'categoryDistribution',
        name: 'categoryDistribution',
        component: './amazon_108/CategoryDistribution',
      },
    
      {
        path: 'categoryTimeCoverage',
        name: 'categoryTimeCoverage',
        component: './amazon_108/CategoryTimeCoverage',
      },
    
      {
        path: 'categoryCountByMonth',
        name: 'categoryCountByMonth',
        component: './amazon_108/CategoryCountByMonth',
      },

      {
        path: 'categoryCountByMonthJS',
        name: 'categoryCountByMonthJS',
        component: './amazon_108/CategoryCountByMonthJS',
      },

      {
        path: 'productSearch108',
        name: 'productSearch108',
        icon: 'FileSearchOutlined',
        component: './amazon_108/ProductSearch108',
      },

      {
        path: 'sellerSearch108',
        name: 'sellerSearch108',
        icon: 'FileSearchOutlined',
        component: './amazon_108/SellerSearch108',
      },
    ]
  },

  {
    path: '/visualizations2',
    name: 'Visualizations2',
    icon: 'PieChartOutlined',
    divider: true,
    routes: [
      {
        path: 'categoryCountByMonthDP',
        name: 'categoryCountByMonthDP',
        component: './amazon_93/CategoryCountByMonthDM',
      },
          
      {
        path: 'modifiedCount',
        name: 'modifiedCount',
        component: './amazon_93/ModifiedCount',
      },

      {
        path: 'productSearch93',
        name: 'productSearch93',
        icon: 'FileSearchOutlined',
        component: './amazon_93/ProductSearch93',
      },

      {
        path: 'sellerSearch93',
        name: 'sellerSearch93',
        icon: 'FileSearchOutlined',
        component: './amazon_93/SellerSearch93',
      },
    ]
  },

  {
    path: '/panjiva',
    name: 'PanjivaData',
    icon: 'LineChartOutlined',
    divider: true,
    routes: [
      {
        path: 'usImpTransactionCount',
        name: 'usImpTransactionCount',
        component: './panjiva/UsImpTransactionCount',
      },
      {
        path: 'usImpTransactionValue',
        name: 'usImpTransactionValue',
        component: './panjiva/UsImpTransactionValue',
      },
      {
        path: 'usImpTransactionWeight',
        name: 'usImpTransactionWeight',
        component: './panjiva/UsImpTransactionWeight',
      },
      {
        path: 'usImpTransactionVolume',
        name: 'usImpTransactionVolume',
        component: './panjiva/UsImpTransactionVolume',
      },
      {
        path: 'usImpTransactionCountCN',
        name: 'usImpTransactionCountCN',
        component: './panjiva/UsImpTransactionCountCN',
      },
      {
        path: 'usImpTransactionValueCN',
        name: 'usImpTransactionValueCN',
        component: './panjiva/UsImpTransactionValueCN',
      },
      {
        path: 'usImpTransactionWeightCN',
        name: 'usImpTransactionWeightCN',
        component: './panjiva/UsImpTransactionWeightCN',
      },
      {
        path: 'usImpTransactionVolumeCN',
        name: 'usImpTransactionVolumeCN',
        component: './panjiva/UsImpTransactionVolumeCN',
      },
    ]
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },

  {
    path: '/Data_Clean_Workflow2',
    name: 'Data_Clean_Workflow2',
    icon: 'smile',
    component: './Data_Clean_Workflow2',
  }
];
