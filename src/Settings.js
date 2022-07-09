import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Button } from 'antd';
import MyBreadcrumb from './Breadcrumb'
import MyCards from './Cards'
import { EditOutlined, EllipsisOutlined, SettingOutlined, MoreOutlined, StarOutlined } from '@ant-design/icons';
import MyModal from './Modal';
import booking from './Images/booking.svg'
import setting from './Images/setting.svg'
import arrow from './Images/Arrow.svg'

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const { Header, Sider, Content, Footer } = Layout;

const items_menu = [
    getItem(<div className="menu_wrapper"> <img src={setting} /> <p> General </p> </div>, 'item1', null, [
    ]),
    getItem(<div className="menu_wrapper"> <img src={booking} /> <p> Vacation Manager </p> </div>, 'item2', null, [
        getItem(<p className="submenu_wrapper"> Leave Types </p>, 'child_item1'),
        getItem(<p className="submenu_wrapper"> Locations </p>, 'child_item2', null),
    ]),

];



const Settings = () => {
    const [arr, setArr] = useState("arr")

    const [screenSize, setSize] = useState(window.screen.width);
    const sizeChange = () => {
        if (screenSize != window.screen.width) {
            setSize(window.screen.width);
            setArr("arr")
        }
        else {
            setSize(62.7);
            
            setArr("reverse")
        }
    }
    //управление модальным окном создания новой локации 
   const handleCancelCreate = () => {
        setVisibleCreate(false);
    };

    const [visibleCreate, setVisibleCreate] = useState(false);

    const showModalCreate = () => {
        setVisibleCreate(true);
    };

    const [newCard, setNewCard] = useState({})

    const createNewCard = (x) => {
        setNewCard(x);
    }

    console.log(window.screen.width)
    return(
        <Layout>
            <Sider className="slider" width={240 / 1368 * screenSize} trigger={null} theme="light">  Settings
               
                <Menu items={items_menu} defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']} 
                    mode="inline" />
                
        </Sider>

        <Content
            className="site-layout"
           
            >
                <Button onClick={sizeChange} height={24} shape="circle">
                    <img className={arr} src={arrow} />
                </Button>
                <MyBreadcrumb />
               
            <div className="site-layout-background"
           
            >       <div>
                    <p className="title"> Locations </p>
                    <p className="description">
                        Create new users or update the existng users.
                        You can then set their permissons here too.
                        </p>
                        </div>
                    <Button type="primary" onClick={showModalCreate}>Create Location</Button>
            </div>

                
                <MyModal vision={visibleCreate} handleCancel={handleCancelCreate} createNewCard={createNewCard} />
                <MyCards newCard={newCard}/>
        </Content>
      
    </Layout>
    )
}
export default Settings


                              
               