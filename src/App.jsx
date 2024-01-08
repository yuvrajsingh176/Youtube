import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import { Provider, useDispatch } from 'react-redux';
import store from './utils/appStore'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import { youtubeapi } from './utils/constants';
import { addVideoContent } from './utils/videosSlice';
import Results from './components/Results';
const appRouter = createBrowserRouter([
  
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
element:<MainContainer/>
      },
      {
        path: "watch",
element:<WatchPage/>
      },
      {
        path: "results",
        element:<Results/>
      }
    ]
}
])
function App() {
  
  return (

    <Provider store={store}>
      <div className="  ">
      <Head />
        
      <RouterProvider router={appRouter}/>

      <Body/>
      </div>
    </Provider>
      
  )
}

export default App
