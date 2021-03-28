import { useState } from 'react'

export const useToken = props => {
  // Get from sessionStorage the token
  const getToken = () => {
    const tokenString = sessionStorage.getItem( 'token' )
    const parseToken  = JSON.parse( tokenString )
    return parseToken?.token
  }

  const [ token, setToken ] = useState( getToken() )
  // set the toke to the new value of the token
  const saveToken = userToken => {
    // Change to LocalStorage if you want it
    sessionStorage.setItem( 'token', JSON.stringify( userToken ) )
    setToken( userToken.token )
  }
  // return in an Object the token and the saveToken as setToken
  return {
    token,
    setToken: saveToken
  }
  
}