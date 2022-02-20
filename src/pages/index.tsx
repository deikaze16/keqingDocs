import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import 'antd/dist/antd.css'
import { Col, Divider, Row, Statistic } from 'antd';
import {FaDiscord, FaRocket} from 'react-icons/fa'

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--light', styles.heroBanner)}>
			<div className="container">
				<img src="/img/logo.svg" alt="" width={100}/>
				<h1 className='text--primary'>{siteConfig.title}</h1>
				<h3>/* {siteConfig.tagline} */</h3>
				<a className="button button--primary" href="/docs/intro"><FaRocket size={15} style={{'verticalAlign':'middle', 'marginRight': '.5rem'}} /> Getting Started</a>
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
								<Statistic title="Total servers" value={`22K+`} />
							</Col>
							<Col span={7}>
								<Statistic title="Total users" value={`6M+`} />
							</Col>
							<Col span={7}>
								<Statistic title="Server members" value={`4K+`} />
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
		<Layout
			title={siteConfig.title}
			description={siteConfig.tagline}>
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
