import { Column, Scatter } from '@ant-design/plots';
import { Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';
import React, { useState, useEffect } from 'react';
import { getVisualizationData } from '@/services/ant-design-pro/data';

const { Title, Text } = Typography;

const ModifiedCount = () => {

  const [dataMonth, setDataMonth] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [seller, setSeller] = useState([]);
  const [sellerProduct, setSellerProduct] = useState([]);
  const [aggProductAverageAndSum, setAggProductAverageAndSum] = useState([]);
  const [aggSellerAverageAndSum, setAggSellerAverageAndSum] = useState([]);

  const [dataMonthTime, setDataMonthTime] = useState("");
  const [dataProductTime, setDataProductTime] = useState("");
  const [sellerTime, setSellerTime] = useState("");
  const [sellerProductTime, setSellerProductTime] = useState("");
  const [aggProductAverageAndSumTime, setAggProductAverageAndSumTime] = useState("");
  const [aggSellerAverageAndSumTime, setAggSellerAverageAndSumTime] = useState("");

  const fetchData = async () => {
    try {
      const responseDataMonth = (await getVisualizationData("modifiedCountDataMonthPb"))["data"];
      setDataMonth(responseDataMonth);
      const responseDataProduct = (await getVisualizationData("modifiedCountDataProductPb"))["data"];
      setDataProduct(responseDataProduct);
      const responseSeller = (await getVisualizationData("modifiedCountSellerPb"))["data"];
      setSeller(responseSeller);
      const responseSellerProduct = (await getVisualizationData("modifiedCountSellerProductsPb"))["data"];
      setSellerProduct(responseSellerProduct);
      const responseAggProductAverageAndSum = (await getVisualizationData("modifiedCountAggProductAverageAndSumPb"))["data"];
      setAggProductAverageAndSum(responseAggProductAverageAndSum);
      const responseAggSellerAverageAndSum = (await getVisualizationData("modifiedCountAggSellerAverageAndSumPb"))["data"];
      setAggSellerAverageAndSum(responseAggSellerAverageAndSum);

      const responseModifiedTimes = (await getVisualizationData("modifiedTimesPb"))["data"];
      setDataMonthTime(responseModifiedTimes[2]["datetime"]);
      setDataProductTime(responseModifiedTimes[3]["datetime"]);
      setSellerTime(responseModifiedTimes[4]["datetime"]);
      setSellerProductTime(responseModifiedTimes[5]["datetime"]);
      setAggProductAverageAndSumTime(responseModifiedTimes[0]["datetime"]);
      setAggSellerAverageAndSumTime(responseModifiedTimes[1]["datetime"]);


    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const config = {
    meta: {
      date: {
        type: "time"
      },
    },
    xField: 'date',
    yField: 'count',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
      title: {
        text: 'Modified Entries',
        style: {
          fontSize: 16,
          fontWeight: 'bold',
        }
      }
    },
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      fill: '#5B8FF9',
    },
    size: 6,
    height: 700,
    slider: {
      start: 0,
      end: 1,
    },
    columnWidthRatio: 1,
  };

  const configDataMonth = {
    ...config,
    data: dataMonth,
  };
  
  const configDataProduct = {
    ...config,
    data: dataProduct,
  };
  
  const configSeller = {
    ...config,
    data: seller,
  };
  
  const configSellerProduct = {
    ...config,
    data: sellerProduct,
  };
  
  const configAggProductAverageAndSum = {
    ...config,
    data: aggProductAverageAndSum,
  };
  
  const configAggSellerAverageAndSum = {
    ...config,
    data: aggSellerAverageAndSum,
  };


  const items: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <span>
          <Title level={4}>Data Product</Title>
          <Text type="secondary">{dataProductTime}</Text>
        </span>
        ),
      children: <Scatter {...configDataProduct} />
    },
    {
      key: '2',
      label: (
        <span>
          <Title level={4}>Data Month</Title>
          <Text type="secondary">{dataMonthTime}</Text>
        </span>
        ),
      children: <Scatter {...configDataMonth} />
    },
    {
      key: '3',
      label: (
        <span>
          <Title level={4}>Seller</Title>
          <Text type="secondary">{sellerTime}</Text>        </span>
        ),
      children: <Scatter {...configSeller} />
    },
    {
      key: '4',
      label: (
        <span>
          <Title level={4}>Seller Products</Title>
          <Text type="secondary">{sellerProductTime}</Text>        </span>
        ),
      children: <Scatter {...configSellerProduct} />
    },
    {
      key: '5',
      label: (
        <span>
          <Title level={4}>Agg Product Average and Sum</Title>
          <Text type="secondary">{aggProductAverageAndSumTime}</Text>        </span>
        ),
      children: <Scatter {...configAggProductAverageAndSum} />
    },
    {
      key: '6',
      label: (
        <span>
          <Title level={4}>Agg Seller Average and Sum</Title>
          <Text type="secondary">{aggSellerAverageAndSumTime}</Text>        </span>
        ),
      children: <Scatter {...configAggSellerAverageAndSum} />
    },
  ];

  return (
    <div>
      <h1>Modified Entries Tables Over Time (based on modified_datetime)</h1> 
      <h4 style={{textAlign: 'right', fontWeight: 'normal' }}>by Derek Zheng</h4>
      
      <br></br>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default ModifiedCount;
