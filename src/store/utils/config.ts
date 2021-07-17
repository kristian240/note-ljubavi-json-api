import { config, CachingStrategy, IRawResponse, ICollectionFetchOpts } from '@datx/jsonapi';
import { apify, deapify } from '@datx/jsonapi-react';

import fetch from 'isomorphic-fetch';

config.fetchReference = fetch;

config.cache = CachingStrategy.NetworkOnly;

config.baseUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/kurier/`;

config.transformResponse = (opts: IRawResponse) => {
	return { ...opts, data: deapify(opts.data) };
};

config.transformRequest = (opts: ICollectionFetchOpts) => {
	return { ...opts, data: apify(opts.data) };
};
