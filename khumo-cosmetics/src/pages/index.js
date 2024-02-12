import React from 'react';
import PropTypes from 'prop-types';
import { getAllItems } from '../lib/ItemsUtil';
import HomeBoxed from '../components/HomeBoxed';
import HeaderTwo from '../components/HeaderComps/index-2';
import HeroTwo from '../components/Hero/index-2';
import VideoModalTwo from '../components/VideoModal/index-2';
import ProductTab from '../components/ProductTab';
import Brand from '../components/Brand';
import NewsletterCompsTwo from '../components/NewsletterComps/index-2';
import FooterCompsTwo from '../components/FooterComps/index-2';

function HomePage({
    headerItems,
    heroBoxedItems,
    videoModalItems,
    products,
    productTab,
    productFilter,
    brandItems,
    footerItems,
}) {
    return (
        <HomeBoxed>
            <HeaderTwo headerItems={headerItems} logoPath="/home-boxed" />
            <HeroTwo heroBoxedItems={heroBoxedItems} />
            <VideoModalTwo
                videoModalItems={videoModalItems}
                containerCName="homebox-container xl:mx-[100px] mx-[15px]"
            />
            <ProductTab
                products={products}
                productTab={productTab}
                tabTitle="Popular Products"
                containerCName="homebox-container xl:mx-[100px] mx-[15px]"
                productFilter={productFilter}
                productFilterPath="left-sidebar"
            />
            <Brand brandItems={brandItems} />
            <NewsletterCompsTwo
                newsletterCName="newsletter-area"
                sectionTitle="Our Newsletter"
                sectionDesc="Subscribe our newsletter and get discount 50% off"
                containerCName="homebox-container xl:mx-[100px] mx-[15px] bg-[#f4f5f7] py-[50px] lg:px-[70px] px-[15px]"
            />
            <FooterCompsTwo footerItems={footerItems} />
        </HomeBoxed>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const heroBoxedItems = await getAllItems('hero-boxed');
    const videoModalItems = await getAllItems('video-modal');
    const products = await getAllItems('products');
    const productFilter = await getAllItems('product-filter');
    const productTab = await getAllItems('product-tab');
    const brandItems = await getAllItems('brand');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            heroBoxedItems,
            videoModalItems,
            products,
            productFilter,
            productTab,
            brandItems,
            footerItems,
        },
    };
}

HomePage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    heroBoxedItems: PropTypes.instanceOf(Object).isRequired,
    videoModalItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    productTab: PropTypes.instanceOf(Object).isRequired,
    brandItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
