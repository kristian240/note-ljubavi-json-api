import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DatxProvider } from '@datx/jsonapi-react';
import { DefaultSeo } from 'next-seo';

import theme from '../styles/theme';
import client from '../store';

import '../store/utils/config';

import defaultSeoProps from 'next-seo.config';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
	return (
		<DatxProvider client={client}>
			<ChakraProvider theme={theme}>
				<DefaultSeo {...defaultSeoProps} />
				<Component {...pageProps} />
			</ChakraProvider>
		</DatxProvider>
	);
}

export default MyApp;
