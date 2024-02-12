import PropTypes from 'prop-types';
import BlogWithSidebar from '../../../components/Blogs/BlogWithSidebar';
import Breadcrumb from '../../../components/Breadcrumb';
import FooterComps from '../../../components/FooterComps';
import HeaderOne from '../../../components/HeaderComps';
import { getBlogTags } from '../../../lib/BlogTags';
import { getBlogCategories } from '../../../lib/BlogCategories';
import { getAllItems } from '../../../lib/ItemsUtil';

function BlogCategoryPage({
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

export const getStaticProps = async  ({ params }) => {
    const { slug } = params;
    const headerItems = await getAllItems('header');
    const blogs = await getAllItems('blogs');
    const filteredblogs = blogs
        .map((blog) => ({
            ...blog,
            uniqueCategory: blog.category.find(
                (cate) => cate?.split('|')[0]?.trim() === slug
            ),
        }))
        .filter((blog) => blog.uniqueCategory?.split('|')[0]?.trim() === slug);
    const categories = await getBlogCategories();
    const tags = await getBlogTags();
    const footerItems = await getAllItems('footer');

    return {
        props: {
            headerItems,
            blogs: filteredblogs,
            categories,
            tags,
            footerItems,
        },
    };
};

export const getStaticPaths = async () => {
    const categories = await getBlogCategories();

    return {
        paths: categories.map((category) => ({
            params: { slug: category.split('|')[0].trim() },
        })),
        fallback: false,
    };
};

BlogCategoryPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default BlogCategoryPage;
