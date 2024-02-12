import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import commerce from './commerce';
import { products } from './products-data';

export function getItemsFiles(type) {
    const itemsDirectory = path.join(process.cwd(), 'src/data', type);
    return fs.readdirSync(itemsDirectory);
}

export function categoriesFromAPI(items) {}

export function productsFromAPI(items) {
    // return products
    return items.map((item) => {
        let cat = null;
        if (item.categories.length) {
            cat = item.categories[0].name;
        }
        return {
            id: item.id,
            slug: item.id,
            title: item.name,
            xsImage: item.image.url,
            smImage: item.image.url,
            mdImage: item.image.url,
            altImage: item.image.filename,
            price: item.price.raw,
            desc: item.description,
            sku: item.id,
            category: cat,
            availability: 'in-stock',
            size: '',
            color: '',
            tag: item.id,
            isFeatured: false,
            date: item.created,
            // ...item
        };
    });
}

export async function getItemData(itemIdentifier, type) {
    // TODO: Replace id with slug
    if (type === 'products') {
        const { data: _products } = await commerce.products.list();
        // console.log('Fetching a particular product: ', itemIdentifier);
        // const data = products.filter((item) => item.id === itemIdentifier)[0];
        const data = productsFromAPI(_products).filter(
            (item) => item.id === itemIdentifier
        )[0];
        // data.forEach((item)=>{
        //     console.log("Item Price: ", item.price)
        // })
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
    //     // const data = products.filter((item) => item.id === itemIdentifier)[0];
    //     const data = categoriesFromAPI(_categories).filter((item) => item.id === itemIdentifier)[0];
    //     // data.forEach((item)=>{
    //     //     console.log("Item Price: ", item.price)
    //     // })
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
    const itemFiles = getItemsFiles(type);
    let allItems;
    if (type === 'products') {
        const { data: _products } = await commerce.products.list();
        // allItems = products;
        allItems = productsFromAPI(_products);
    }
    // else if (type === 'categories') {
    //     const { data: _categories } = await commerce.categories.list();
    //     // allItems = products;
    //     allItems = categoriesFromAPI(_categories)
    // }
    else {
        allItems = await Promise.all(
            itemFiles.map(async (itemFile) => getItemData(itemFile, type))
        );
    }

    const sortedItems = allItems.sort((itemA, itemB) =>
        itemA.date > itemB.date ? -1 : 1
    );

    return sortedItems;
}

export function getFeaturedItems(items) {
    return items.filter((item) => item.isFeatured);
}
