require('dotenv').config();
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const {
	PORT,
	NODE_ENV,
	API_KEY_MOVIEDB,
	URL_MOVIEDB,
	LANGUAGE_MOVIEDB,
	URL_SMALL_IMAGE,
	URL_BIG_IMAGE
} = process.env;

const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: () => ({
				user: false,
				API_KEY_MOVIEDB,
				URL_MOVIEDB,
				LANGUAGE_MOVIEDB,
				URL_SMALL_IMAGE,
				URL_BIG_IMAGE
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
