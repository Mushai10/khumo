import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb';
import BlogList from '../../components/Blogs/BlogList';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ItemsUtil';

function BlogListPage({ headerItems, blogs, footerItems }) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Blog List"
                item="Home"
                itemPath="/"
                activeItem="Blog List"
            />
            <BlogList blogs={blogs} />
            <FooterComps
                footerContainer="container"
                footerItems={footerItems}
            />
        </>
    );
}

export async function getStaticProps() {
    const headerItems = await getAllItems('header');
    const blogs = await getAllItems('blogs');
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            blogs,
            footerItems,
        },
    };
}

BlogListPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    blogs: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default BlogListPage;
