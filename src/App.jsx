import { Provider } from "react-redux"
import { Body } from "./Components/Body"
import { Head } from "./Components/Head"
import store from "./utils/Store"
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import Demo from "./Components/Demo";

function App() {
 const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[ {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "/Watch",
      element: <WatchPage/>
    },
    {
      path: "/Demo",
      element: <Demo/>
    }
  ]
  }
 ])

  return (
    <Provider store={store}>
      <>
        <Head/>
          <RouterProvider router={appRouter}/>
        {/* Head
        Body
          - SideBar
          - Menu Items
        - Main Container
          - ButtonsLists
          - Video Container
            - Video card */}
      </>
    </Provider>
  )
}

export default App
