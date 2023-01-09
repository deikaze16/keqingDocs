import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import 'antd/dist/antd.css'
import { Col, Divider, Row, Statistic } from 'antd';
import {FaDiscord, FaRocket} from 'react-icons/fa'
import Head from '@docusaurus/Head';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--light', styles.heroBanner)}>
			<div className="container hero-text">
				<img src="/img/logo.png" alt="" width={100}/>
				<h1 className='text--primary'>{siteConfig.title}</h1>
				<h3>/* {siteConfig.tagline} */</h3>
				<a className="button button--primary" href="/intro"><FaRocket size={15} style={{'verticalAlign':'middle', 'marginRight': '.5rem'}} /> Getting Started</a>
			</div>
		</header>
	);
}

function Why() {
	return (
		<section>
			<div className="text--center">
				<Divider plain><h1>Why Keqing Bot?</h1></Divider>
				<h5>Already trusted by over :</h5>
				<br />
				<Row>
					<Col span={18} offset={4}>
						<Row>
							<Col span={7}>
								<Statistic title="Total servers" value={`32.8K+`} />
							</Col>
							<Col span={7}>
								<Statistic title="Total users" value={`8M+`} />
							</Col>
							<Col span={7}>
								<Statistic title="Server members" value={`6K+`} />
							</Col>
						</Row>
					</Col>
				</Row>
				<br />
				<a href="https://discord.com/oauth2/authorize?client_id=772642704257187840&permissions=2416307264&scope=bot%20applications.commands" target={"_blank"} className="button button--primary"><FaDiscord size={24} style={{'verticalAlign':'middle', 'marginRight': '.5rem'}} /> Invite Keqing</a>
			</div>
		</section>
	)
}

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout description={siteConfig.tagline}>
			<Head>
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9189479031277973" crossOrigin="anonymous"></script>
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
			<HomepageHeader />
			<main>
				<Why />
				<Divider plain><h1>Key Features</h1></Divider>
				<HomepageFeatures />
				<Divider plain><h3>And many more...</h3></Divider>
			</main>
		</Layout>
	);
}
