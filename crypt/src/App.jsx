
import './App.css'
import Dashboard from './pages/Dashboarb/Dashboard'
import "@fontsource/ubuntu";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transactions from './pages/Dashboarb/components/Transaction';
import Transaction from './pages/Dashboarb/Transaction/Transaction';
import TransactionPage from './pages/Dashboarb/Transaction/Transaction';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Transactions",
    element: <TransactionPage />,
  },

]);

function App() {


  return (
    <>
      <RouterProvider router={router} />
      {/* <Dashboard /> */}
    </>
  )
}

export default App
