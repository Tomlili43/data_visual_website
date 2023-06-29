import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import { getVisualizationData } from '@/services/ant-design-pro/data';

const CategoryDistribution = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getVisualizationData("categoryCounts");
      const data = response["data"];
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
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
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
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Pie {...config} />
    </div>
  );
};

export default CategoryDistribution;
