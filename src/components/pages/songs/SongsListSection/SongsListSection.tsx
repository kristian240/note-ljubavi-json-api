import React, { FC } from 'react';
import { Divider, Heading, HStack, IconButton, VStack } from '@chakra-ui/react';
import { useResourceList } from '@datx/jsonapi-react';
import { Search2Icon } from '@chakra-ui/icons';

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
		<VStack as="section" divider={<Divider />} spacing={4} align="flex-start">
			<HStack justify="space-between" w="full">
				<Heading as="h1">Popis pjesama</Heading>
			</HStack>

			{data.length > 0 ? (
				<>
					<SongList songList={data} flex="1" />

					{(hasNext || hasPrev) && (
						<BasicPagination hasNext={hasNext} hasPrev={hasPrev} onNext={next} onPrev={prev} current={1} total={10} />
					)}
				</>
			) : (
				<EmptyListMessage message="Nema pjesama!" />
			)}
		</VStack>
	);
};
