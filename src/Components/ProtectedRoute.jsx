import React from 'react'
import { AuthContext } from '../App'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

  let {islogin} = useContext(AuthContext);

  if(!islogin){
    return <Navigate to={"/login"}/>
  }
  return children;
}

export default ProtectedRoute