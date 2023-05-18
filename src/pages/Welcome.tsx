import { PageContainer, ProForm, ProFormText } from '@ant-design/pro-components';
import { Card, Col, Row } from 'antd';
import React from 'react';
import { submitForm } from './Service';
import { FormattedMessage, request } from 'umi';
const Welcome: React.FC = () => {
  // let response = submitForm();
  // console.log("responsetest");
  // console.log(response);
  return (
    <ProForm
      onFinish={async (values) => {
        console.log(values);
      }}
      request={async () => {           
        const { data} = await request('/monthAll/findByProductIdAndMonthAndYear', {
          method: 'POST',
          data: {
              "productId":"0000084034",
              "month":1,
              "year":2022
          },
        });
        return data;
      }}
    >
      <PageContainer>
        <Card
          title="前后端交互模板"
          style={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          <Row gutter={16}>
            <Col lg={6} md={12} sm={24}>
              <ProFormText
                label="产品ID"
                width="md"
                name="productId"
                rules={[{ required: false, message: '请输入公司名称' }]}
                placeholder="Please input the company_name."
              />
            </Col>
            <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
            </Col>
            <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
            </Col>
          </Row>
        </Card>
      </PageContainer>
    </ProForm>
  );
};

export default Welcome;
