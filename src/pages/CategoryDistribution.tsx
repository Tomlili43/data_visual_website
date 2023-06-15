import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';
import data from './data/Category_Counts.json';

const CategoryDistribution = () => {
  // const data = [
  //   { type: 'Arts, Crafts & Sewing', value: 269421 },
  //   { type: 'Automotive', value: 1499869 },
  //   { type: 'Baby Products', value: 127057 },
  //   { type: 'Beauty & Personal Care', value: 354498 },
  //   { type: 'CDs & Vinyl', value: 55375 },
  //   { type: 'Cell Phones & Accessories', value: 64738 },
  //   { type: 'Clothing, Shoes & Jewelry', value: 1193970 },
  //   { type: 'Electronics', value: 274621 },
  //   { type: 'Grocery & Gourmet Food', value: 93750 },
  //   { type: 'Health & Household', value: 251823 },
  //   { type: 'Home & Kitchen', value: 3074730 },
  //   { type: 'Industrial & Scientific', value: 368117 },
  //   { type: 'Office Products', value: 189233 },
  //   { type: 'Patio, Lawn & Garden', value: 212527 },
  //   { type: 'Pet Supplies', value: 205071 },
  //   { type: 'Sports & Outdoors', value: 653457 },
  //   { type: 'Tools & Home Improvement', value: 1179638 },
  //   { type: 'Toys & Games', value: 490157 },
  //   { type: 'Video Games', value: 60709 },
  //   { type: 'No Category', value: 444058 }
  //   //... maybe only want the largest 20?
  // ];

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
