// JavaScript source code
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import av3 from './Images/av3.svg'
import av2 from './Images/av2.png'
import av4 from './Images/av4.png'
import hm from './Images/hm.png'
import bs from './Images/bs.png'
import bucket from './Images/bucket.svg'
import pen from './Images/pen.svg'
import star from './Images/star.svg'
import { MoreOutlined, StarOutlined  } from '@ant-design/icons';
import { Avatar, Card, Popover, Menu } from 'antd';
import DeleteCard from './DeleteCard';
import ChangeDef from './ChangeDef';
const { Meta } = Card;


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const MyCards = ({ newCard }) => {
    let x = 6;
    //управление модальным окном удаления карточки локации
   
    const [visibleDelete, setVisibleDelete] = useState(false);
    const [def, setDef] = useState(false);

    const setDefault = () => {
        setDef(!def);
    }

    const handleCancelDelete = () => {
        setVisibleDelete(false);
    };

    const showModalDelete = () => {
        setVisibleDelete(true);
    };
   //

    const [arrCardMeta, setACM] = useState([{ country: "Australia", arrAvs: [av2, bs, av3, av2, av4,hm, av3, "+6"], def: true },
        { country: "Belarus", arrAvs: [av2, bs, av3, av2, hm], def: false },
        { country: "USA", arrAvs: [av2, bs, av3, av2, av4, hm, , "+76"], def: false },
        { country: "Canada", arrAvs: [bs, av4], def: false }
    ]);

    const items_list = [
        getItem(<div className="popup_menu"> <img src={pen} /> <p> Edit </p> </div>, 'check1', null, []),
        getItem(<div className="popup_menu"> <img src={star} /><p> Set as Default </p ></div>, 'check2', null, []),
        getItem(<div className="popup_menu"> <img src={bucket} /><p onClick={() => { showModalDelete() }}> Delete </p> </div>, 'check3', null, []),
    ];


    const content = (
        <Menu items={items_list} >
        </Menu>
    );

    useEffect(() => { if (newCard.def !== undefined) setChanges(newCard); console.log(newCard) }, [newCard])

    const setChanges = (x) => {
        setACM([...arrCardMeta, x]);
        console.log(arrCardMeta);
    }

    const deleteCard = (x) => {
        setACM(arrCardMeta.filter((a) => a.country != x.country))
    }



    const changeDefault = (x) => {
        setACM(arrCardMeta.map((a) => a.def = (a.country === x.country) ? true : false ))
    }

    return (
        <div className="arrCards">
            {arrCardMeta.map((a) =>
                <Card
                    actions={[a.def ?
                        <> </>
                        :
                        <Popover content={content} title="Title" trigger="click">
                            <MoreOutlined key="ellipsis" />
                            <ChangeDef setDefault={setDefault} changeDefault={changeDefault} card={a} def={def} />
                        </Popover>
                        

                    ]}>
                    <Meta
                        avatar={[a.arrAvs.map((a, index, arr) => 
                            (index < 7 && a != null) ? <Avatar src={a} /> : <> </>),
                            a.arrAvs.length > 6 ? <div> {a.arrAvs[a.arrAvs.length - 1]} </div> : <> </>]}

                        title={(a.def) ? <div className="card_contain"> <p> {a.country} </p>
                            < div className="defTag"> default </div> </div> : <p className="card_contain"> {a.country} </p>}

                        description={<table className="cardDescp"><tr><td>Holidays</td>   <td><a>View Holidays</a></td></tr>
                            <tr><td>Leave Policies </td>   <td><a>View Leave Policies</a></td></tr></table>}
                    />
                    <DeleteCard card={a} handleCancel={handleCancelDelete} vision={visibleDelete} deleteCard={deleteCard} />
                </Card>)}
        </div>
    )
}
    export default MyCards