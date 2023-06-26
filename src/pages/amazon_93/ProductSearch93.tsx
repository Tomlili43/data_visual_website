import React, { useState } from 'react';
import { Input, Button, Table } from 'antd';
import { getProductInfo93 } from '@/services/ant-design-pro/product';

const ProductSearch93: React.FC = () => {
  type Column = {
    title: string;
    dataIndex: string;
    key: string;
  };
  
  const [inputValue, setInputValue] = useState('');
  const [inputStatus, setInputStatus] = useState('');
  const [searchResults1, setSearchResults1] = useState([]);
  const [searchResults2, setSearchResults2] = useState([]);
  const [columns1, setColumns1] = useState<Column[]>([]);
  const [columns2, setColumns2] = useState<Column[]>([]);
  
  
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchProducts = async () => {
    try {
      const response = await getProductInfo93(inputValue);
      // Below lines move the productId field to the start
      const keyToMove = 'productId';
      const entries = Object.entries(response["data"]["data_product"][0]);
      const index = entries.findIndex(([key, value]) => key === keyToMove);
      if (index > 0) {
        entries.unshift(entries.splice(index, 1)[0]);
      }
      const reorderedObj = Object.fromEntries(entries);

      const data_product = reorderedObj;
      setSearchResults1([data_product]);
      // Define widths based on the length of the content
      const cols1 = Object.keys(data_product).map((key) => {
        let maxLength = 0;
        const value = data_product[key];
        if (value !== null && value !== undefined) {
          maxLength = `${value}`.length;
        }
        const width = Math.max(100, Math.sqrt(maxLength) * 20);

        return {        
          title: key,
          dataIndex: key,
          key: key,
          textWrap: 'word-break',
          width: width,
        };

      })
      setColumns1(cols1);
      
      const data_month = response["data"]["data_month"]
      // Move productId, year, and month to start
      const keysToMove = ['productId', 'year', 'month'];
      for (let i = 0; i < data_month.length; i++) {
        let obj = data_month[i];
        const valuesToMove = {};
        for (const key of keysToMove) {
          valuesToMove[key] = obj[key];
          delete obj[key];
        }
        obj = {...valuesToMove, ...obj};
        data_month[i] = obj;
      }
      // Sorts the data by month and year
      data_month.sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        }
        return a.month - b.month;
      });
      setSearchResults2([data_month]);
      console.log(data_month[0])
      const cols2 = Object.keys(data_month[0]).map((key) => ({
        title: key,
        dataIndex: key,
        key: key,
      }))
      setColumns2(cols2);
      setInputStatus("");
    } catch (error) {
      // Handle error 
      setInputStatus("error");
      console.error(error);
    }
  };
  
  return (
    <div>
      <Input
        placeholder="Enter Product ID"
        value={inputValue}
        onChange={onInputChange}
        style={{ width: 200 }}
        status={inputStatus}
      />
      <Button type="primary" onClick={searchProducts}>
        Search
      </Button>
      
      <h3><br></br>Product Information</h3>
      <Table dataSource={searchResults1} columns={columns1} rowKey="productId" key="table1" scroll={{ x: 4000 }} bordered/>
      <h3><br></br>Sales Information</h3>
      <Table dataSource={searchResults2[0]} columns={columns2} rowKey={(record) => `${record.year}${record.month}`} key="table2" scroll={{ x: 2500 }}/>
    </div>
  );
};

export default ProductSearch93;