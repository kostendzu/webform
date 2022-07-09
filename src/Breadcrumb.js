import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Breadcrumb } from 'antd';
import settings from './Images/settings.svg'
import shape from './Images/Shape.svg'

const MyBreadcrumb = () => {

    return (
        <Breadcrumb separator=">" className="mybreadcrumb">
            <Breadcrumb.Item> <> <img src={settings} /> Settings </> </Breadcrumb.Item>
            <Breadcrumb.Item> Vocation Manager  </Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default MyBreadcrumb