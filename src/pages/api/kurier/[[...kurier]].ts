import { Application, jsonApiVercel } from 'kurier';
import ManyToManyAddon from '@kurier/addon-many-to-many';
import { knex } from 'knex';
import type { NextApiRequest, NextApiResponse } from 'next';

import config from '../../../../knexfile.js';

import Author from '@/kurier/resources/author';
import Song from '@/kurier/resources/song';
import Category from '@/kurier/resources/category';

const app = new Application({
	namespace: 'api/kurier',
	types: [Author, Category, Song],
	services: {
		knex: knex(config),
	},
});

app.use(ManyToManyAddon);

// Export the middleware result so Next.js can handle Kurier endpoints.
const NextKurierMiddleware = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.headers['content-type'] === 'application/vnd.api+json' && req.body) {
		req.body = JSON.parse(req.body);
	}

	// @ts-ignore
	await jsonApiVercel(app)(req, res);
};

export default NextKurierMiddleware;
