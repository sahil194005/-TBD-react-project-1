import { useRef } from "react";
import "./InputForm.css";
function InputForm(props) {
	const nameRef = useRef();
	const ageRef = useRef();
	const collegeRef = useRef();

	const formSubmitHandler = (e) => {
		let userName = nameRef.current.value;
		let userAge = ageRef.current.value;
		let userCollege = collegeRef.current.value;
		e.preventDefault();
		let obj = {
			name: userName,
			age: userAge,
			college: userCollege,
		};
		if (userName.trim().length === 0 || userAge.trim().length === 0 || userCollege.trim().length === 0) {
			props.onEmptySubmitHandler();
		} else if (userAge <= 0) {
			props.onNegativeAgeHandler();
		} else {
			props.onSubmitHandler(obj);
		}
		nameRef.current.value = "";
		ageRef.current.value = "";
		collegeRef.current.value = "";
	};
	return (
		<form className="form-control" onSubmit={formSubmitHandler}>
			<div className="form-control--div">
				<label>Username</label>
				<input type="text" ref={nameRef}></input>
			</div>
			<div className="form-control--div">
				<label>Age(Years)</label>
				<input ref={ageRef} type="number"></input>
			</div>
			<div className="form-control--div">
				<label>College Name</label>
				<input ref={collegeRef} type="text"></input>
			</div>
			<button type="submit">Add User</button>
		</form>
	);
}

export default InputForm;
