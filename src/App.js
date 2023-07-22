import InputForm from "./components/InputForm/InputForm";
import UsersList from "./components/UsersList/UsersList";
import { useState } from "react";
import ReactModal from "react-modal";
import PopUp from "./components/PopUp/PopUp";
import './App.css'
ReactModal.setAppElement("#root");


const App = () => {
	const [users, setusers] = useState([
		{ name: "max", age: 21,college:'IIT' },
		{ name: "wiley", age: 23 ,college:'UIT'},
	]);

	const [isOpen, setIsOpen] = useState(false);
	const [emptySubmit, setEmptySubmit] = useState(false);
	const [isnegativeAge, setIsNegativeAge] = useState(false);
	const SubmitHandler = (newUser) => {
		setusers((prevState) => {
			return [...prevState, newUser];
		});
	};

	const emptySubmitHandler = () => {
		setEmptySubmit(true);
		setIsOpen(true);
	};
	const negativeAgeHandler = () => {
		setIsNegativeAge(true);
		setIsOpen(true);
	};
	
	return (
		<div>
			<ReactModal
				isOpen={isOpen}
				onRequestClose={() => {
					setIsOpen(false);
				}}
			>
				<PopUp emptySubmit={emptySubmit} negativeAge={isnegativeAge} />
				<button
					onClick={() => {
						setIsOpen(false);
						setEmptySubmit(false);
						setIsNegativeAge(false);
					}}
				>
					Okay
				</button>
			</ReactModal>

			<InputForm onSubmitHandler={SubmitHandler} onEmptySubmitHandler={emptySubmitHandler} onNegativeAgeHandler={negativeAgeHandler} />

			<UsersList users={users} />
		</div>
	);
};

export default App;
