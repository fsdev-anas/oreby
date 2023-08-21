import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from 'react-router-dom'
import RootLayout from './components/layout/RootLayout'
import Home from './components/pages/Home'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />}></Route>
    </Route>
  ))

  return <RouterProvider router={router} />
}

export default App
