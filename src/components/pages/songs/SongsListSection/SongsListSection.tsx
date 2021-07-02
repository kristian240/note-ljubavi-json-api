import React, { FC } from 'react';
import { Box, Divider, Heading, IconButton } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useResourceList } from '@datx/jsonapi-react';

import { Song } from '@/resources/Song';
import { SongList } from '@/components/shared/song/SongList/SongList';
import { LoadingMessage } from '@/components/shared/messages/LoadingMessage/LoadingMessage';
import { EmptyListMessage } from '@/components/shared/messages/EmptyListMessage/EmptyListMessage';

import { BasicPagination } from '@/components/shared/paginations/BasicPagination/BasicPagination';

export const SongListSection: FC = () => {
	const { data, error, hasNext, hasPrev, next, prev } = useResourceList(() => [Song]);

	if (error) {
		throw error;
	}

	if (!data) {
		return <LoadingMessage />;
	}

	return (
		<Box as="section">
			<Heading as="h1" my={10}>
				Popis pjesama
			</Heading>

			<Divider mb={10} />

			{data.length > 0 ? (
				<>
					<SongList songList={data} />
					<BasicPagination hasNext={hasNext} hasPrev={hasPrev} onNext={next} onPrev={prev} current={1} total={10} />
				</>
			) : (
				<EmptyListMessage message="Nema pjesama!" />
			)}
		</Box>
	);
};
