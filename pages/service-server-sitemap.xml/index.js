import Axios from "axios";
import { getServerSideSitemap } from "next-sitemap";

//import { getServerSideProps, getServerSideSitemap } from "next-sitemap";


export async function getServerSideProps(context){

	const response = await Axios.get(`https://www.sastudentgroove.co.za/search-jobs`);

	const posts = await request.json();

	const fields = posts?.map((item) => ({
		loc: `https://www.sastudentgroove.co.za/job/${item.url}`,
		lastmodi : new Date().toISOString()
	}));
	return getServerSideSitemap(context, fields);

}

export default function Site(){}
