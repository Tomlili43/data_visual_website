import React, { useState } from 'react';
import { Input, Button, Table } from 'antd';
import { getSellerInfo108 } from '@/services/ant-design-pro/product';

const SellerSearch108: React.FC = () => {
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
      const response = await getSellerInfo108(inputValue);
      // Table 1: seller
      // Below lines move the productId field to the start
      const keyToMove1 = 'sellerId';
      const entries1 = Object.entries(response["data"]["seller"]);
      const index1 = entries1.findIndex(([key, value]) => key === keyToMove1);
      if (index1 > 0) {
        entries1.unshift(entries1.splice(index1, 1)[0]);
      }
      const reorderedObj1 = Object.fromEntries(entries1);

      const data_seller = reorderedObj1;
      setSearchResults1([data_seller]);
      // Define widths based on the length of the content
      const cols1 = Object.keys(data_seller).map((key) => {
        let maxLength = 0;
        const value = data_seller[key];
        if (value !== null && value !== undefined) {
          maxLength = `${value}`.length;
        }
        const width = Math.max(10, maxLength * 8);

        return {        
          title: key,
          dataIndex: key,
          key: key,
          textWrap: 'word-break',
          width: width,
        };

      })
      setColumns1(cols1);
      


      // Table 2: asin_basic_info
      const data_product = response["data"]["asin_basic_info"]
      // Move productId, year, and month to start
      const keysToMove2 = ['sellerId', 'productId'];
      for (let i = 0; i < data_product.length; i++) {
        let obj = data_product[i];
        const valuesToMove = {};
        for (const key of keysToMove2) {
          valuesToMove[key] = obj[key];
          delete obj[key];
        }
        obj = {...valuesToMove, ...obj};
        data_product[i] = obj;
      }
      setSearchResults2([data_product]);
      // Define widths based on the length of the content
      const cols2 = Object.keys(data_product[0]).map((key) => {
        let maxLength = 0;
        const value = data_product[0][key];
        if (value !== null && value !== undefined) {
          maxLength = `${value}`.length;
        }
        const width = Math.max(10, maxLength * 7);
        return {        
          title: key,
          dataIndex: key,
          key: key,
          textWrap: 'word-break',
          width: width,
        };
      })
      
      setColumns2(cols2);
      setInputStatus("");
    } catch (error) {
      // Handle error (currently just turns input box red, does not display any message)
      setInputStatus("error");
      console.error(error);
    }
  };
  
  return (
    <div>
      <Input
        placeholder="Enter Seller ID"
        value={inputValue}
        onChange={onInputChange}
        style={{ width: 200 }}
        status={inputStatus}
      />
      <Button type="primary" onClick={searchProducts}>
        Search
      </Button>
      
      <h3><br></br>Seller Information</h3>
      <Table dataSource={searchResults1} columns={columns1} rowKey="id" key="table1" scroll={{ x: 1000 }} bordered/>
      <h3><br></br>Product Information</h3>
      <Table dataSource={searchResults2[0]} columns={columns2} rowKey="productId" key="table2" scroll={{ x: 9000 }} pagination={{ pageSize: 3 }} bordered/>
    </div>
  );
};

export default SellerSearch108;