import React from 'react';
import ReactDOM from 'react-dom';
import { FlowAnalysisGraph } from '@ant-design/graphs';

const DemoFlowAnalysisGraph = () => {
  const data = {
       nodes: [
      {
        id: '-1',
        value: {
          items: [
            {
              text: 'Amazon',
            },
          ],
        },
      },
      {
        id: '1',
        value: {
          items: [
            {
              text: 'MongoDB\nproducts\ndata_new',
            },
          ],
        },
      },
      {
        id: '2',
        value: {
          items: [
            {
              text: 'MongoDB\nproducts\nseller',
            },
          ],
        },
      },
      {
        id: '3',
        value: {
          items: [
            {
              text: 'MongoDB\nproducts\nseller',
            },
          ],
        },
      },
      {
        id: '4',
        value: {
          items: [
            {
              text: 'MongoDB\nproducts\nasin_by_class',
            },
          ],
        },
      },
      {
        id: '11',
        value: {
          items: [
            {
              text: 'MySQL\nAmazon_Data\nasin_basic_info',
            },
          ],
        },
      },
      {
        id: '12',
        value: {
          items: [
            {
              text: 'MySQL\nAmazon_Data\nrelated_products',
            },
          ],
        },
      },
      {
        id: '13',
        value: {
          items: [
            {
              text: 'MySQL\nAmazon_Data\nvarlants',
            },
          ],
        },
      },
      {
        id: '14',
        value: {
          items: [
            {
              text: 'MySQL\nAmazon_Data\nseller',
            },
          ],
        },
      },
      {
        id: '15',
        value: {
          items: [
            {
              text: 'MySQL\nAmazon_Data\nseller_products',
            },
          ],
        },
      },
      {
        id: '21',
        value: {
          items: [
            {
              text: 'MySQL\ndata_product',
            },
          ],
        },
      },
      {
        id: '22',
        value: {
          items: [
            {
              text: 'MySQL\nAmazonData\nproduct_hscode',
            },
          ],
        },
      },
      {
        id: '23',
        value: {
          items: [
            {
              text: 'MySQL\nseller',
            },
          ],
        },
      },      {
        id: '-2',
        value: {
          items: [
            {
              text: 'ShenZhen',
            },
          ],
        },
      },     
      {
        id: '5',
        value: {
          items: [
            {
              text: 'MongoDB\nseller_api\nqichacha',
            },
          ],
        },
      },      {
        id: '16',
        value: {
          items: [
            {
              text: 'MySQL\ndata\nmonyh_all',
            },
          ],
        },
      },      
      {
        id: '24',
        value: {
          items: [
            {
              text: 'MySQL\ndata_month',
            },
          ],
        },
      },      
      {
        id: '-3',
        value: {
          items: [
            {
              text: 'JungleScout',
            },
          ],
        },
      },      {
        id: '6',
        value: {
          items: [
            {
              text: 'MongoDB\Njunglescout\nbase',
            },
          ],
        },
      },      {
        id: '7',
        value: {
          items: [
            {
              text: 'MongoDB\njunglescout\ndatabase',
            },
          ],
        },
      },      
      {
        id: '8',
        value: {
          items: [
            {
              text: 'MongoDB\njunglescout\nopportunity',
            },
          ],
        },
      },
      {
        id: '17',
        value: {
          items: [
            {
              text: 'MySQL\ndata\nmonth_all_js',
            },
          ],
        },
      },
      {
        id: '-4',
        value: {
          items: [
            {
              text: 'Skyee',
            },
          ],
        },
      },
      {
        id: '9',
        value: {
          items: [
            {
              text: 'MongoDB\nSkyee\ntransaction',
            },
          ],
        },
      },
      {
        id: '31',
        value: {
          items: [
            {
              text: 'MySQL\nAgg_Seller_AverageAndSum',
            },
          ],
        },
      },
      {
        id: '32',
        value: {
          items: [
            {
              text: 'MySQL\nAgg_Product_AverageAndSum',
            },
          ],
        },
      },
    ],

    edges: [
      {
        source: '-1',
        target: '1',
        value: 'AmazonSpider.static',
      },
      {
        source: '-1',
        target: '2',
        value: 'AmazonSpider.seller',
      },
      {
        source: '-1',
        target: '3',
        value: 'AmazonSpider.seller_products',
      },
      {
        source: '-1',
        target: '4',
        value: 'AmazonSpider.asin_by_class',
      },
      {
        source: '1',
        target: '11',
	value: 'inupt_asin_basic_info\nspringboot',
      },
      {
        source: '1',
        target: '12',
	value: 'inupt_related_products\nspringboot',
      },
      {
        source: '1',
        target: '13',
	value: 'inupt_varlants\nspringboot',
      },
      {
        source: '2',
        target: '14',
	value: 'inupt_seller\nspringboot',
      },
      {
        source: '3',
        target: '15',
	value: 'inupt_seller_products\nspringboot',
      },
      {
        source: '11',
        target: '21',
	value: 'springboot',
      },
      {
        source: '11',
        target: '22',
	value: 'inupt_seller_product_hscode_src_link',
      },
      {
        source: '14',
        target: '23',
	value: 'springboot',
      },
      {
        source: '-2',
        target: '5',
        value: 'input_qichacha',
      },
      {
        source: '-2',
        target: '16',
        value: 'Update_asin_info.tool_update',
      },
      {
        source: '16',
        target: '24',
        value: 'springboot\nimputation',
      },
      {
        source: '-3',
        target: '6',
        value: 'JungleScout.js',
      },
      {
        source: '-3',
        target: '7',
	value: 'JungleScout.database_crawler',
      },
      {
        source: '-3',
        target: '8',
	value: 'JungleScout.opportunity_crawler',
      },
      {
        source: '17',
        target: '24',
	value: 'springboot\nimputation',
      },
      {
        source: '21',
        target: '31',
	value: 'springboot',
      },
      {
        source: '24',
        target: '31',
	value: 'springboot',
      },
      {
        source: '24',
        target: '32',
	value: 'springboot',
      },
      {
        source: '6',
        target: '17',
	value: 'input_js_month_all\nspringboot',
      },
      {
        source: '-4',
        target: '9',
	value: 'TO_DO',
      },
    ],
  };

  const config = {
    data,
    nodeCfg: {
      size: [110, 45],
      items: {
        padding: 6,
        containerStyle: {
          fill: '#fff',
        },
      },
      customContent: (item, group, cfg) => {
        const { startX, startY, width } = cfg;
        const { text, value, icon, trend } = item;
        text &&
          group?.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX,
              y: startY,
              text,
              fill: '#aaa',
            },
            // group 内唯一字段
            name: `text-${Math.random()}`,
          });
        value &&
          group?.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX + 60,
              y: startY,
              text: value,
              fill: '#000',
            },
            name: `value-${Math.random()}`,
          });
        icon &&
          group?.addShape('image', {
            attrs: {
              x: startX + 100,
              y: startY,
              width: 8,
              height: 10,
              img: icon,
            },
            name: `image-${Math.random()}`,
          });
        trend &&
          group?.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX + 110,
              y: startY,
              text: trend,
              fill: '#f00',
            },
            name: `value-${Math.random()}`,
          });

        // 行高
        return 14;
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
          fontSize: 12,
        },
      },
      style: {
        fill: '#E6EAF1',
        stroke: '#B2BED5',
        radius: [2, 2, 2, 2],
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 0.5,
        },
      },
      edgeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges } = data;
      return {
        position: 'right',
        show: edges.find((item) => item.source === cfg.id),
      };
    },
    layout: {
      ranksepFunc: () => 30,
      nodesepFunc: () => 30,
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <FlowAnalysisGraph {...config} />;
};

export default DemoFlowAnalysisGraph

