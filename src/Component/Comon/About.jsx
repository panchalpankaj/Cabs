
import Carlogo_and_text from "./Carlogo_and_text"
import Foter from "./Foter"
import Navbar from "./Navbar"
import PropsPract from "./PropsPract"


const About = () => {


return(
    <>
        <Navbar/>
        <PropsPract Heading={'About Us'}/>
        <div className="mt-96">
        <Carlogo_and_text heading1={'Trusted Cab Services in India'} />
        <img src="images/aboutimage.png" className="mx-14 mt-7"></img>
        <div className="text-center mt-4 text-xl font-semibold ">
        <p className="border-b-2 border-lime-500 w-40 items-center justify-center text-center">How its work </p>
        
        </div>
       </div>
       <Foter/>
    </>
)
}

export default About