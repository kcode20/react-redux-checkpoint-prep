import { combineReducers } from 'redux';

const initialState = [];
const ADD_ITEM_TO_REGISTRY='ADD_ITEM_TO_REGISTRY'

function registryItemsReducer (state = initialState, action){
	switch(action.type){
		case ADD_ITEM_TO_REGISTRY:
			return [...state, action.item]
		default:
    		return state;
	}
};

export default combineReducers({
	registryItems: registryItemsReducer,
})

