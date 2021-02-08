# Vanilla Redux example

설치

    yarn add redux

action type 변수 선언

reducer : data를 조작할 수 있는 유일한 함수, return값은 data(state), reducer는 항상 새로운 state를 반환해야함

store = createStore(reducer) : redux store 생성

.dispatch({type:"ADD"}) : 이와 같은 방식으로 dispatch로 action 메시지를 보냄,action은 객체면서 무조건 type 속성이 있어야함

.subscribe(callback) : data가 변화할때마다 자동 호출

.getState() : redux store data에 접근

# React Redux example

설치

    yarn add react-redux

기본 동작은 redux와 동일

    export const actionCreators = {
        addToDo,
        deleteToDo
    };
    
다음과 같이 동작을 하나로 묶에 모듈화

    <Provider store={store}>
        <App />
    </Provider>
    
index.js에서 다음과 같이 Provider로 묶에서 전달

    function  mapStateToProps(state, ownProps) { 
        return {toDos: state};          
    }           
                        
state는 redux store에서 불러온 값
return 객체는 현재 객제의 Props에 추가됌
이후 현재 객체에서 redux값을 사용할 수 있음

    function mapDispatchToProps(dispatch, ownProps) {
        return {
            addToDo: (text) => dispatch(actionCreators.addToDo(text))
        };
    }

위과 같이 dispatch함수 직접 구현 가능

    export default connect(mapStateToProps, mapDispatchToProps)(Home);
connect(redux store에서 state를 불러옴)
