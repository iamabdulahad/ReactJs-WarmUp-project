import React from 'react'
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import { useLocation } from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';

const App = () => {

  const {search,pathname} = useLocation();


  return (
    <div className='h-screen w-full  flex'>

{(pathname != "/" || search.length > 0)  && (   <Link  to="/" className="absolute left-1/2 top-6 bg-blue-200 px-3 py-1 rounded-full font-semibold">Home</Link>
) }
      

      <Routes>

        <Route path='/create' element={<Create />} />
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/edit/:id' element={<Edit />} />

      </Routes>

     
      
    </div>
  )
}

export default App