import React from 'react';
import { NextPage } from 'next';
import { Container } from '@chakra-ui/react';

import { SongListSection } from '@/components/pages/songs/SongsListSection/SongsListSection';
import { MainLayout } from '@/components/shared/layouts/MainLayout/MainLayout';

const Home: NextPage = () => {
	return (
		<MainLayout>
			<Container as="main" flex={1}>
				<SongListSection />
			</Container>
		</MainLayout>
	);
};

export default Home;
