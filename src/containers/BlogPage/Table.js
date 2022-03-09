import { Table,Typography } from "antd";
import { dataSource } from './Data';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Classification',
        dataIndex: 'classification',
        key: 'classification',
        filters: [
            {
                text: 'Predator',
                value: 'Predator'
            },
            {
                text: 'Herbivorous',
                value: 'Herbivorous'
            },
            {
                text: 'Omnivores',
                value: 'Omnivores'
            }
        ],
        onFilter: (value, item) => item.classification.includes(value)
    },
    {
        title: 'Rate',
        dataIndex: 'fleeRate',
        key: 'fleeRate',
        sorter: (a,b) => a.fleeRate - b.fleeRate,
    },
]


const DS = dataSource.map(item => ({...item, key: item.id}))

const T = ({rows=10}) => {
    return (
        <Table
            dataSource={DS}
            columns={columns}
            pagination={{
                pageSize: rows,
            }}
        />
    )
}
export default T;



  

  
