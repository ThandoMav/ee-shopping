import Axios from "axios";
import { getServerSideSitemap } from "next-sitemap";

//import { getServerSideProps, getServerSideSitemap } from "next-sitemap";


export async function getServerSideProps(context){

	const response = await Axios.get(`https://www.sastudentgroove.co.za/search-posts`);

	const posts = await request.json();

	const fields = posts?.map((item) => ({
		loc: `https://www.sastudentgroove.co.za/post/${item.url}`,
		lastmodi : new Date().toISOString()
	}));
	return getServerSideSitemap(context, fields);

}

export default function Site(){}
