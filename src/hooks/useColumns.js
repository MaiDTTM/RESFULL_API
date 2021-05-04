import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Popconfirm, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

//css
import style from './styles.module.css';
const text = 'Are you sure to delete this task?';

// import PropTypes from 'prop-types';

function useColumns(props) {
	const { nameStore, handleDidMount, columnsTable, actionDelete } = props;
	const dispatch = useDispatch();

	// state
	const [visibleEdit, setVisibleEdit] = React.useState(false);
	const [item, setItem] = React.useState(null);

	// selector
	const data = useSelector((state) => state[nameStore]);

	// handle
	const handleDelete = (id) => {
		actionDelete && actionDelete(id);
	};

	const handleEdit = (item) => {
		setVisibleEdit(!visibleEdit);
		setItem(item);
	};

	// vòng đời
	React.useEffect(() => {
		handleDidMount && handleDidMount();
	}, []);
	return {
		data,
		visibleEdit,
		setVisibleEdit,
		item,
		columns: [
			...columnsTable,
			{
				title: 'Action',
				dataIndex: 'action',
				render: (_, record) => {
					return (
						<div className={style.action}>
							<EditOutlined
								onClick={() => handleEdit(record)}
								className={style.item_action}
							/>
							<Popconfirm
								placement="top"
								title={text}
								onConfirm={() => {
									handleDelete(record._id);
								}}
								okText="Yes"
								cancelText="No"
							>
								<DeleteOutlined className={style.item_action} />
							</Popconfirm>
						</div>
					);
				},
			},
		],
	};
}

useColumns.propTypes = {};

useColumns.defaultProps = {};

export default useColumns;
