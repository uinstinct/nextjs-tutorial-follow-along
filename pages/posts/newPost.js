import Head from 'next/head'
import Link from 'next/link';

import Layout from '../../components/layouts'

export default function () {
    return (
        <Layout>
            <Head>
                <title>NEW POST</title>
            </Head>
            <h1 style={{ color: 'green', backgroundColor:'orange' }}>Yo Yo, write a new post</h1>
            <h3>See the favicon of the page does not change</h3>
        </Layout>
        )
}