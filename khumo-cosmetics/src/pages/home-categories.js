import PropTypes from 'prop-types';
import HeaderOne from '../components/HeaderComps';
import CategoriesBanner from '../components/CategoriesBanner';
import VideoModalTwo from '../components/VideoModal/index-2';
import ProductTab from '../components/ProductTab';
import LatestBlogTwo from '../components/HomePage/LatestBlogTwo';
import NewsletterCompsTwo from '../components/NewsletterComps/index-2';
import FooterComps from '../components/FooterComps';
import { getAllItems } from '../lib/ItemsUtil';

function HomeCategoriesPage({
    headerItems,
    categoryBanner,
    videoModalItems,
    products,
    productFilter,
    productTab,
    blogs,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <CategoriesBanner
                categoryBannerCName="category-banner-area pt-[25px]"
                categoryBanner={categoryBanner}
                products={products}
            />
            <VideoModalTwo
                videoModalItems={videoModalItems}
                containerCName="container"
            />
            <ProductTab
                products={products}
                productTab={productTab}
                tabTitle="Popular Products"
                containerCName="container"
                productFilter={productFilter}
                productFilterPath="left-sidebar"
            />
            <LatestBlogTwo
                blogs={blogs}
                sectionTitle="Explore our blog"
                btnPath="/blogs/sidebar"
                btnText="View All"
            />
            <NewsletterCompsTwo
                newsletterCName="newsletter-area border-b border-[#ededed] xl:pb-[120px] lg:pb-[100px] md:pb-[80px] pb-[50px]"
                sectionTitle="Our Newsletter"
                sectionDesc="Subscribe our newsletter and get discount 50% off"
                containerCName="container bg-[#f4f5f7] md:py-[50px] md:px-[70px] py-[20px] px-[30px]"
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
    const categoryBanner = await getAllItems('category-banner');
    const videoModalItems = await getAllItems('video-modal');
    const products = await getAllItems('products');
    const productFilter = await getAllItems('product-filter');
    const productTab = await getAllItems('product-tab');
    const blogs = await getAllItems('blogs');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            categoryBanner,
            videoModalItems,
            products,
            productFilter,
            productTab,
            blogs,
            footerItems,
        },
    };
}

HomeCategoriesPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    categoryBanner: PropTypes.instanceOf(Object).isRequired,
    videoModalItems: PropTypes.instanceOf(Object).isRequired,
    products: PropTypes.instanceOf(Object).isRequired,
    productTab: PropTypes.instanceOf(Object).isRequired,
    productFilter: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default HomeCategoriesPage;
