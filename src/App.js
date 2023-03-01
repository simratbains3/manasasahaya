import Cards from './components/Cards';
import Header from './components/Header';
import Intro from './components/Intro';
import Form from './components/Form';
import Desc from './components/Desc';
import Footer from './components/Footer';

function App() {
  return (
    <div className="md:max-xl:flex ">
     <Header></Header>
     <div className='space-y-4'>
     <Intro></Intro>
     <Cards></Cards>
     <div className='pr-10 pl-10 gap-5 grid grid-cols-2 md:grid-cols-4'>
     <div className='col-span-2'><Desc></Desc></div>
     <div className='col-span-2'><Form></Form></div>
     </div>
     <Footer></Footer>
     </div>
    
    </div>
  );
}

export default App;
