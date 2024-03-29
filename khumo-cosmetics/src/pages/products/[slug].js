import PropTypes from 'prop-types';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/ProductUtil';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb/index-2';
import ProductDetails from '../../components/Products/ProductDetails';
import FooterComps from '../../components/FooterComps';

function ProductDetailPage({
    product,
    headerItems,
    productDetailTabItems,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                product={product}
                item="Home"
                itemPath="/"
            />
            <ProductDetails
                product={product}
                productDetailTabItems={productDetailTabItems}
                productFilterPath="carousel"
            />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    // TODO: Replacing slug with id for now
    const { slug } = params;

    const headerItems = await getAllItems('header');
    const product = await getItemData(slug, 'products');
    // const product = getItemData(id, 'products');
    const productDetailTabItems = await getAllItems('product-detail-tab');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            product,
            productDetailTabItems,
            footerItems,
        },
    };
}

export async function getStaticPaths() {
    const productFilenames = getItemsFiles('products');

    // TODO: using ids instead of slug
    // const slugs = productFilenames.map((fileName) =>
    //     fileName.replace(/\.md$/, '')
    // );
    const products = await getAllItems('products');
    const slugs = products.map((item) => item.slug);
    // console.log("SLUGS/IDS: ", slugs)

    return {
        paths: slugs.map((slug) => ({ params: { slug} })),
        fallback: false,
    };
}

ProductDetailPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    product: PropTypes.instanceOf(Object).isRequired,
    productDetailTabItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ProductDetailPage;
