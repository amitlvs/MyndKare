import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Button, Grid, Stack } from '@mui/material';
import React from 'react';
function AboutUs() {
    return (
        <>
            <h1 className="text-center my-5">About Us</h1>
            <Card className='p-4'>
                <p className='text-center mb-5'>We at <b>MYNDkare</b>  provide you with a platform to connect with experts to discuss issues related to your personal, professional and academic life. Our professionally trained counsellors help you cope with any issue that you are facing.</p>
                <Grid container >

                    <Grid xs={6}>
                        <Stack>
                            <p>We assist you with your mental and emotional wellness as wellbeing is a state that ensures our optimum functioning in all realms of human life. Mental health plays a significant role in determining our health as whole, MYNDKare is an online platform that aims at helping individuals by providing safe space for them to explore their concerns and ways to deal with it.</p>

                        </Stack>
                    </Grid>
                    <Grid xs={6}>
                        <Stack> <Stack>  <Box
                            component="img"
                            src="/assets/images/welness.png"
                            sx={{ width: 200, height: 150 }}
                            alt='failed_image'
                        /></Stack></Stack>
                    </Grid>
                    <Grid xs={6}>
                        <Stack><Stack>  <Box
                            component="img"
                            src="/assets/images/collaborative_team.png"
                            sx={{ width: 200, height: 150 }}
                            alt='failed_image'
                        /></Stack></Stack>
                    </Grid>
                    <Grid xs={6}>
                        <p>As the situation of Covid-19 continues to escalate around the world, we often wonder how we could contribute to society. MYNDKare empowers you to wrestle with your day to day issues and get equipped to sustain in this uncertain world – hence this wellness platform is here to aid people with stress and anxiety in personal & professional lives. One to one session helps in dealing with conflicts, work, stress, anxiety, career, anger, grief, trauma, loneliness, lack of motivation, self esteem and confidence, parenting and more in an absolutely anonymous & convenient manner over chat, audio calls and video calls.</p>

                    </Grid>
                </Grid>

                <p className='text-center'>We also offer services for employee wellness, Psychology (subject related), life coaching and other mental health related issues.</p>
                <center>
                    <Button variant="contained" color="primary" className='mt-4 text-center'>
                        Know About Experts
                    </Button>
                </center>
            </Card>

        </>
    )
}

export default AboutUs;