import Modal from '@mui/material/Modal';
import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputAdornment from '@mui/material/InputAdornment;
import style from './AddModal.module.css';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

const AddModal = () => {
	return (
		<Modal
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			open={true}
			onClose={() => {}}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'>
			<>
				<div className={style.modalContainer}>
					<form>
						<TextField
							id='standard-basic'
							label='Description'
							variant='outlined'
						/>
						<FormControl sx={{ m: 1 }}>
							{/* <InputLabel htmlFor='outlined-adornment-amount'>
								Amount
							</InputLabel>
							<OutlinedInput
								id='outlined-adornment-amount'
								startAdornment={
									<InputAdornment position='start'>RON</InputAdornment>
								}
								label='Amount'
							/> */}
						</FormControl>
					</form>
				</div>
			</>
		</Modal>
	);
};

export default AddModal;
