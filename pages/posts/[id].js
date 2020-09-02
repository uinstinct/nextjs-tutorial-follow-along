import Head from 'next/head'

import Layout from '../../components/layouts'
import Date from '../../components/date'

import utilStyles from '../../styles/utils.module.css'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() { // THIS IS A NEXTJS HOOK
    const paths = getAllPostIds();
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) { // THIS IS ALSO A NEXTJS HOOK
    const postData = await getPostData(params.id)
    return { props: { postData } };
}

export default function Post(props) {
    const { postData } = props;
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

