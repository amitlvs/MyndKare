import Header from "../../components/Header";
import Packages from "../../components/Packages/Packages";
import Services from "../../components/Services/Services";
import Login from "../Login/Login";

export function Home() {
    return (
        <>
            <h1>
                WE CARE FOR YOUR MIND</h1>
            <p>Therapy in a safe & confidential environment.</p>
            <button>Book a Session</button>
            <button>About us</button>
            <h1>about us</h1>
            <p>We at MYNDkare provide you with a platform to connect with experts to discuss issues related to your personal, professional and academic life. Our professionally trained counsellors help you cope with any issue that you are facing.</p>
            <p>We assist you with your mental and emotional wellness as wellbeing is a state that ensures our optimum functioning in all realms of human life. Mental health plays a significant role in determining our health as whole, MYNDKare is an online platform that aims at helping individuals by providing safe space for them to explore their concerns and ways to deal with it.</p>
            <img src="" alt="image1" />
            <p>As the situation of Covid-19 continues to escalate around the world, we often wonder how we could contribute to society. MYNDKare empowers you to wrestle with your day to day issues and get equipped to sustain in this uncertain world – hence this wellness platform is here to aid people with stress and anxiety in personal & professional lives. One to one session helps in dealing with conflicts, work, stress, anxiety, career, anger, grief, trauma, loneliness, lack of motivation, self esteem and confidence, parenting and more in an absolutely anonymous & convenient manner over chat, audio calls and video calls.</p>
            <img src="assets/images/individual_counselling.png" alt="image2" />
            <p>We also offer services for employee wellness, Psychology (subject related), life coaching and other mental health related issues.</p>
            <button>Know About Experts</button>

            <Services />
            <Packages />
        </>
    )
}

export default Home;