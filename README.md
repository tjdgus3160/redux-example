# Vanilla Redux example

설치

    yarn add redux

action type 변수 선언

    const ADD = "ADD";
    const DELETE = "DELETE";

reducer : data를 조작할 수 있는 유일한 함수, return값은 data(state), reducer는 항상 새로운 state를 반환해야함

    const countModifier = (count = 0, action) => {
      switch (action.type){
        case ADD:
          return count + 1;
        case MINUS:
          return count - 1;
        default:
          return count;
      }
    };

redux store 생성

    store = createStore(reducer)

이와 같은 방식으로 dispatch로 action 메시지를 보냄,action은 객체면서 무조건 type 속성이 있어야함

    store.dispatch({type:"ADD"})

data가 변화할때마다 자동 호출

    store.subscribe(callback)

redux store data에 접근

    store.getState()

# React Redux example

설치

    yarn add react-redux

기본 동작은 redux와 동일
store.js에서 아래와 같이 동작을 하나로 묶에 모듈화

    export const actionCreators = {
        addToDo,
        deleteToDo
    };
    
index.js에서 다음과 같이 Provider로 묶에서 전달

    <Provider store={store}>
        <App />
    </Provider>
    
state는 redux store에서 불러온 값
return 객체는 현재 객제의 Props에 추가됌
이후 현재 객체에서 redux값을 사용할 수 있음

    function  mapStateToProps(state, ownProps) { 
        return {toDos: state};          
    }           
                        
위과 같이 dispatch함수 직접 구현 가능

    function mapDispatchToProps(dispatch, ownProps) {
        return {
            addToDo: (text) => dispatch(actionCreators.addToDo(text))
        };
    }

connect(redux store에서 state를 불러옴)

    export default connect(mapStateToProps, mapDispatchToProps)(Home);
    
# Redux toolkit

설치

    yarn add @reduxjs/toolkit

설치

    yarn add redux-devtools-extension

action을 정의

    const addToDo = createAction("ADD");
    const deleteToDo = createAction("DELETE");

reducer 생성, 인자-> 초기값, 액션에 대한 동작, swich구문으로 작성x
새로운 state를 리턴하거나 state mutate 가능(백그라운드에서 툴킷과 Immer가 새로 state를 생성해줌)
action은 type과 payload만 가짐

    const reducer = createReducer([],{
        [addToDo]: (state, action) => {
            state.push({ text: action.payload, id: Date.now() }); // state mutate
        },
        [deleteToDo]: (state, action) =>
            state.filter(toDo => toDo.id !== action.payload)    // 새로운 state를 리턴
    })

크롬 개발자 도구에서 redux 상태 확인 가능, 미들웨어와 함께 store생성

    const store = configureStore({reducer});

reducer, 초기화, actions 자동으로 한번에 생성해줌

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

Slice를 통한 redux store생성

    const store = configureStore({reducer: toDos.reducer});