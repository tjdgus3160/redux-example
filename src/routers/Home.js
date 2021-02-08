import React, { useState } from 'react'
import { connect } from 'react-redux';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");

    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDo {...toDo} key={toDo.id}/>
                ))}
            </ul>
        </>
    )
}

function  mapStateToProps(state) {  // state는 redux store에서 불러온 값
    return {toDos: state};          // return 객체는 현재 객제의 Props에 추가됌 
}                                   // 이후 현재 객체에서 redux값을 사용할 수 있음

function mapDispatchToProps(dispatch) { // dispatch함수 직접 구현 가능
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    };
}

// connect(redux store에서 state를 불러옴)
export default connect(mapStateToProps, mapDispatchToProps)(Home);
