import React, { useState } from 'react';
import { Table, Modal, Form, Input, InputNumber, Select, Button, message } from 'antd';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// hooks
import useColumns from '../../hooks/useColumns';

// api
import productApi from '../../Api_axios/productApi';

// action type
import {
	productGet,
	productDelete,
	productAdd,
	productEdit,
} from '../../action/actionTypeProduct';

//css
import style from './styles.module.css';
const columnsTable = [
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
];
const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const validateMessages = {
	required: '${label} is required!',
	types: {
		name: '${label} is not a valid email!',
		status: '${label} is not a valid number!',
	},
	number: {
		price: '${label} must be between ${min} and ${max}',
		amount: '${label} must be between ${min} and ${max}',
	},
};
function Home() {
	const [form] = Form.useForm();
	const [form2] = Form.useForm();
	const dispatch = useDispatch();
	const [modal2Visible, setModal2Visible] = useState(false);
	const setModalVisible = (modal2Visible) => {
		setModal2Visible(modal2Visible);
	};
	// handle api
	const apiProduct = async () => {
		const test = await productApi.getAll();
		const newArr = Object.values(test);
		const action = productGet(newArr);
		dispatch(action);
	};
	const apiDeleteProduct = async (id) => {
		const response = await productApi.delete(id);
		const { message } = response;
		const action = productDelete(id);
		message === 'Xóa sản phẩm thành công!' ? dispatch(action) : alert('lỗi rồi');
	};
	// hooks
	const { data, columns, item, visibleEdit, setVisibleEdit } = useColumns({
		nameStore: 'product',
		handleDidMount: apiProduct,
		columnsTable,
		actionDelete: apiDeleteProduct,
	});

	const onFinish = async (values) => {
		const response = await productApi.add(values);
		//them phan tu id vao value
		response['id'] && (values['_id'] = response['id']);
		const action = productAdd(values);
		await setModal2Visible(false);
		response['message'] === 'Thêm sản phẩm thành công!'
			? dispatch(action)
			: message.warn(response['message']);
	};
	const onFinishEdit = async (values) => {
		values['_id'] = item['_id'];
		const response = await productApi.update(values);
		const action = productEdit(values);
		await setVisibleEdit(false);
		response['message'] === 'Sửa thông tin sản phẩm thành công !'
			? dispatch(action)
			: message.warn(response['message']);
	};

	const onReset = () => {
		form.resetFields();
		form2.resetFields();
	};
	React.useEffect(() => {
		visibleEdit &&
			form2.setFieldsValue({
				name: item.name,
				price: item.price,
				amount: item.amount,
				status: item.status,
			});
	}, [visibleEdit]);

	return (
		<div className={style.form_table}>
			<div className={style.custom_btn}>
				<button className={style.btn_12} onClick={() => setModalVisible(true)}>
					<span>Click!</span>
					<span>Add</span>
				</button>
				<Modal
					title="SỬA SẢN PHẨM"
					centered
					visible={visibleEdit}
					footer={null}
					onCancel={() => setVisibleEdit(false)}
				>
					<Form
						{...layout}
						name="nest-messages"
						form={form2}
						onFinish={onFinishEdit}
						validateMessages={validateMessages}
					>
						<Form.Item name="name" label="Name" rules={[{ required: true }]}>
							<Input />
						</Form.Item>
						<Form.Item name="price" label="Price" rules={[{ type: 'number', min: 0 }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item name="amount" label="Amount" rules={[{ type: 'number', min: 0 }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item name="status" label="Status" rules={[{ required: true }]}>
							<Select>
								<Select.Option value="con">Còn hàng</Select.Option>
								<Select.Option value="het">Hết hàng</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
							<Button onClick={onReset} style={{ marginRight: '15px' }}>
								Reset
							</Button>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
				<Modal
					title="THÊM SẢN PHẨM"
					centered
					visible={modal2Visible}
					footer={null}
					onCancel={() => setModalVisible(false)}
				>
					<Form
						{...layout}
						name="nest-messages"
						form={form}
						onFinish={onFinish}
						validateMessages={validateMessages}
					>
						<Form.Item name="name" label="Name" rules={[{ required: true }]}>
							<Input />
						</Form.Item>
						<Form.Item name="price" label="Price" rules={[{ type: 'number', min: 0 }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item name="amount" label="Amount" rules={[{ type: 'number', min: 0 }]}>
							<InputNumber />
						</Form.Item>
						<Form.Item name="status" label="Status" rules={[{ required: true }]}>
							<Select>
								<Select.Option value="Còn hàng">Còn hàng</Select.Option>
								<Select.Option value="Hết hàng">Hết hàng</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
							<Button onClick={onReset} style={{ marginRight: '15px' }}>
								Reset
							</Button>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</div>
			<Table columns={columns} dataSource={data} size="middle" className={style.table} />
		</div>
	);
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
