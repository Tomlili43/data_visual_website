import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import { getVisualizationData } from '@/services/ant-design-pro/data';

const CategoryCountByMonth = () => {
const [data, setData] = useState([]);

const fetchData = async () => {
  try {
    const response = await getVisualizationData("uniqueProductsByMonth");
    const data = response["data"]
    setData(data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  fetchData();
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
    data,
    xField: 'date',
    yField: 'count',
    seriesField: 'category',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      title: {
        text: 'Product ASIN Count',
        style: {
          fontSize: 16,
          fontWeight: 'bold'
        }
      }
    },
    height: 780,
    color: COLOR_PLATE_10,
    slider: {
      start: 0,
      end: 1,
    },
    legend: {
      position: 'right-top',
      flipPage: false,
    },
  };

  return (
    <div>
      <h1>Unique Product ASIN by Month per Category with Non-Null Sales (from month_all)</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Line {...config} />
    </div>
  );
};

export default CategoryCountByMonth;
