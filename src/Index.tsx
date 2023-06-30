import * as React from 'react'; 
import * as ReactDOM from 'react-dom';
import Header from './components/Header';
import SignUp from './components/SignUp';
import About from './components/About';
import Choose from './components/Choose';
import Reviews from './components/Reviews';
import GetStarted from './components/GetStarted';
import ellipse from '../img/Ellipse1.png'

const AppLayout = () =>{
    return(
        <div className='w-[1440px]'>
            
                <div className='bg-polygon2  bg-no-repeat   w-[1870px] h-[1255px] absolute top-0  '></div>
                < div className="bg-polygon1  bg-no-repeat  w-[1310px] h-[777px] absolute top-0 left-[689px] "></div>
                <div className='bg-ellipse  bg-no-repeat w-[931px] h-[850px] absolute top-0'></div>
            
       <Header></Header>
       <SignUp></SignUp>
       <About></About>
       <Choose></Choose>
       <Reviews></Reviews>
       <GetStarted></GetStarted>
       </div>
    )
};

const root = document.getElementById('container');
ReactDOM.render(<AppLayout/>,root);