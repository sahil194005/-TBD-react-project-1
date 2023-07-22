import SingleUser from "./SingleUser";
const UsersList = (props) => {
	const newArr = props.users.map((user) => {
		return <SingleUser key={Math.random()} name={user.name} age={user.age} />;
	});

	return (
		<div>
			<ul>{newArr}</ul>;
		</div>
	);
};

export default UsersList;
