import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import Breadcrumb from '../components/Breadcrumb';
import WishlistPageComps from '../components/WishlistPageComps';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function WishlistPage({
    headerItems,
    products,
    wishlistPageItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Wishlist"
                item="Home"
                itemPath="/"
                activeItem="Wishlist"
            />
            <WishlistPageComps
                wishlistPageItems={wishlistPageItems}
                products={products}
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const products = await getAllItems('products');
    const wishlistPageItems = await getAllItems('wishlist-page');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            products,
            wishlistPageItems,
            footerItems,
        },
    };
}

WishlistPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    wishlistPageItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default WishlistPage;
