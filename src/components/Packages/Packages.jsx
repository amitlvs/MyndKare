import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, Grid, Stack } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';

import React from 'react';

function Packages() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center my-1">Packages</h1>
                <p className="text-center">Now you can gift a therapy to your loved ones</p>
                <Grid container >
                    <Grid xs={12} sm={6} md={3} spacing={3}>
                        <Card component={Stack} spacing={3} className='mx-2 mt-3 customCard'>
                            <Stack className='flex justify-center align-items-center mx-2 py-3'>
                                <Typography variant="p"> 4 SESSIONS VALID
                                    FOR 4 MONTHS</Typography>

                                <Typography variant="subtitle2" sx={{ color: 'text.disabled', padding: "2px", marginTop: "10px" }}>
                                    RS 3400
                                </Typography>
                                <Button variant="contained" color="primary" className='mt-4'>
                                    Book A Session
                                </Button>
                            </Stack>
                        </Card>

                    </Grid>
                    <Grid xs={12} sm={6} md={3} spacing={3}>
                        <Card component={Stack} spacing={3} className='mx-2 mt-3 customCard'>
                            <Stack className='flex justify-center align-items-center mx-2 py-3'>
                                <Typography variant="p"> 6 SESSIONS VALID
                                    FOR 6 MONTHS</Typography>

                                <Typography variant="subtitle2" sx={{ color: 'text.disabled', padding: "2px", marginTop: "10px" }}>
                                    RS 4500
                                </Typography>
                                <Button variant="contained" color="primary" className='mt-4'>
                                    Book A Session
                                </Button>
                            </Stack>
                        </Card>

                    </Grid>
                    <Grid xs={12} sm={6} md={3} spacing={3}>
                        <Card component={Stack} spacing={3} className='mx-2 mt-3 customCard'>
                            <Stack className='flex justify-center align-items-center mx-2 py-3'>
                                <Typography variant="p"> 8 SESSIONS VALID
                                    FOR 8 MONTHS</Typography>

                                <Typography variant="subtitle2" sx={{ color: 'text.disabled', padding: "2px", marginTop: "10px" }}>
                                    RS 5800
                                </Typography>
                                <Button variant="contained" color="primary" className='mt-4'>
                                    Book A Session
                                </Button>
                            </Stack>
                        </Card>

                    </Grid>
                    <Grid xs={12} sm={6} md={3} spacing={3}>
                        <Card component={Stack} spacing={3} className='mx-2 mt-3 customCard'>
                            <Stack className='flex justify-center align-items-center mx-2 py-3'>
                                <Typography variant="p"> 12 SESSIONS VALID
                                    FOR 12 MONTHS</Typography>

                                <Typography variant="subtitle2" sx={{ color: 'text.disabled', padding: "2px", marginTop: "10px" }}>
                                    RS 8000
                                </Typography>
                                <Button variant="contained" color="primary" className='mt-4'>
                                    Book A Session
                                </Button>
                            </Stack>
                        </Card>

                    </Grid>

                </Grid>
            </div>
        </>
    )
}

export default Packages;