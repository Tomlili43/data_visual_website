import { Column } from '@ant-design/plots';
import React, { useState, useEffect } from 'react';
import { getVisualizationData } from '@/services/ant-design-pro/data';

const CategoryTimeCoverage = () => {
  // To create a new page update routes.ts and relevant locales
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getVisualizationData("categoryTimeCoverage");
      const raw = response["data"]
      const data = raw.map(item => ({
        type: item.type,
        values: item.timespan.split(',').map(date => new Date(date)),
      }));
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
      <h1>Category Time Coverage (defined by over 20% coverage at start and end dates)</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Column {...config} />
    </div>
  );
};

export default CategoryTimeCoverage;
