import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import 'antd/dist/antd.css'
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`http://api.keqingbot.xyz:5050/api/market`)
		.then((response) => console.log(response.body));
	}, []);


	return (
		<Layout description={siteConfig.tagline}>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>Keqing Bot</title>
				<meta name="title" content="Keqing Bot"/>
				<meta name="description" content="Karuta Multi-functions Bot."/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="Keqing Bot"/>
				<meta property="og:description" content="Karuta Multi-functions Bot."/>
				<meta property="og:image" content="https://i.imgur.com/hBWsePe.png"/>

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image"/>
				<meta property="twitter:title" content="Keqing Bot"/>
				<meta property="twitter:description" content="Karuta Multi-functions Bot."/>
				<meta property="twitter:image" content="https://i.imgur.com/hBWsePe.png"/>
			</Head>
			<main>
				<table>

				</table>
			</main>
		</Layout>
	);
}
