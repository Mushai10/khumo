import React from 'react';
import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import Checkout from '../components/Checkout';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function CheckoutPage({ headerItems, checkoutItems, footerItems }) {
    React.useEffect(() => {
        console.log('logging ---------------------');
    }, []);
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Checkout"
                item="Home"
                itemPath="/"
                activeItem="Checkout"
            />
            <Checkout checkoutItems={checkoutItems} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const checkoutItems = await getAllItems('checkout');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            checkoutItems,
            footerItems,
        },
    };
}

CheckoutPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    checkoutItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default CheckoutPage;
