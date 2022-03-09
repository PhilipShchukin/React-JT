import 'antd/dist/antd.css'
import {React} from 'react'
import { useState } from 'react';

import Tablee from './Table';
import { Row, Col, Slider } from "antd";

export const BP = () => {
  const [rows, setRows] = useState(10)
  return (
    <>
      <Row>
        <Col xs={24} md={{span: 12, offset: 6}}  >

          <Slider  min={1} max={20} defaultValue={rows} onChange={setRows}/>
          <Tablee rows= {rows} />
        </Col>
      </Row>
    </>
  );
};


