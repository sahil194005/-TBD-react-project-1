import { useState } from "react";
import "./InputForm.css";
function InputForm(props) {
	const [userName, setUserName] = useState("");
	const [userAge, setUserAge] = useState("");

	const userNameHandler = (e) => {
		setUserName(e.target.value);
	};

	const userAgeHandler = (e) => {
		setUserAge(e.target.value);
	}; 

	const formSubmitHandler = (e) => {
		e.preventDefault();
		let obj = {
			name: userName,
			age: userAge,
		};
		setUserAge("");
		setUserName("");
		props.onSubmitHandler(obj);
	};
	return (
		<form className="form-control" onSubmit={formSubmitHandler}>
			<label>Username</label>
			<input type="text" onChange={userNameHandler} value={userName}></input>
			<label>Age(Years)</label>
			<input value = {userAge} type="number" onChange={userAgeHandler}></input>
			<button type="submit">Add User</button>
		</form>
	);
}

export default InputForm;
