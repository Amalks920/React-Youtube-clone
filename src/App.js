
import './App.css';
import MainContainer from './components/MainContainer';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import WatchPage from './components/WatchPage';

const appRouter=createBrowserRouter([
  {
  path:"/",
  element:<MainContainer />,
  children:[
    {
      path:"/",
      element:<Body />
    },
    {
      path:"watch",
      element:<WatchPage />
    }
  ]
}
])

function App() {
  return (
  <Provider store={store}>
   <div className='w-screen h-screen border border-b-green-700'>
     <Head />
     <RouterProvider router={appRouter}/>
    {/* <MainContainer /> */}
   </div>
   </Provider>
  
  );
}

export default App;
