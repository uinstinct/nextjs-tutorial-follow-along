import Layout from '../../components/layouts'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return { props: { postData } };
}

export default function Post(props) {
    const { postData } = props;
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    );
}

