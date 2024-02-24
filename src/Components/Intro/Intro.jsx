import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import linkedIn from "../../assets/linkedin_icon.ico"
import github from "../../assets/github_icon.ico"
import lc from "../../assets/leetcode.ico"
const Intro = () => {
  return (
    <div
      name="About"
      className="h-screen w-full bg-black"
    >
      <div className="max-w-screen-lg mx-auto  items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">Yugandhar Ravi Kiran</h1>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a passionate developer who loves to build web applications and solve complex problems using programming languages like Java, Python and 
            Proficient in JavaScript, NodeJS, ReactJS , Express and MongoDB.
          </p>
          <div className="flex gap-5 py-3">
            <a href="https://www.linkedin.com/in/ravi-kiran-95735a203/" target="_blank" rel="noopener noreferrer">
            <img  className="bg-white overflow-hidden h-8 w-8 rounded-md shadow-md shadow-blue-500"src={linkedIn} alt="" />
            </a>
            <a href="https://github.com/ravikiran46" target="_blank" rel="noopener noreferrer">
            <img  className="bg-white overflow-hidden h-8 w-8 rounded-md shadow-md shadow-gray-500"src={github} alt="" />
            </a><a href="https://leetcode.com/RaviKiran4/" target="_blank" rel="noopener noreferrer">
            <img  className="bg-white overflow-hidden h-8 w-8 rounded-md shadow-md shadow-orange-500"src={lc} alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1sfWEtun_xz0i_9Pn9Ypw0cz_RozBUMQC/view?usp=drive_link"
              target="_blank" rel="noopener noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Intro
