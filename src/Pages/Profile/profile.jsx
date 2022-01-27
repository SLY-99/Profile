import React from 'react';
import '../Profile/profile.scss';
import Button from '@mui/material/Button';
import {useNavigate , useParams} from "react-router-dom";

function Profile() {
  const navigate = useNavigate(); 

  const { id } = useParams();

	const [user, setUser] = React.useState({});
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch('https://reqres.in/api/users/' + id)
			.then((response) => response.json())
			.then((data) => {
				setUser(data?.data);
				setLoading(false);
			});
	}, [id]);


	if (isLoading) {
		return <h1>Loading ... </h1>;
	} else {
		return (
			<>
				<Button variant="contained" size="large" onClick={() => navigate(-1)} >Back</Button>
				<Button variant="contained" size="large" onClick={() => navigate("/login")} >Log out</Button>

				<h1>Profile</h1>

				<h1>{user.first_name + ' ' + user.last_name}</h1>

				<img
					src={user.avatar}
					width={400}
					height={400}
					alt={user.first_name + "'s avatar"}
				/>

				<h2>{user.email}</h2>
			</>
		);
	}

}

export default Profile;