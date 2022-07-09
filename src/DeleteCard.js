import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import AlertNote from './AlertNote'
import { Button, Modal, Input, Checkbox, Select } from 'antd';
import { WarningOutlined } from '@ant-design/icons'

const { Option } = Select;


const DeleteCard = ({ vision, handleCancel, deleteCard, card }) => {

    return (
        <Modal
            visible={vision}
            title="Delete Location"
            onCancel={handleCancel}
            footer={[
                <Button className="redButton" key="submit" type="primary" loading={false} onClick={() => { deleteCard(card); handleCancel() }}>
                   Yes, Delete
                </Button>
            ]}
        >
            <p> Are you sure want to delete "{card.country}" Location? </p>
            <div className="alertNote">
                <WarningOutlined />
                <div>
                      Deleting a location might impact the users' configuration
                      and leave information (e.g. the initial brought forward days).
                </div>
            </div>

        </Modal>
    )

}

export default DeleteCard