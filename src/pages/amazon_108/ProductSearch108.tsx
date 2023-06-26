import React, { useState } from 'react';
import { Input, Button, Table } from 'antd';
import { getProductInfo108 } from '@/services/ant-design-pro/product';

const ProductSearch108: React.FC = () => {
  type Column = {
    title: string;
    dataIndex: string;
    key: string;
  };
  
  const [inputValue, setInputValue] = useState('');
  const [inputStatus, setInputStatus] = useState('');
  const [searchResults1, setSearchResults1] = useState([]);
  const [searchResults2, setSearchResults2] = useState([]);
  const [searchResults3, setSearchResults3] = useState([]);
  const [columns1, setColumns1] = useState<Column[]>([]);
  const [columns2, setColumns2] = useState<Column[]>([]);
  const [columns3, setColumns3] = useState<Column[]>([]);
  
  
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchProducts = async () => {
    try {
      const response = await getProductInfo108(inputValue);
      // Table 1: asin_basic_info
      // Below lines move the productId field to the start
      const keyToMove1 = 'productId';
      const entries1 = Object.entries(response["data"]["asin_basic_info"]);
      const index1 = entries1.findIndex(([key, value]) => key === keyToMove1);
      if (index1 > 0) {
        entries1.unshift(entries1.splice(index1, 1)[0]);
      }
      const reorderedObj1 = Object.fromEntries(entries1);

      const data_product = reorderedObj1;
      setSearchResults1([data_product]);
      // Define widths based on the length of the content
      const cols1 = Object.keys(data_product).map((key) => {
        let maxLength = 0;
        const value = data_product[key];
        if (value !== null && value !== undefined) {
          maxLength = `${value}`.length;
        }
        const width = Math.max(10, maxLength * 6);

        return {        
          title: key,
          dataIndex: key,
          key: key,
          textWrap: 'word-break',
          width: width,
        };

      })
      setColumns1(cols1);
      


      // Table 2: month_all
      const data_month = response["data"]["month_all"]
      // Move productId, year, and month to start
      const keysToMove2 = ['productId'];
      for (let i = 0; i < data_month.length; i++) {
        let obj = data_month[i];
        const valuesToMove = {};
        for (const key of keysToMove2) {
          valuesToMove[key] = obj[key];
          delete obj[key];
        }
        obj = {...valuesToMove, ...obj};
        data_month[i] = obj;
      }
      setSearchResults2([data_month]);
      // Define widths based on the length of the content
      const cols2 = Object.keys(data_month[0]).map((key) => {
        return {        
          title: key,
          dataIndex: key,
          key: key,
        };
      })
      
      setColumns2(cols2);



      // Table 3: month_all_js
      const data_month_js = response["data"]["month_all_js"]
      if (data_month_js !== "NotExist") {
        // Move productId, year, and month to start
        const keysToMove3 = ['sellerId','productId', 'year', 'month'];
        for (let i = 0; i < data_month_js.length; i++) {
          let obj = data_month_js[i];
          const valuesToMove = {};
          for (const key of keysToMove3) {
            valuesToMove[key] = obj[key];
            delete obj[key];
          }
          obj = {...valuesToMove, ...obj};
          data_month_js[i] = obj;
        }
        // Sorts the data by month and year
        // data_month.sort((a, b) => {
        //   if (a.year !== b.year) {
        //     return a.year - b.year;
        //   }
        //   return a.month - b.month;
        // });
        setSearchResults3([data_month_js]);
        const cols3 = Object.keys(data_month_js[0]).map((key) => ({
          title: key,
          dataIndex: key,
          key: key,
        }))
        setColumns3(cols3);
      }
      
      setInputStatus("");
    } catch (error) {
      // Handle error (turns input box red, does not display any message)
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
      <Table dataSource={searchResults1} columns={columns1} rowKey="id" key="table1" scroll={{ x: 8000 }} bordered/>
      <h3><br></br>Month Information</h3>
      <Table dataSource={searchResults2[0]} columns={columns2} rowKey="productId" key="table2" scroll={{ x: 800 }} pagination={{ pageSize: 5 }} bordered/>
      <h3><br></br>Month (js) Information</h3>
      <Table dataSource={searchResults3[0]} columns={columns3} rowKey={(record) => `${record.productId}${record.year}${record.month}`} key="table3" scroll={{ x: 2500 }}/>
    </div>
  );
};

export default ProductSearch108;