import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const Home = () => {
    return (
        <div className="">
            <Head>
                <title>Apple Redesign</title>
            </Head>

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="relative h-[200vh] bg-[#E7ECEE]">
                {/* Hero */}
                <Hero />
            </main>
        </div>
    );
};

export default Home;
