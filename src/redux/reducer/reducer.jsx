
let initialState = {
	count : 0,
}

const reducer = (state = initialState, action)=>{ // 3. 전달받은 action값내 type값에 따라 아래 switch문 실행
	
	switch (action.type){ // 4. 케이스에 따라 state. 값을 수정후 새로운객체형태로 리턴
		case 'INCREMENT':
			return {...state, count : state.count+action.payload.sum}
		case 'INCREMENT2':
			return {...state, count : state.count+2}
		default :
			return {...state}
	}
}

export default reducer // 5. store에 자동으로 업데이트