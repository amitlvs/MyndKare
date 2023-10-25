import { Button } from "@mui/material";
import Header from "../../components/Header";
import Packages from "../../components/Packages/Packages";
import Services from "../../components/Services/Services";
import Login from "../Login/Login";
import AboutUs from "../../components/About/AboutUs";

export function Home() {
    return (
        <>
            <h1 className="text-center">
                WE CARE FOR YOUR MIND</h1>
            <p className="text-center">Therapy in a safe & confidential environment.</p>
            <center>
                <Button variant="contained" color="primary" className='mt-4 mx-2'>
                    Book A Session
                </Button>
                <Button variant="contained" color="primary" className='mt-4'>
                    About Us
                </Button>
            </center>
            <AboutUs />

            <Services />
            <Packages />
        </>
    )
}

export default Home;