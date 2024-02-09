import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';

import Product from '../models/Product';
import Portfolio from '../models/Portfolio';
import Service from '../models/Service';
import Post from '../models/Post';

import PostItem from '../components/PostItem';
import FeaturedPosts from '../components/FeaturedPosts';
import db from '../utils/db';
import { Store } from '../utils/Store';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import Newsletter from '../components/Newsletter';
import PostsFeatured from '../components/PostsFeatured';
import Ads from '../components/AdsSquare';
import AdsVideo from '../components/AdsVideo';
import AdsBannerAdcash from '../components/AdsBannerAdcash';

import Lesedi from '../components/Lesedi';
import Lesedi3jantotry from '../components/Lesedi3jantotry';
export default function Home({ products,departments, posts, services, portfolio, galleries, eventss ,featuredProducts }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });

    toast.success('Product added to the cart');
  };

  return (
    <Layout title="Home Page">
       <Lesedi3jantotry products={products} posts={posts}/>
       <AdsVideo/>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean().limit(6);
  const portfolioes = await Portfolio.find().lean().limit(6);
  const posts = await Post.find().lean().limit(6);
  const services = await Service.find().lean().limit(6);
  const featuredProducts = await Product.find({ isFeatured: true }).lean();
  return {
    props: {
      featuredProducts: featuredProducts.map(db.convertDocToObj),
      products: products.map(db.convertDocToObj),
      portfolioes: portfolioes.map(db.convertDocToObj),
      posts: posts.map(db.convertDocToObj),
      services: services.map(db.convertDocToObj),
    },
  };
}
