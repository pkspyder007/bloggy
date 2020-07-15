import React from 'react'
import { Layout } from 'antd';

const {Footer} = Layout

export default function FooterCustom() {
  return (
      <Footer >
        <p style={{textAlign:'center'}}>
          Continuum &copy; Copyright 2020
        </p>
      </Footer>
  )
}
