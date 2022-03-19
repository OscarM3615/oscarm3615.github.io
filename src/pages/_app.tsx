import PageLayout from 'shared/components/PageLayout';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import 'styles/index.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'highlight.js/styles/github.css';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const addDefaultLayout = (page: ReactElement) => {
	return <PageLayout>{page}</PageLayout>;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? addDefaultLayout;

	return getLayout(<Component {...pageProps} />);
};

export default App;
