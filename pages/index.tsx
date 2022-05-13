import type { NextPage } from 'next';
import SpendingTable from '../components/HomePage/SpendingTable';
import Expense from './../model/Expanse';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import style from './../styles/Home.module.css';
import AddModal from '../components/HomePage/AddModal';

const Home: NextPage = () => {
	const rows: Expense[] = [
		{
			id: '1',
			description: 'Test1',
			amount: 12,
			date: new Date(),
			label: ['TestLabel1', 'TestLabel2', 'TestLabel3'],
			provider: 'Test',
		},
		{
			id: '2',
			description: 'Test2',
			amount: 22,
			date: new Date(),
			label: ['TestLabel12', 'TestLabel23', 'TestLabel34'],
			provider: 'Test32',
		},
	];

	const onAddButtonPressed = () => {};

	return (
		<div className={style.homeContainer}>
			<AddModal />
			<div className={style.actionBar}>
				<Fab color='primary' aria-label='add' onClick={onAddButtonPressed}>
					<AddIcon />
				</Fab>
			</div>
			<SpendingTable expanses={rows} />
		</div>
	);
};

export default Home;
