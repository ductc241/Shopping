import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
    const auth = useSelector(state => state.auth)
    if(auth.authenticated) return children

    return (
        <Navigate to="/login" />
    )
}

export default RequireAuth