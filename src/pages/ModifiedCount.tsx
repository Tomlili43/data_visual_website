import { Column } from '@ant-design/plots';
import request from 'umi-request';
import React, { useState, useEffect } from 'react';
import data from './data/modified_count.json'

const ModifiedCount = () => {

/**
 * Data of format:
 * const data = [
    {
      "Date": "2010-01-01",
      "count": 1998
    },
    {
      "Date": "2010-01-08",
      "count": 1850
    },
    ...
  ]
 */

  // const [data, setData] = useState([]);

  // async function fetchData() {
  //   try {
  //     const response = await request('/api/totalProducts');
  //     const dataList = Object.values(response.list);
  //     const data = dataList[0]
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   async function getData() {
  //     const result = await fetchData();
  //     setData(result);
  //   }
  //   getData();
  // }, []);

  const config = {
    data,
    meta: {
      Date: {
        type: "time"
      },
    },
    xField: 'Date',
    yField: 'count',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      padding: 1000,
      title: {
        text: 'Modified Entries',
        style: {
          fontSize: 16,
          fontWeight: 'bold',
        }
      }
    },
    height: 780,
    slider: {
      start: 0,
      end: 1,
    },
    columnWidthRatio: 1,
  };

  return (
    <div>
      <h1>Modified Entries in Data Product Table Over Time (based on modified_datetime)</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Column {...config} />
    </div>
  );
};

export default ModifiedCount;
