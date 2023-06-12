import { Line } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';

const TotalProductByMonth = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config = {
    data,
    xField: 'Date',
    yField: 'scales',
    seriesField: 'category',
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
          //fontFamily: 'Times New Roman',
        }
      }
    },
    height: 780,
    //color: COLOR_PLATE_10,
    slider: {
      start: 0,
      end: 1,
    },
    lineStyle: {
      stroke: "purple"
    }
  };

  return (
    <div>
      <h1>Total Non-Null Product IDs per Month (temp data)</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Line {...config} />
    </div>
  );
};

export default TotalProductByMonth;
