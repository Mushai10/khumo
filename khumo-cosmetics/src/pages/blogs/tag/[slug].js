import PropTypes from 'prop-types';
import BlogWithSidebar from '../../../components/Blogs/BlogWithSidebar';
import Breadcrumb from '../../../components/Breadcrumb';
import FooterComps from '../../../components/FooterComps';
import HeaderOne from '../../../components/HeaderComps';
import { getBlogTags } from '../../../lib/BlogTags';
import { getBlogCategories } from '../../../lib/BlogCategories';
import { getAllItems } from '../../../lib/ItemsUtil';

function BlogTagPage({ headerItems, blogs, categories, tags, footerItems }) {
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
                breadcrumbContainer="container"
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
            uniqueTag: blog.tag.find((tag) => tag === slug),
        }))
        .filter((blog) => blog.uniqueTag === slug);
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
    const tags = await getBlogTags();

    return {
        paths: tags.map((tag) => ({
            params: { slug: tag },
        })),
        fallback: false,
    };
};

BlogTagPage.propTypes = {
    headerItems: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default BlogTagPage;
