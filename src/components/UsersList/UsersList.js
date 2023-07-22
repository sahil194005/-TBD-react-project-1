import SingleUser from "./SingleUser";
import "./UsersList.css";
const UsersList = (props) => {
	console.log(props);
	const newArr = props.users.map((user) => {
		return <SingleUser key={Math.random()} name={user.name} age={user.age} college={user.college} />;
	});

	return (
		<div>
			<ul>{newArr}</ul>;
		</div>
	);
};

export default UsersList;
