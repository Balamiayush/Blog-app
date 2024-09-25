import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'

const App = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(ture)
  useEffect(() => {
    authService.getCurrentUser()
      .then(
        (userData) => {
          if (userData) {
            dispatch(login({ userData }))
          }
          else {
            dispatch(logout())
          }
        }
      )
      .finally(
        () =>
          setLoading(false)
      )
  }, [])
  return (
    <div>App</div>
  )
}

export default App