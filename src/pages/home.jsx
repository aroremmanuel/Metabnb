import Hero from '../components/hero.jsx';
import Wallets from '../components/wallets.jsx';
import Inspiration from '../components/inspiration.jsx';
import Metanfts from '../components/metanfts.jsx';

function Home() {
    return (
        <div>
            <Hero />
            <Wallets />
            <Inspiration />
            <Metanfts />
        </div>
    );
}

export default Home;