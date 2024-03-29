import PropTypes from 'prop-types';
import HeaderOne from '../../components/HeaderComps';
import Breadcrumb from '../../components/Breadcrumb';
import BlogWithSidebar from '../../components/Blogs/BlogWithSidebar';
import FooterComps from '../../components/FooterComps';
import { getAllItems } from '../../lib/ItemsUtil';
import { getBlogCategories } from '../../lib/BlogCategories';
import { getBlogTags } from '../../lib/BlogTags';

function BlogSidebarPage({
    headerItems,
    blogs,
    categories,
    tags,
    footerItems,
}) {
    return (
        <>
            <HeaderOne headerItems={headerItems} headerContainer="container" />
            <Breadcrumb
                breadcrumbContainer="container"
                title="Blog Sidebar"
                item="Home"
                itemPath="/"
                activeItem="Blog Sidebar"
            />
            <BlogWithSidebar
                blogs={blogs}
                categories={categories}
                tags={tags}
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
    const blogs = await getAllItems('blogs');
    const categories = await getBlogCategories();
    const tags = await getBlogTags();
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            blogs,
            categories,
            tags,
            footerItems,
        },
    };
}

BlogSidebarPage.propTypes = {
    headerItems: PropTypes.instanceOf(Array).isRequired,
    blogs: PropTypes.instanceOf(Array).isRequired,
    categories: PropTypes.instanceOf(Array).isRequired,
    tags: PropTypes.instanceOf(Array).isRequired,
    footerItems: PropTypes.instanceOf(Array).isRequired,
};

export default BlogSidebarPage;
