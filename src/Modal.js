import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import AlertNote from './AlertNote'
import { Button, Modal, Input, Checkbox, Select } from 'antd';
const { Option } = Select;

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [{ tag: "January", count: 31 }, { tag: "February", count: 29 }, { tag: "March", count: 31 }, { tag: "April", count: 30 }, { tag: "May", count: 31 },
{ tag: "June", count: 30 }, { tag: "July", count: 31 }, { tag: "August", count: 30 }, { tag: "September", count: 31 }, { tag: "October", count: 30 },
{ tag: "November", count: 30 }, { tag: "December", count: 31 }]

const timeZones = [{ city: "Vilnius", time: 2 }, { city: "Khartoum", time: 3 }, { city: "Nairobi", time: 3 }, { city: "Syowa", time: 3 },
    { city: "Baghdad", time: 3 }, { city: "Qatar", time: 3 }, { city: "Riyadh", time: 3 }, { city: "Minsk", time: 3 }]

const children = ["Julia Senko", "Aleksandr", "Jessica Monro"];



const MyModal = ({ vision, handleCancel, createNewCard}) => {

    const [selectMonth, setMonth] = useState(0)
    const [thisTimeZone, setTZ] = useState(timeZones.length - 1)
    const [card, setCard] = useState({country: "", arrAvs: [], def: false})
    const [noteVis, setVis] = useState(false);

    const notification = (e) => {
        if (e !== []) setVis(true)
        else setVis(false)
    }
   
    return (
        <Modal
            visible={vision}
            title="Create Location"
            onCancel={handleCancel}
            footer={[
               
                <Button key="back" onClick={handleCancel}>
                    Cancel
                </Button>,
                <Button key="submit" type="primary" loading={false} onClick={() => { createNewCard(card); handleCancel(); console.log("shiiit") }}>
                    Create
                </Button>,
            ]}
        >
            <Input placeholder="Location name" onChange={(e) => {
                console.log(e); setCard({
                    ...card, country: e.target.value
                })
            }} />
            <div className="week">
                <p> Workweek <span> * </span> </p>
                <Checkbox.Group options={weekDays} defaultValue={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']} />
            </div>
            <section className="which_year">
                <p> Leave Quota Reset Based On </p>
                <select >
                    <option> Accounting year </option>
                    <option> Use Employment Date </option>
                </select>
            </section>
            <div className="section_wrap">
                <section className="which_year">
                    <p> Fiscal Year Start </p>
                    <select onChange={(e) => setMonth(e.target.value)} >
                        {months.map((a, i) => <option value={i}> {a.tag} </option>)}
                    </select>
                </section>
                <select className="days">
                    {Array(months[selectMonth].count).fill().map((e, i) => <option> {i + 1} </option>)}
                </select>
            </div >
            <br/>
            <Checkbox.Group options={["No Brought Forward Expiry Date"]} defaultValue={["No Brought Forward Expiry Date"]} />
            <section className="which_year">
                <p> Week Starts On </p>
                <select defaultValue={["Monday"]}>
                    <option> Sunday </option>
                    <option> Monday </option>
                </select>
            </section>
            <section className="which_year timeZone">
                <p> Time Zone </p>
                <select onChange={(e) => setTZ(e.target.value)} >
                    {timeZones.map((a, i) => 
                        (thisTimeZone == i) ? <option selected value={i}> {`{GMT+0${a.time}:00} ${a.city}`} </option> :
                        <option value={i}> {`{GMT+0${a.time}:00} ${a.city}`} </option>
                    )}
                </select>
            </section>
            <Select
                mode="tags"
                size={"middle"}
                className="addUsers"
                tokenSeparators={[',']}
                onChange={(e) => setCard({ ...card, arrAvs: e.target.value.split(" ")})}
                placeholder="Add users"
                style={{
                    width: '100%', 
                }}
            >
                {children.map((c) => <Option key={c}> {c} </Option>)}
            </Select>
            <AlertNote vision={noteVis} />
            <Checkbox.Group className="checklocate" options={["Make This Location Default"]} onChange={(e) => setCard({
                ...card, def: true
            })} />
            <div className="finalNote"> Once you've created a Location, assign a <a>Leave Policy</a> to the Location, in
                order to enable Users to request Leave.  To assign a Leave Policy, go to 
                Location > Leave Policies > Assign Leave Policy.
            </div>
        </Modal>
    )

}

export default MyModal


    