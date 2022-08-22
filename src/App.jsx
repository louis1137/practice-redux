import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function App() {

	const count = useSelector(state => state.count); // 6. useSelector를 이용해서 store에 저장되어있는 count 값을 가지고 온다. (매개변수는 함수형태)
	const dispatch = useDispatch(); // 1. 디스패치 생성
	const increase = ()=>{
		dispatch({ // 생성한 useDispatch를 이용해 reducer로 action값({type:'', payload:''})을 전달
			type : 'INCREMENT',
			payload : {
				sum : 3
			}
		}); // redux가 자동으로 reducer와 연결해줌
	}

	return (
		<div className="App">
			<em>{count}</em>
			<button onClick={increase}>증가</button>
		</div>
	);
}

export default App;
