import React, { useState } from 'react'
import { Input, Table } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import { getData } from '../redux/action/action';


function University() {
    let dispatch = useDispatch()
    const university = useSelector(state => state)

    const { Search } = Input;

    const onSearch = (name) => {
        dispatch(getData(name));
    };
    const [loading, setloading] = useState(false)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Alpha To Code',
            dataIndex: 'alpha_two_code',
            key: 'alpha_two_code',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
    ];

    return (
        <>
            <Search placeholder="Seacrh..." onSearch={onSearch} enterButton style={{ width: 300, marginLeft: 700, marginBlock: 40 }} />
            {
                loading ? <h1>Loading...</h1> : <Table columns={columns} dataSource={university.data} style={{ paddingLeft: 50, paddingRight: 50 }} key={university.id} />
            }
        </>
    )
}

export default University