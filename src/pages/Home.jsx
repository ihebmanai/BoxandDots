import React from 'react';
import {
	Card,
	CardContent,
	makeStyles,
	Grid,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	Snackbar,
	TextField
} from '@material-ui/core';
import { db } from './../firebase';

export default function Home() {
	const [ state, setState ] = React.useState({});
	const handleInputChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.value
		});
	};
	const savePlayers = () => {
		db
			.collection('players')
			.add({ player02: state.player02, player01: state.player01 })
			.then(() => {
				console.log('okok');
			})
			.catch((e) => {
				console.log(e);
			});
		localStorage.setItem('player01', state.player01);
		localStorage.setItem('player02', state.player02);
	};

	return (
		<div>
			<Grid style={{ margin: '1%' }} justify="center" container>
				<Grid item xs={10}>
					<Card style={{ backgroundColor: 'pink' }}>
						<Grid container justify="center" spacing={3}>
							<Grid item style={{ backgroundColor: 'silver' }} xs={12}>
								Welcome to DOTS {'&'} BOXES
							</Grid>
							<Grid item xs={6}>
								Player 01
								<form onSubmit={savePlayers}>
									<TextField
										onChange={handleInputChange}
										placeholder="Enter your name"
										label="Player 01  :"
										name="player01"
										style={{ margin: 10, width: '90%' }}
										margin="normal"
										required
										InputLabelProps={{
											shrink: true
										}}
									/>
								</form>
							</Grid>
							<Grid item xs={6}>
								Player 02
								<form>
									<TextField
										onChange={handleInputChange}
										placeholder="Enter your name"
										label="Player 02  :"
										name="player02"
										style={{ margin: 10, width: '90%' }}
										margin="normal"
										required
										InputLabelProps={{
											shrink: true
										}}
									/>
								</form>
							</Grid>
							<Grid item xs={6}>
								<Button variant="contained" href="/dots" onClick={savePlayers}>
									Start Game
								</Button>
							</Grid>
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
