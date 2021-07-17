import React, { FC } from 'react';

import { Song } from '@/resources/Song';
import { useResource } from '@/libs/@datx/jsonapi-react';
import { NextSeo } from 'next-seo';
import { SongDetails, SongDetailsSkeleton } from '@/components/shared/song/SongDetails/SongDetails';

interface ISongDetailsSection {
	songId: number | string;
}

export const SongDetailsSection: FC<ISongDetailsSection> = ({ songId }) => {
	const { data: song, error } = useResource(() => [Song, songId]);

	if (error) {
		throw error;
	}

	if (!song) {
		return <SongDetailsSkeleton />;
	}

	return (
		<>
			<NextSeo title={song.title} />

			<SongDetails song={song} />
		</>
	);
};
