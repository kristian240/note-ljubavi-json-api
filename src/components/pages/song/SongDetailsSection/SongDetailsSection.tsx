import React, { FC } from 'react';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import { Button, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import { Song } from '@/resources/Song';
import { useResource } from '@/libs/@datx/jsonapi-react';
import { SongDetails, SongDetailsSkeleton } from '@/components/shared/song/SongDetails/SongDetails';
import { ErrorMessage } from '@/components/shared/messages/ErrorMessage/ErrorMessage';

interface ISongDetailsSection {
	songId: number | string;
}

export const SongDetailsSection: FC<ISongDetailsSection> = ({ songId }) => {
	const { data: song, error } = useResource(() => [Song, songId]);

	if (error) {
		return <ErrorMessage message={String(error)} />;
	}

	if (!song) {
		return <SongDetailsSkeleton />;
	}

	return (
		<>
			<NextSeo title={song.title} />

			<NextLink href="/songs" scroll={false}>
				<Button leftIcon={<ArrowBackIcon />} variant="link" colorScheme="primary">
					<Text as="span">Natrag na popis</Text>
				</Button>
			</NextLink>

			<SongDetails song={song} mt={4} />
		</>
	);
};
