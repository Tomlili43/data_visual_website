import { Column } from '@ant-design/plots';
import request from 'umi-request';
import React, { useState, useEffect } from 'react';
import raw from './data/category_time_coverage.json';

const CategoryTimeCoverage = () => {
  // To create a new page update routes.ts and relevant locales
/** 
 * DESIRED FORMAT: 
 * type --> category in a string
 * values --> yyyy-MM-dd,yyyy-MM-dd in a string
  const data = [
    {
      type: 'abc',
      values: '1983-03-11,1989-09-28',
    },
    {
      type: 'def',
      values: '1983-03-11,1989-09-29',
    },
    {
      type: 'ghi',
      values: '1983-03-11,1989-09-30',
    }
  ];
*/


  // const [data, setData] = useState([]);

  // async function fetchData() {
  //   try {
  //     const response = await request('/api/companies');
  //     const dataList = Object.values(response.list) || [];
  //     const data = dataList[0].map(item => ({
  //       type: item.type,
  //       values: item.values.split(',').map(date => new Date(date)),
  //     }));
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //     return [];
  //   }
  // }

  // useEffect(() => {
  //   async function getData() {
  //     const result = await fetchData();
  //     setData(result);
  //   }
  //   getData();
  // }, []);

  const data = raw.map(item => ({
    type: item.type,
    values: item.timespan.split(',').map(date => new Date(date)),
  }));

  const config = {
    data,
    xField: 'type',
    yField: 'values',
    xAxis: {
      label: {
        autoRotate: true,
      }
    },
    yAxis: {
      min: 10000000000000,
      label: {
        formatter: (value) => new Date(parseInt(value)).toLocaleDateString(),
      },
    },
    isRange: true,
    label: {
      position: 'middle',
      layout: [
        {
          type: 'adjust-color',
        },
      ],
      content: (value) => (Math.abs(value['values'][1] - value['values'][0]) / (1000 * 60 * 60 * 24)) + " days",
    },
    height: 780,
    //color: COLOR_PLATE_10,
    tooltip: {
      fields: ['values'],
      formatter: (datum) => {
        const start = datum.values[0].toLocaleDateString();
        const end = datum.values[1].toLocaleDateString();
        return { name: 'Date Range', value: `${start} - ${end}` };
      },
    }
  };

  return (
    <div>
      <h1>Category Time Coverage</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Column {...config} />
    </div>
  );
};

export default CategoryTimeCoverage;
