import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FundFlowGraph } from '@ant-design/graphs';

const DemoFundFlowGraph = () => {
   const data = {
       nodes: [
      {
        id: '-1',
        value: {
              text: 'Amazon',
        },
      },
      {
        id: '1',
        value: {

              text: 'MongoDB\nproducts\ndata_new',

        },
      },
      {
        id: '2',
        value: {

              text: 'MongoDB\nproducts\nseller',

        },
      },
      {
        id: '3',
        value: {
              text: 'MongoDB\nproducts\nseller',

        },
      },
      {
        id: '4',
        value: {

              text: 'MongoDB\nproducts\nasin_by_class',

        },
      },
      {
        id: '11',
        value: {

              text: 'MySQL\nAmazon_Data\nasin_basic_info',

        },
      },
      {
        id: '12',
        value: {

              text: 'MySQL\nAmazon_Data\nrelated_products',

        },
      },
      {
        id: '13',
        value: {

              text: 'MySQL\nAmazon_Data\nvarlants',

        },
      },
      {
        id: '14',
        value: {

              text: 'MySQL\nAmazon_Data\nseller',

        },
      },
      {
        id: '15',
        value: {

              text: 'MySQL\nAmazon_Data\nseller_products',

        },
      },
      {
        id: '21',
        value: {

              text: 'MySQL\ndata_product',

        },
      },
      {
        id: '22',
        value: {

              text: 'MySQL\nAmazonData\nproduct_hscode',

        },
      },
      {
        id: '23',
        value: {

              text: 'MySQL\nseller',

        },
      },      {
        id: '-2',
        value: {

              text: 'ShenZhen',

        },
      },     
      {
        id: '5',
        value: {

              text: 'MongoDB\nseller_api\nqichacha',

        },
      },      {
        id: '16',
        value: {

              text: 'MySQL\ndata\nmonyh_all',

        },
      },      
      {
        id: '24',
        value: {

              text: 'MySQL\ndata_month',

        },
      },      
      {
        id: '-3',
        label:'JungleScout',
        value: {

              text: 'JungleScout',

        },
      },      {
        id: '6',
        value: {

              text: 'MongoDB\Njunglescout\nbase',

        },
      },      {
        id: '7',
        value: {

              text: 'MongoDB\njunglescout\ndatabase',

        },
      },      
      {
        id: '8',
        value: {

              text: 'MongoDB\njunglescout\nopportunity',

        },
      },
      {
        id: '17',
        value: {

              text: 'MySQL\ndata\nmonth_all_js',

        },
      },
      {
        id: '-4',
        value: {

              text: 'Skyee',

        },
      },
      {
        id: '9',
        value: {

              text: 'MongoDB\nSkyee\ntransaction',

        },
      },
      {
        id: '31',
        value: {

              text: 'MySQL\nAgg_Seller_AverageAndSum',

        },
      },
      {
        id: '32',
        value: {

              text: 'MySQL\nAgg_Product_AverageAndSum',

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
  value: { text: 'inupt_asin_basic_info', subText: 'springboot' },
      },
      {
        source: '1',
        target: '12',
  value: { text: 'inupt_related_products', subText: 'springboot' },
      },
      {
        source: '1',
        target: '13',
   value: { text: 'inupt_varlants', subText: 'springboot' },
      },
      {
        source: '2',
        target: '14',
     value: { text: 'inupt_seller', subText: 'springboot' },
      },
      {
        source: '3',
        target: '15',
   value: { text: 'inupt_seller_products', subText: 'springboot' },
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
        value: '',
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
      },
      {
        source: '24',
        target: '32',
	value: 'springboot',
      },
      {
        source: '6',
        target: '17',
 value: { text: 'input_js_month_all', subText: 'springboot' },
      },
      {
        source: '-4',
        target: '9',
	value: 'TO_DO',
      },
  ],}

  const config = {
    data,
    nodeCfg: {
      size: [180, 50],
      items: {
        padding: 6,
        containerStyle: {
          fill: '#111',
        },
      }
    },
};

  return <FundFlowGraph {...config} />;
};

export default DemoFundFlowGraph