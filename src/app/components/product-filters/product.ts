export interface Product {
    id: number,
    title: string,
    category: 'Footwear' | 'Clothing' | 'Accessories',
    gender: 'Men' | 'Women',
    brand: string,
}


export const ProductList: Product[] = [
    {
        id: 1,
        title: "Shirt",
        category: "Clothing",
        gender: "Men",
        brand: "Louis Vuitton",
    },
    {
        id: 2,
        title: "Slipper",
        category: "Footwear",
        gender: "Men",
        brand: "Adidas",
    },
    {
        id: 3,
        title: "Shoe",
        category: "Footwear",
        gender: "Women",
        brand: "Nike",
    },
    {
        id: 4,
        title: "Handbag",
        category: "Accessories",
        gender: "Women",
        brand: "Michael Kors",
    },
    {
        id: 5,
        title: "Jeans",
        category: "Clothing",
        gender: "Men",
        brand: "Wrangler",
    },
    {
        id: 6,
        title: "Jeans",
        category: "Clothing",
        gender: "Women",
        brand: "Gap",
    },
]