import React from 'react';
import About from './components/About';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Layout from './components/layout/Layout';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


const App = () => {

  return (
    <Router>
       <Layout>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/dog" element={<Dog/>} />
          <Route path="/cat" element={<Cat/>} />
        </Routes>
      </Layout>
    </Router>
   
  )
}

export default App;








// const App = () => {

//   const [page, setPage] = useState('about');

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li><button onClick={()=>setPage('about')}>About</button></li>
//           <li><button onClick={()=>setPage('cat')}>Cat</button></li>
//           <li><button onClick={()=>setPage('dog')}>Dog</button></li>
//         </ul>
//       </nav>

      
//       {page === 'about' && <About />}
//       {page === 'dog' && <Dog />}
//       {page==='cat' && <Cat/>}



//     </div>
//   )
// }

// export default App