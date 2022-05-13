import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import Expense from './../../model/Expanse';
import moment from 'moment';
import lightTheme from './../../styles/theme/lightTheme';

type SpendingTableProps = {
	expanses: Expense[];
};

const rowStyle = {
	color: lightTheme.palette.primary.contrastText,
	fontWeight: 600,
};

export default function SpendingTable(
	props: SpendingTableProps,
): React.ReactElement<SpendingTableProps> {
	return (
		<TableContainer component={Card}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow sx={{ backgroundColor: lightTheme.palette.primary.main }}>
						<TableCell sx={rowStyle}>Description</TableCell>
						<TableCell sx={rowStyle} align='center'>
							Price
						</TableCell>
						<TableCell sx={rowStyle} align='center'>
							Date
						</TableCell>
						<TableCell sx={rowStyle} align='center'>
							Tags
						</TableCell>
						<TableCell sx={rowStyle} align='center'>
							Provider
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.expanses.map((row) => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component='th' scope='row'>
								{row.description}
							</TableCell>
							<TableCell align='center'>{`${row.amount} RON`}</TableCell>
							<TableCell align='center'>
								{moment(row.date).format('DD MMM YYYY')}
							</TableCell>
							<TableCell align='center'>{row.label.join(', ')}</TableCell>
							<TableCell align='center'>{row.provider}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
