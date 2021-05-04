const { PRODUCT: ActionTypeProduct } = require('./index');
const productGet = (data) => {
	return {
		type: ActionTypeProduct.GET_ALL_PRODUCT,
		payload: data,
	};
};
const productDelete = (id) => {
	return {
		type: ActionTypeProduct.DELETE_PRODUCT,
		payload: id,
	};
};
const productAdd = (data) => {
	console.log('data', data); // MongLV log fix bug
	return {
		type: ActionTypeProduct.ADD_PRODUCT,
		payload: data,
	};
};
const productEdit = (data) => {
	return {
		type: ActionTypeProduct.EDIT_PRODUCT,
		payload: data,
	};
};
export { productGet, productDelete, productAdd, productEdit };
