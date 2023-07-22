const SingleUser = (props) => {
	let str = `${props.name} (${props.age} years old)`;
	return <li>{str}</li>;
};

export default SingleUser;
