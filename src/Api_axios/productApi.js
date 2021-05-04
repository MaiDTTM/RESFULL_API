import axiosClient from './axiosClient';

const productApi = {
	// params yeu cau sau / vd : lay ra 10 ptu dau
	getAll(params) {
		const url = '/product';
		return axiosClient.get(url, { params });
	},
	get(id) {
		const url = `/product/${id}`;
		return axiosClient.get(url);
	},
	add(data) {
		const url = '/product';
		return axiosClient.post(url, data);
	},
	update(data) {
		const url = `/product/${data._id}`;
		return axiosClient.put(url, data);
	},
	delete(id) {
		const url = `/product/${id}`;
		return axiosClient.delete(url);
	},
};
export default productApi;
