import belisitas_logo from './belisitas-logo.png';
import landing_img from './landing-img.png';
import page_img from './page-img.png'
import chair_3 from './chair-3.png';
import placeholder from './img-placeholder.jpg'

import product_1 from './product_1.png'
import product_2 from './product_2.png'
import product_3 from './product_3.png'
import product_4 from './product_4.png'
import product_5 from './product_5.png'
import product_6 from './product_6.png'
import product_7 from './product_7.png'
import product_8 from './product_8.png'
import product_9 from './product_9.png'
import product_10 from './product_10.png'

import category_1 from './category_image.jpg'

import featured_1 from './featured_1.png'
import featured_2 from './featured_2.png'
import featured_3 from './featured_3.png'
import featured_4 from './featured_4.png'
import featured_5 from './featured_5.png'
import featured_6 from './featured_6.png'



export const assets = {
    belisitas_logo,
    landing_img,
    page_img,
    chair_3,
    placeholder

}

export const product_list = [
    {
        _id: "1",
        name: "Product Name 1",
        image: product_1,
        price: 100,
        description: "Lorem ipsum dolor sit amet.",
        category: "chair"
    }, {
        _id: "2",
        name: "Product 2",
        image: product_2,
        price: 200,
        description: "Lorem ipsum dolor sit amet.",
        category: "Chair"
    }, {
        _id: "3",
        name: "Product 3",
        image: product_3,
        price: 300,
        description: "Lorem ipsum dolor sit amet.",
        category: "Chair"
    }, {
        _id: "4",
        name: "Product 4",
        image: product_4,
        price: 400,
        description: "Lorem ipsum dolor sit amet.",
        category: "Pendant Light"
    }, {
        _id: "5",
        name: "Product 5",
        image: product_5,
        price: 500,
        description: "Lorem ipsum dolor sit amet.",
        category: "Basket"
    }, {
        _id: "6",
        name: "Product 6",
        image: product_6,
        price: 600,
        description: "Lorem ipsum dolor sit amet.",
        category: "Lamp"
    }, {
        _id: "7",
        name: "Product 7",
        image: product_7,
        price: 700,
        description: "Lorem ipsum dolor sit amet.",
        category: "Chair"
    }, {
        _id: "8",
        name: "Product 8",
        image: product_8,
        price: 800,
        description: "Lorem ipsum dolor sit amet.",
        category: "Pendant Light"
    }, {
        _id: "9",
        name: "Product 9",
        image: product_9,
        price: 900,
        description: "Lorem ipsum dolor sit amet.",
        category: "Hamper"
    }, {
        _id: "10",
        name: "Product 10",
        image: product_10,
        price: 1000,
        description: "Lorem ipsum dolor sit amet.",
        category: "Mirror"
    }
]

export const category_list = [
    {
        category_name: "Chair",
        category_image: category_1
    }, {
        category_name: "Mirror",
        category_image: category_1
    }, {
        category_name: "Hamper",
        category_image: category_1
    }, {
        category_name: "Basket",
        category_image: category_1
    }, {
        category_name: "Table Lamp",
        category_image: category_1
    }, {
        category_name: "Pendant Light",
        category_image: category_1
    },
]

export const featured_product = [
    {
        featured_name: "Pendant Light",
        featured_image: featured_1
    }, {
        featured_name: "Chair",
        featured_image: featured_2
    }, {
        featured_name: "Mirror",
        featured_image: featured_3
    }, {
        featured_name: "Basket",
        featured_image: featured_4
    }, {
        featured_name: "Table Lamp",
        featured_image: featured_5
    }, {
        featured_name: "Hampars",
        featured_image: featured_6
    }
]