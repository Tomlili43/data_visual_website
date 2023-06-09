import { Line } from '@ant-design/plots';
import data from './data/unique_products_by_month.json'

const NewPage = () => {
  // To create a new page update routes.ts and relevant locales
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
    yField: 'Count',
    seriesField: 'category',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
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
      <h1>Unique Product ASIN by Month per Category</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Line {...config} />
    </div>
  );
};

export default NewPage;