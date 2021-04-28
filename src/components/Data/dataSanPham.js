import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
//css
import style from './styles.module.css';
export const columns = [
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
		render: () => (
			<div className={style.action}>
				<EditOutlined className={style.item_action} />
				<DeleteOutlined className={style.item_action} />
			</div>
		),
	},
];
export const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
];
