import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { Button, Grid, Stack } from '@mui/material';
import React from 'react';

function Services() {
    return (
        <>
            <h1 className="text-center my-5">SERVICES</h1>
            <Grid container >
                <Grid xs={12} sm={6} md={6} spacing={3}>
                    <Card component={Stack} spacing={3} className='mx-2 mt-3 customCard'>
                        <Stack className='flex justify-center align-items-center mx-2 py-3'>
                            <Box
                                component="img"
                                src="/assets/images/individual_counselling.png"
                                sx={{ width: 200, height: 150 }}
                                alt='failed_image'
                            />
                            <Typography variant="h4"> Individual Counselling</Typography>

                            <Typography variant="subtitle2" sx={{ color: 'text.disabled', padding: "2px", marginTop: "10px" }}>
                                Individual counselling is one-on-one counselling between a client & a therapist, in a safe & confidential environment.

                            </Typography>
                            <Button variant="contained" color="primary" className='mt-4'>
                                Book A Session
                            </Button>
                        </Stack>
                    </Card>

                </Grid>
                <Grid xs={12} sm={6} md={6} spacing={3}>
                    <Card component={Stack} spacing={3} className='mx-2 mt-3 customCard'>
                        <Stack className='flex justify-center align-items-center mx-2 py-3'>
                            <Box
                                component="img"
                                src="/assets/images/career_progress.png"
                                sx={{ width: 200, height: 150 }}
                                alt='failed_image'
                            />
                            <Typography variant="h4"> Career Guidance & Counselling</Typography>

                            <Typography variant="subtitle2" sx={{ color: 'text.disabled', padding: "2px", marginTop: "10px" }}>
                                Career counselling is a process that focuses on helping a person understand their own self, as well as the work trends so that one can make an informed choice about their career
                            </Typography>
                            <Button variant="contained" color="primary" className='mt-4'>
                                Book A Session
                            </Button>
                        </Stack>
                    </Card>

                </Grid>
                <Grid xs={12} sm={6} md={6} spacing={3}>
                    <Card component={Stack} spacing={3} className='mx-2 mt-3 customCard'>
                        <Stack className='flex justify-center align-items-center mx-2 py-3'>
                            <Box
                                component="img"
                                src="/assets/images/workspace.png"
                                sx={{ width: 200, height: 150 }}
                                alt='failed_image'
                            />
                            <Typography variant="h4"> Workplace Counselling</Typography>

                            <Typography variant="subtitle2" sx={{ color: 'text.disabled', padding: "2px", marginTop: "10px" }}>
                                Workplace counselling is an employee support intervention that is usually short term in nature & provides an independent, specialist resource for people working across all sectors.
                            </Typography>
                            <Button variant="contained" color="primary" className='mt-4'>
                                Book A Session
                            </Button>
                        </Stack>
                    </Card>

                </Grid>
                <Grid xs={12} sm={6} md={6} spacing={3}>
                    <Card component={Stack} spacing={3} className='mx-2 mt-3 customCard'>
                        <Stack className='flex justify-center align-items-center mx-2 py-3'>
                            <Box
                                component="img"
                                src="/assets/images/depressed.png"
                                sx={{ width: 200, height: 150 }}
                                alt='failed_image'
                            />
                            <Typography variant="h4"> De-addiction Counselling
                            </Typography>

                            <Typography variant="subtitle2" sx={{ color: 'text.disabled', padding: "2px", marginTop: "10px" }}>
                                The counselling provided to individuals having an addiction issue is referred to as de-addiction counselling.

                            </Typography>
                            <Button variant="contained" color="primary" className='mt-4'>
                                Book A Session
                            </Button>
                        </Stack>
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}

export default Services;