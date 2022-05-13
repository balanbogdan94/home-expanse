import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../util/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import '../styles/globals.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PageLayout from '../components/layout/PageLayout';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props: AppProps) => {
	const { Component, pageProps } = props;

	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</ThemeProvider>
	);
};

export default MyApp;
