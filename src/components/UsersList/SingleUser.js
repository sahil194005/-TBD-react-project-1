import "./SingleUser.css";
const SingleUser = (props) => {
	let str = `${props.name} (${props.age} years old)  graduated from ${props.college}`;
	return <li>{str}</li>;
};

export default SingleUser;
