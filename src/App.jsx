import { createContext, useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useEffect } from 'react';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Profile from './Components/Profile';
import Courses from './Components/Courses';
import DashboardOverview from './Components/DashboardOverview';
import Layout from './Components/Layout';
import ProtectedRoute from './Components/ProtectedRoute';
import './App.css'
import Coursedetails from './Components/Coursedetails';



let router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Layout/>,
            children: [

                {
                    index:true,
                    element:<Home/>
                },

                {
                    path:'login',
                    element:<Login/>
                },

                {
                    path:'*',
                    element:<NotFound/>
                    
                },
            
                {
                    path:'dashboard',
                    element:
                        <ProtectedRoute>
                            <Dashboard/>
                        </ProtectedRoute>,
                
                    children:[
                
                        {
                            index:true,
                            element:<DashboardOverview/>
                            
                        },
                
                        {
                            path:'profile',
                            element:<Profile/>
                        },
                
                        {
                            path:'courses',
                            element:<Courses/>
                        },

                        {
                            path:'courses/:id',
                            element:<Coursedetails/>
                        }
                    ]
                }
            ]
        },
    ]
);

let AuthContext = createContext();

function App() {

    let [islogin, setIslogin] = useState(()=> {
        return localStorage.getItem("islogin") === "true";
    });

    useEffect(()=> {
        localStorage.setItem("islogin",islogin);
    },[islogin]);

    return(
        <div>
            <AuthContext.Provider value={{islogin,setIslogin}}>
                <RouterProvider router={router}></RouterProvider>
            </AuthContext.Provider>
        </div>
    );
}

export default App
export {AuthContext}
