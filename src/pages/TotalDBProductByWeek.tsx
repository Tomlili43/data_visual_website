import { Line } from '@ant-design/plots';
import request from 'umi-request';
import React, { useState, useEffect } from 'react';

const TotalDBProductByWeek = () => {

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
  Requirements: Date should be in increasing order and have equal increments (e.g. 2010-01-01, 2010-01-08, 2010-01-15) for chart to make sense
 */

  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await request('/api/totalProducts');
      const dataList = Object.values(response.list);
      const data = dataList[0]
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function getData() {
      const result = await fetchData();
      setData(result);
    }
    getData();
  }, []);

  const config = {
    data,
    xField: 'Date',
    yField: 'count',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      title: {
        text: 'Product ID Count',
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
  };

  return (
    <div>
      <h1>Total Product IDs in Data Product Table Over Time in Weeks (based on modified_datetime) (temp data)</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Line {...config} />
    </div>
  );
};

export default TotalDBProductByWeek;
