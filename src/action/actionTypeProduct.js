const { PRODUCT } = require('./index');
export const productAction = (data) => {
	return {
		type: PRODUCT.GET_ALL_PRODUCT,
		payload: data,
	};
};
