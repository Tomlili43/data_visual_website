import React from 'react';
import ReactDOM from 'react-dom';
import { FlowAnalysisGraph } from '@ant-design/graphs';

const DemoFlowAnalysisGraph = () => {
  const data = {
    nodes: [
     
      {
        id: '0',
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
              text: 'MongoDB products data',
            },
          ],
        },
      },
      {
        id: '2',
        value: {
          items: [
            {
              text: 'MySQL data asin_basic_info',
            },
          ],
        },
      },
      {
        id: '3',
        value: {
          items: [
            {
              text: 'MySQL data_product',
            },
          ],
        },
      },
      {
        id: '4',
        value: {
          items: [
            {
              text: 'MySQL data product_hscode',
            },
          ],
        },
      },
      {
        id: '5',
        value: {

          items: [
            {
              text: 'MongoDB products seller',
            },
          ],
        },
      },
      {
        id: '6',
        value: {
          items: [
            {
              text: 'MySQL data seller',
            },
          ],
        },
      },
      {
        id: '7',
        value: {
          items: [
            {
              text: 'MySQL seller',
            },
          ],
        },
      },
      {
        id: '8',
        value: {
          items: [
            {
              text: 'MongoDB products seller_products',
            },
          ],
        },
      },
      {
        id: '9',
        value: {
          items: [
            {
              text: 'MySQL data seller_products',
            },
          ],
        },
      },
      {
        id: '10',
        value: {
          items: [
            {
              text: 'MongoDB products asin_by_class',
            },
          ],
        },
      },
    ],
    
    edges: [
      {
        source: '0',
        target: '1',
        value: 'AmazonSpider.static',
      },
      {
        source: '1',
        target: '2',
        value: 'input_asin_basic_info',subText:'springboot',
      },
      {
        source: '2',
        target: '3',
        value: 'springboot',
      },
      {
        source: '2',
        target: '4',
        value: 'input_seller_product_hscode_sic_link'
      },
      {
        source: '0',
        target: '5',
        value: 'AmazonSpider.seller',
      },
      {
        source: '5',
        target: '6',
        value: 'input_selle',subText: 'springboot'
      },
      {
        source: '6',
        target: '7',
        value: 'springboot',
      },
      {
        source: '0',
        target: '8',
        value: 'AmazonSpider.seller_products',
      },
      {
        source: '8',
        target: '9',
        value: 'input_seller_products',
      },
      {
        source: '0',
        target: '10',
        value: 'AmazonSpider.asin_by_class',
      },
    ],
  };
  const config = {
    data,
    nodeCfg: {
      size: [140, 25],
      items: {
        containerStyle: {
          fill: '#fff',
        },
        padding: 6,
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
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
          fillOpacity: 1,
        },
      },
      style: (edge) => {
        const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
        return {
          stroke,
          lineWidth: Math.random() * 10 + 1,
          strokeOpacity: 0.5,
        };
      },
      edgeStateStyles: {
        hover: {
          strokeOpacity: 1,
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
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <FlowAnalysisGraph {...config} />;
};

// ReactDOM.render(<DemoFlowAnalysisGraph />), document.getElementById('root');

export default DemoFlowAnalysisGraph