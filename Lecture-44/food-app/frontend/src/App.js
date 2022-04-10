import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Layout from './components/layouts/Layout';
import AllFood from './pages/AllFood';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
            <Route path="/allfoods" element={<AllFood/>} />
        </Routes>
      </Layout>  
    </Router>
  )
}

export default App