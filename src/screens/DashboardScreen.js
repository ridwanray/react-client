import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Datas from "../components/Datas";
function DashboardScreen({history}) {

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
    }, [history, userInfo])

    return (
        <div>
           <div className='d-flex justify-content-center'>DashboardScreen</div>  

           <Datas />
        </div>
    )
}

export default DashboardScreen
