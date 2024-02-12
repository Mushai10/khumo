import Head from 'next/head';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from '../store/index';

import Layout from '../components/Layout';
import '../styles/globals.css';
import { ScrollToTop } from '../components/ScrollComps';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Khumo Cosmetics - Lipgloss Gauteng</title>
                <meta
                    name="description"
                    content="Khumo Cosmetics aims at offering beauty enthusiasts provides with premium cosmetics with creative and yet unconventional designs and blends.The ingredients used in the products are vegan and cruelty free, based Khumo cosmetics believes in keeping the environment rich , beautiful and healthy ."
                />
                <link rel="shortcut icon" href="/favicon.png" />
                <scrip src="https://www.paypalobjects.com/api/checkout.js" />
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
            <ScrollToTop />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.instanceOf(Object).isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
