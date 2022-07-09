import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import main_icon from './Images/mainIcon.svg'
import home from './Images/home.svg'
import settings from './Images/settings.svg'
import users from './Images/users.svg'
import folder from './Images/folder.svg'
import calendar from './Images/calendar.svg'
import avatar from './Images/Avatar.svg'
import bell from './Images/bell.svg'
import { Breadcrumb, Layout, Menu } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import Settings from "./Settings"



const App = () => {
   
   
    return (
        <div className="wrap">
            <div className="right_side">
                <img className="main_icon" src={main_icon} />
                <div className="mini_wrap">
                    <img src={home} />
                    <p> Dashboard </p>
                </div>
                <div className="mini_wrap">
                    <img src={users} />
                    <p> Users </p>
                </div>
                <div className="mini_wrap">
                    <img src={settings} />
                    <p> Settings</p>
                </div>
                <div className="mini_wrap">
                    <img src={folder} />
                    <p> P&L  </p>
                </div>
                <div className="mini_wrap">
                    <img src={calendar} />
                    <p> Vacation </p> 
                    <p> Manager </p>
                </div>
                <img className="bell" src={bell} />
                <img src={avatar} />
            </div>
            <Settings />
        </div>
);
}
export default App;