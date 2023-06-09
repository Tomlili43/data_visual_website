import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import axios, { AxiosResponse } from 'axios';
import fs from 'fs';
//import data from './data/unique_products_by_month.json'

interface DataItem {
  type: string;
  value: number;
}

interface ApiResponse {
  data: string[];
}

const CategoryDistribution = () => {
  const [data, setData] = useState<DataItem[]>([]);
  useEffect(() => { 

    console.log('Sending HTTP GET request');
    axios.get<ApiResponse>('https://192.168.5.154:48499/asinBasicInfo/grouped')
      .then((response: AxiosResponse<ApiResponse>) => {
        console.log('Received HTTP response');
        const newData = response.data.data.map((item: string, index: number) => {
          const lastCommaIndex = item.lastIndexOf(',');
          const type = item.substring(0, lastCommaIndex).trim();
          const value = parseInt(item.substring(lastCommaIndex + 1).trim(), 10);
          return { type, value };
        });
        setData(newData);
        const dataJson = JSON.stringify(newData);
        const fs = require('fs');
        fs.writeFileSync('./data/category_distribution.json', dataJson);
      })
      .catch(error => {
        console.error('Error in HTTP request', error); 
      });
  }, []);

  const COLOR_PLATE_10 = [
    '#5B8FF9',
    '#5AD8A6',
    '#5D7092',
    '#F6BD16',
    '#E8684A',
    '#6DC8EC',
    '#9270CA',
    '#FF9D4D',
    '#269A99',
    '#FF99C3',
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
      // 数值格式化为千分位
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
    height: 710,
    color: COLOR_PLATE_10,
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    legend: {
      position: 'right-top',
      flipPage: false,
    },
  };
  

  return (
    <div>
      <h1>Category Distribution</h1>
      <h4>GET request template</h4>
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Pie {...config} />
    </div>
  );
};

export default CategoryDistribution;
