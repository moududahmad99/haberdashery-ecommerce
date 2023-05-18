import './App.css';
import Navbar from './components/Navbar/index';
import Banner from './components/Banner/index';
import Brand from './components/Brand';
import HotCategory from './components/Hot Category';
import Products from './components/Products';
import BrandBanner from './components/Brand Banner';
import BestSeller from './components/Best Seller';
import SocialMedia from './components/Social Media';
import Footer from './components/Footer';

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
            <Footer/>
        </>
    );
}

export default App;