import './App.css'
import Home from './Home/Home'
import FirstPage from './FirstPage/FirstPage'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import { createBrowserRouter , RouterProvider , createHashRouter } from 'react-router-dom'

function App() {
  let route = createHashRouter([
    {path: '',element: <FirstPage />,children:[ 
        { path: '', element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Portfolio', element: <Portfolio /> },
        { path: 'Contact', element: <Contact /> }
      ]
    }
  ],
  { basename: '/' }
)
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}
export default App
