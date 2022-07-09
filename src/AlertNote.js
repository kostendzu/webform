import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { WarningOutlined } from '@ant-design/icons'

const AlertNote = ({ vision }) => {



    return (
        <div className={ vision ? "alertNote" : "invisible"}>
            <WarningOutlined />
            <div> Adding or removing a user might impact the user's
                configuration and leave information
                (e.g. the initial brought forward days).
            </div>
        </div>
        )

}

export default AlertNote