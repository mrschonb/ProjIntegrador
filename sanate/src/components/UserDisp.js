const UserDisp = ({user}) => {

	return (
		<div className="">
		<h5>
			{user.type === "Customer" ? "Edit profile" : ""}
		</h5>
		</div>
	)
}

export default UserDisp