import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Show = () => {

    const{id} = useParams();
    const[data,setData] = useState();

    console.log('data',data);
    useEffect( () => {

        const fetchRoles = async () => {
                try{
                        const res = await axios.get(`http://103.211.202.61:8095/api/UserRole/getbyid?id=${id}`);
                       
                        if(res.status == 200){
                            setData(res.data.data);
                        }
                        console.log("result",data);
                }
                catch(error){
                    console.error("error",error)
                }
        }

        fetchRoles();
    },[id])
  return (
    <>
        <Box sx={{height:'90vh',background:'lightgrey'}}>
            <Typography variant='h5'>
                User Role Details
            </Typography>

            <Typography variant='p'> Id: {data?.id}</Typography>
            <Typography variant='p'> Rolename: {data?.roleName}</Typography>
            <Typography variant='p'> Status: {data?.status}</Typography>
            <Typography variant='p'> CreatedOn: {data?.createdOn}</Typography>
        </Box>
    </>
  )
}

export default Show