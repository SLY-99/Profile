import React from 'react';
import '../Home/home.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

function Home() {

  const navigate = useNavigate(); 
  const [users, setUsers] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		(async () => {
			try {
				const response = await fetch('https://reqres.in/api/users');
				const data = await response.json();

				if (data?.data?.length > 0) {
					setUsers([...data.data]);
					setLoading(false);
				}
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

  return (
    <>
    <Button variant="contained" size="large" onClick={() => navigate(-1)} >Back</Button>
    <Button variant="contained" size="large" onClick={() => navigate(1)} >Forward</Button>
     <div className='accardion__wrapper'>
     {isLoading && <h1>Loading ...</h1>}

     {users.length > 0 &&
					users.map((user) => (
            <React.Fragment key={user.id}>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{user.first_name + ' ' + user.last_name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           		<img className='accardion__img'
						 			src={user.avatar}
						 			alt={user.last_name + "'s avatar"}
						 		/>
            <Button data-id={user.id} type='button' variant="contained" size="small" onClick={() => navigate("/profile/"+user.id)} >More Info</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
            </React.Fragment>
					))}
    </div>
    </>
  );
}

export default Home;