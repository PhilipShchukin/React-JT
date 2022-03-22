import { Table,Typography } from "antd";
import React from 'react';

import { useEffect, useState } from 'react';

const columns = [
    {
        title: '№',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
        title: 'Событие',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Описание',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Дата',
        dataIndex: 'date',
        key: 'date',
        sorter: (a,b) => a.date - b.date,
    },
]


const P = ({ rows = 10 }) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/events`)
            .then(res => res.json())
            .then(res => setEvents(res.map(item => ({...item, key: item.id}))));
    }, []);
    return (
        <Table
            dataSource={events}
            columns={columns}
            pagination={{
                pageSize: rows,
            }}
        />
    )
}
export default P;