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

import InfluencerHero from '../components/InfluencerHero';
import InfluencerHome from '../components/InfluencerHome';
import InfluencerAbout from '../components/InfluencerAbout';
import InfluencerServices from '../components/InfluencerServices';
import InfluencerWork from '../components/InfluencerWork';
import InfluencerBlog from '../components/InfluencerBlog';
import InfluencerContact from '../components/InfluencerContact';
import InfluencerHomeAboutnServices1 from '../components/InfluencerHomeAboutnServices1';
import Mzansi from '../components/mzansigrove';
import Morgue from '../components/Morgue';
import Agency from '../components/Agency';
import Consulting from '../components/Consulting';
import Construction from '../components/Construction';
import Hosting from '../components/Hosting';
import Hospital from '../components/Hospital';

import Lesedi from '../components/Lesedi';

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
       <Lesedi />
       <FeaturedPosts posts={posts} />
       <Ads />
      <Carousel showThumbs={false} autoPlay>
        {featuredProducts.map((product) => (
          <div key={product._id}>
            <Link href={`/product/${product.slug}`} passHref>
              <a className="flex">
               <Image
                 unoptimized
                 alt={product.name}
                 height="100px"
                 width="100px"
                 className="align-middle rounded-full"
                 src={product.banner}
                />
              </a>
            </Link>
          </div>
        ))}
      </Carousel>
     <div className="flex justify-center mt-4">
         <Newsletter/>
      </div>
     <div className="flex justify-center mt-4 mb-4">
        <h2 className="h2 my-4">Latest Products</h2>
     </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}
            addToCartHandler={addToCartHandler}
          ></ProductItem>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-4">
         <Ads /><AdsVideo />
      </div>

      <Hospital />
      <Hosting />
      <Construction />
      <Consulting />

      <Agency />
      <Morgue />
       <InfluencerHome />
       <InfluencerHomeAboutnServices1 />
       <InfluencerAbout />
       <InfluencerServices />
       <InfluencerWork/>
       <InfluencerBlog />
       <InfluencerContact />

{/*
      <Hospital />
      <Hosting />
      <Construction />
      <Consulting />

      <Agency />
      <Morgue />
       <InfluencerHome />
       <InfluencerHomeAboutnServices1 />
       <InfluencerAbout />
       <InfluencerServices />
       <InfluencerWork/>
       <InfluencerBlog />
       <InfluencerContact />

*/}
           <Mzansi />

	<div className="flex justify-center mt-4 mb-4">
      <h2 className="h2 my-4">Latest Student Hacks</h2>
    </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <PostItem
            post={post}
            key={post.slug}
          ></PostItem>
        ))}
      </div>
      <div className="flex justify-center mt-4 mb-4">
         <Ads />
      </div>

        <div className="flex justify-center mt-4 mb-4">
           <Ads />
        </div>
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
