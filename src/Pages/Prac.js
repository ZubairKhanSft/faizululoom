import { Create, Delete, Edit, Visibility } from '@mui/icons-material';
import { Box, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,Button} from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Prac = () => {

    const [data, setData] = useState([]);
    console.log("data2", data)
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserEmail = async () => {
            try {
                const result = await axios.get('http://103.211.202.61:8095/api/UserRole/getall-pagination');
                console.log("data", result.data)

                if (result.status == 200) {
                    setData(result.data.data);
                    console.log("data1", data)

                }
            }
            catch (error) {
                console.error('error on fetching data', error);
            }
        };
        fetchUserEmail()
    }, []);

    const handleShow = (id) => {
        navigate(`/show/${id}`)
    }
    return (
        <>
            <Grid container>
            
                <Box sx={{ margin: 'auto' }}>
                <Button component={Link} variant='contained'sx={{backgroundColor:'primary'}} to={`/create`}>Create
                    <IconButton >
                        <Create />
                    </IconButton>
                 </Button>
                    <TableContainer component={Paper}>
                        <Table sx={{ width: '35rem' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell> Sr.No</TableCell>
                                    <TableCell> RoleName</TableCell>
                                    <TableCell> Action</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {
                                    data.map((row, i) => {
                                        console.log('row',row)
                                        return (
                                            <TableRow>
                                                <TableCell>{i + 1}</TableCell>
                                                <TableCell>{row.roleName}</TableCell>
                                                <TableCell>
                                                    <IconButton onClick={() => handleShow(row.id)}>
                                                        <Visibility />
                                                    </IconButton>
                                                    <IconButton>
                                                        <Edit />
                                                    </IconButton>
                                                    <IconButton>
                                                        <Delete />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>

        </>
    )
}

export default Prac