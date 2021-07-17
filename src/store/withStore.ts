import { GetServerSideProps, GetStaticProps } from 'next';

import client from '../store';

type WithStoreFnType = GetStaticProps | GetServerSideProps;
type WithStoreContext<FnType extends WithStoreFnType> = Parameters<FnType>[0] & { store: typeof client };
type WithStoreExtendedFnType<FnType extends WithStoreFnType> = (
	ctx: WithStoreContext<FnType>
) => ReturnType<WithStoreFnType>;

export const withStore =
	<FnType extends WithStoreFnType = GetStaticProps>(getPropsFn: WithStoreExtendedFnType<FnType>): WithStoreFnType =>
	async (ctx: Parameters<FnType>[0]) => {
		const store = client;

		const newContext = {
			...ctx,
			store,
		};

		return Promise.resolve(getPropsFn(newContext)).then((fnDatum) => {
			if ('props' in fnDatum) {
				fnDatum.props.snapshot = JSON.parse(JSON.stringify(store.snapshot));
			}

			return fnDatum;
		});
	};
