import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import styles from './PageLayout.module.css';
import { Paper } from '@mui/material';

type PageLayoutProps = {
	children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<AppBar position='static' className={styles.AppBar}>
				<Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
					Home Expense App
				</Typography>
			</AppBar>
			<section className={styles.ContentSection}>{children}</section>
		</>
	);
};

export default PageLayout;
