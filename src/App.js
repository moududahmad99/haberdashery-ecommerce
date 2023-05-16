import './App.css';
import Banner from './components/Banner/index';
import BestSeller from './components/Best Seller';
import Brand from './components/Brand';
import BrandBanner from './components/Brand Banner';
import HotCategory from './components/Hot Category';
import Navbar from './components/Navbar/index';
import Products from './components/Products';
import SocialMedia from './components/Social Media';

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Brand />
            <HotCategory />
            <Products/>
            <BrandBanner />
            <BestSeller />
            <SocialMedia />
        </>
    );
}

export default App;