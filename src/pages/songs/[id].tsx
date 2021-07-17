import React from 'react';
import { GetStaticPaths, NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import { MainLayout } from '@/components/shared/layouts/MainLayout/MainLayout';
import { Song } from '@/resources/Song';
import client from '@/store';
import { SongDetailsSection } from '@/components/pages/song/SongDetailsSection/SongDetailsSection';
import { IError } from '@datx/jsonapi/dist/interfaces/JsonApi';
import { handleGetPropsError } from '@/helpers/handleGetPropsError';
import Error from '@/pages/_error';

interface ISongDetailProps {
	songId: string | number;
	songTitle: string;
	errorStatusCode?: number;
}

const SongDetails: NextPage<ISongDetailProps> = ({ errorStatusCode, songId, songTitle }) => {
	if (errorStatusCode) {
		return <Error statusCode={errorStatusCode} />;
	}

	return (
		<>
			<NextSeo title={songTitle} />

			<MainLayout>
				<Container as="main" flex={1} py={4} maxH="100vh">
					<SongDetailsSection songId={songId} />
				</Container>
			</MainLayout>
		</>
	);
};

export const getStaticProps = async ({ params }) => {
	const songId = (params.id as string)?.split('-').pop();

	const { data, error } = await client.getOne(Song, songId).catch((error) => error);

	if (error) {
		return handleGetPropsError(error);
	}

	const song = data as Song;

	return {
		props: {
			songId,
			songTitle: song.title,
		},
		revalidate: 604800, // 1 week in seconds
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};

export default SongDetails;
