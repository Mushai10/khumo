import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import commerce from './commerce';
import { products } from './products-data';
import { productsFromAPI } from './ProductUtil';

export function getItemsFiles(type) {
    const itemsDirectory = path.join(process.cwd(), 'src/data', type);
    return fs.readdirSync(itemsDirectory);
}

export async function getItemData(itemIdentifier, type) {
    if (type === 'products') {
        const { data: _products } = await commerce.products.list();
        // console.log('Fetching a particular product: ', itemIdentifier);
        // const data = products.filter((item) => item.id === itemIdentifier)[0];
        const data = productsFromAPI(_products).filter(
            (item) => item.id === itemIdentifier
        )[0];
        // console.log('Data:: ', data);
        return {
            slug: itemIdentifier,
            ...data,
            // content
        };
    }
    // if (type === 'categories') {
    //     const { data: _categories } = await commerce.categories.list();
    //     // console.log('Fetching a particular product: ', itemIdentifier);
    //     // const data = categories.filter((item) => item.id === itemIdentifier)[0];
    //     const data = categoriesFromAPI(_categories).filter((item) => item.id === itemIdentifier)[0];
    //     // console.log('Data:: ', data);
    //     return {
    //         slug: itemIdentifier,
    //         ...data,
    //         // content
    //     };
    // }
    const itemsDirectory = path.join(`${process.cwd()}/src/data/${type}`);
    const itemSlug = itemIdentifier.replace(/\.md$/, ''); // removes the file extension
    const filePath = path.join(itemsDirectory, `${itemSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const itemData = {
        slug: itemSlug,
        ...data,
        content,
    };

    return itemData;
}

export async function getAllItems(type) {
    // console.log("Type: ", type, type === "products")
    if (type === 'products') {
        const { data: _products } = await commerce.products.list();
        // return products;
        return productsFromAPI(_products);
    }

    // if (type === "categories") {
    //     const { data: _categories } = await commerce.categories.list();
    //     // return categories;
    //     return categoriesFromAPI(_categories)
    // }
    const itemFiles = getItemsFiles(type);

    // console.log("HERE 1")
    const allItems = await Promise.all(
        itemFiles.map(async (itemFile) => getItemData(itemFile, type))
    );
    // const allItems = Promise.all(_allItems)
    // console.log("All Items", allItems)

    const sortedItems = allItems.sort((itemA, itemB) =>
        itemA.date > itemB.date ? -1 : 1
    );

    return sortedItems;
}

export function getFeaturedItems(items) {
    // return items.filter((item) => item.isFeatured);
    return items.filter((item, idx) => item.isFeatured || idx <= 3);
}
