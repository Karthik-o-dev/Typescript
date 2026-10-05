const dummyapi = "https://dummyjson.com/products";

type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

type Dimensions = {
    width: number;
    height: number;
    depth: number;
}

type Meta = {
    createdAt: string;
    updatedAt: string;
    barcode: string,
    qrCode: string
}

type products = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: "No return policy";
    minimumOrderQuantity: 48;
    meta: Meta;
    images: string[];
    thumbnail: string;
}

type Product = {
    products: products[],
    total: number,
    skip: number,
    limit: number
}

const getDummyApi = async (): Promise<Product> => {
    const res = await fetch(dummyapi);
    const response = await res.json();
    return response;
}


(async () => {
    const response = await getDummyApi();
    response.products.forEach((product) => {
        product.reviews.forEach((review) => {
            console.log(review.comment)
        })
    })
})();