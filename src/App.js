import InputForm from "./components/InputForm/InputForm";
import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";

const App = () => {
	const [users, setusers] = useState([
		{ name: "max", age: 21 },
		{ name: "wiley", age: 23 },
	]);
	const SubmitHandler = (newUser) => {
		setusers((prevState)=>{
			return [...prevState,newUser]
		})
	};
	return (
		<div>
			<InputForm onSubmitHandler={SubmitHandler} />
			<UsersList users={users} />
		</div>
	);
};

export default App;
