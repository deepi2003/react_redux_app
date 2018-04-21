const initialState = [
    {
        name:'user 1'
    },
    {
      name: 'user 2'
    }
];


const formReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'USER_SAVED':{
            const newUser = {name: action.payload};
            const newState = Array.from(state);
            newState.push(newUser);
            return newState;
        }
        default:
            return state;
    }
};
export default formReducer;
