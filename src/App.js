import './App.css';
import Banner from './components/Banner/index';
import Brand from './components/Brand';
import HotCategory from './components/Hot Category';
import Navbar from './components/Navbar/index';

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Brand />
            <HotCategory />    
        </>
    );
}

export default App;