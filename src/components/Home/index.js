import React, { useState } from 'react';
import { Table } from 'antd';
import { columns, data } from '../Data/dataSanPham';
// import PropTypes from 'prop-types';
//css
import style from './styles.module.css';
function Home() {
	return (
		<div className={style.form_table}>
			<div className={style.custom_btn}>
				<button className={style.btn_12}>
					<span>Click!</span>
					<span>Add</span>
				</button>
			</div>
			<Table columns={columns} dataSource={data} size="middle" className={style.table} />
		</div>
	);
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
