const UserDisp = ({user}) => {

	return (
		<div className="user-settings">
		<h5 onClick={console.log("Nothing")}>
			{"Welcome, "+user.name+"!"}
		</h5>
		</div>
	)
}

export default UserDisp