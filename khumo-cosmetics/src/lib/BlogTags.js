import { getAllItems } from './ItemsUtil';
import { flatDeep } from '../utils/flatDeep';

export const getBlogTags = async () => {
    // return []
    const blogs = await getAllItems('blogs');

    const tags = flatDeep(blogs.map((blog) => blog.tag));

    return [...new Set(tags)];
};
