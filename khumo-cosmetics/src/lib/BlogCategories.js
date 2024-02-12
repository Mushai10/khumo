import { getAllItems } from './ItemsUtil';
import { flatDeep } from '../utils/flatDeep';

export const getBlogCategories = async () => {
    // return []
    const blogs = await getAllItems('blogs');

    const categories = flatDeep(blogs.map((blog) => blog.category));

    return [...new Set(categories)];
};
