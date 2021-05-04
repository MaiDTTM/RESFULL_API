import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Popconfirm,message} from 'antd';
//css
import style from './styles.module.css';
const text = 'Are you sure to delete this task?'
import React from 'react';
// import PropTypes from 'prop-types';

function useColumns() {
    return [
			{
				title: 'Name',
				dataIndex: 'name',
				width: 300,
			},
			{
				title: 'Price',
				dataIndex: 'price',
				width: 100,
			},
			{
				title: 'Amount',
				dataIndex: 'amount',
				width: 100,
			},
			{
				title: 'Status',
				dataIndex: 'status',
				width: 300,
			},
			{
				title: 'Action',
				dataIndex: 'action',
				render: (_, record) => {
					const confirm = (id) => {
						console.log('item', id);
					}
					return (
						<div className={style.action}>
							<EditOutlined className={style.item_action} />
							<Popconfirm placement="top" title={text} onConfirm={()=>{confirm(record._id)}} okText="Yes" cancelText="No">
								<DeleteOutlined className={style.item_action} />
							</Popconfirm>
						</div>
					)
				},
			},
		];
}

useColumns.propTypes = {};

useColumns.defaultProps = {};

export default useColumns;
