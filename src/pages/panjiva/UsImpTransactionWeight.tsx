import { Line } from '@ant-design/plots';
import data from '../data/us_transaction_weight.json'

const USImpTransactionWeight = () => {
/**
 * Data of format:
 * [{"date": "2015-02", "Count": 2315, "category": "Appliances "}, 
 * {"date": "2015-02", "Count": 10333, "category": "Arts, Crafts & Sewing "}, 
 * {"date": "2015-02", "Count": 161673, "category": "Automotive "},
 * ...]
 * Ordered by month and then by category, order should not matter
 */


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
    xField: 'week',
    yField: 'weightkg',
    seriesField: 'year',
    xAxis: {
      title: {
        text: 'Week of the Year',
        style: {
          fontSize: 16,
          fontWeight: 'bold'
        },
      },
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      title: {
        text: 'US Import Transaction Weight (in kg)',
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
      selected: {
        '2007': false,
        '2008': false,
        '2009': false,
        '2010': false,
        '2011': false,
        '2012': false,
        '2013': false,
        '2014': false,
        '2015': false,
        '2016': false,
        '2017': false,
        '2018': false,
        '2019': false,
      }
    },
    smooth: true,
    point: {
      shape: 'circle',
    },
    tooltip: {
      title: (week) => {
        return 'Week ' + week;
      },
      formatter: (datum) => {
        return { 
          name: datum.year, 
          value: `${datum.weightkg}`.split('.')[0].replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        }
      },
      // formatter: (datum) => 'hi'//`${datum}`.split('.')[1] ,
    },
  };

  return (
    <div>
      <h1>US Import Transaction Weight by Week and Year</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      <Line {...config} />
    </div>
  );
};

export default USImpTransactionWeight;
