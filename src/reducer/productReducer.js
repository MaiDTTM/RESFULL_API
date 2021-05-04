import { PRODUCT as ActionTypeProduct } from '../action';

const productReducer = (state = [], action) => {
	switch (action.type) {
		case ActionTypeProduct.GET_ALL_PRODUCT:
			return action.payload;
		case ActionTypeProduct.DELETE_PRODUCT:
			const id = action.payload;
			const newState = state.filter((item) => item._id !== id);
			return newState;
		case ActionTypeProduct.ADD_PRODUCT:
			const newArr = [...state];
			newArr.push(action.payload);
			return newArr;
		case ActionTypeProduct.EDIT_PRODUCT:
			// Note: xử lý cập nhật 1 phần tử trong mảng
			const newArray = state.map((item) => {
				if (item._id === action.payload._id) {
					item = action.payload;
				}
				return item;
			});
			return newArray;
		default:
			return state;
	}
};
export default productReducer;
