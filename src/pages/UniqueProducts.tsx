import { Line } from '@ant-design/plots';
import data from './unique_products_by_month.json'

const UniqueProducts = () => {
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
    height: 700,
    color: COLOR_PLATE_10,
    
  };

  return (
    <div>
      <h1>Unique Product ASIN by Month per Category</h1>
      <Line {...config} />
    </div>
  );
};

export default UniqueProducts;
