import { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import csvParse from 'csv-parse';

type ChartData = {
  date: string;
  category: string;
  count: number;
};

type Props = {
  data: ChartData[];
};

const MyChart: React.FC<Props> = ({ data }) => {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    // Parse the CSV data and set the chartData state
    csvParse(
      data.map((d) => `${d.date},${d.category},${d.count}`).join('\n'),
      {
        columns: true,
        skip_empty_lines: true,
      },
      (err, output) => {
        if (err) {
          console.log(err);
        } else {
          setChartData(output);
        }
      }
    );
  }, [data]);

  // Render a line chart with lines for each category on a time series
  const config = {
    data: chartData,
    xField: 'date',
    yField: 'count',
    seriesField: 'category',
    color: ['#ff0000', '#00ff00', '#0000ff'],
  };

  return <Line {...config} />;
};

export default MyChart;