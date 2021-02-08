import {configureStore, createSlice} from "@reduxjs/toolkit";

// // action을 정의
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// // reducer 생성, 인자-> 초기값, 액션에 대한 동작, swich구문으로 작성x
// // 새로운 state를 리턴하거나 state mutate 가능(백그라운드에서 툴킷과 Immer가 새로 state를 생성해줌)
// // action은 type과 payload만 가짐
// const reducer = createReducer([],{
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() }); // state mutate
//     },
//     [deleteToDo]: (state, action) =>
//         state.filter(toDo => toDo.id !== action.payload)    // 새로운 state를 리턴
// })

// reducer, 초기화, actions 자동으로 한번에 생성해줌
const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers:{
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() }); // state mutate
        },
        remove: (state, action) =>
        state.filter(toDo => toDo.id !== action.payload) 
    }
});

const store = configureStore({reducer: toDos.reducer});  // 미들웨어와 함께 store생성
// 크롬 개발자 도구에서 redux 상태 확인 가능


export const { add, remove } = toDos.actions;

export default store;
