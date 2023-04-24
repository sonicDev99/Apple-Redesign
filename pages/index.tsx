import Head from 'next/head';
import Header from '@/components/Header';

const Home = () => {
    return (
        <div className="">
            <Head>
                <title>Apple Redesign</title>
            </Head>

            {/* Header */}
            <Header />
        </div>
    );
};

export default Home;
