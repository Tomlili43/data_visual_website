import { Column } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';
import { getModifiedCount } from '@/services/ant-design-pro/data';

const ModifiedCount = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getModifiedCount();
      const data = response["modified_count"]
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
