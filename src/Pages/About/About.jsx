import { faDownload } from "@fortawesome/free-solid-svg-icons";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";
import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";
import Skills from "../../Components/Skills/Skills";
import resume from '../../assets/resume/Resume_of_Md_Hasan_kha.pdf'

const About = () => {

    // handle download resume btn



    return (
        <div className="bg-[#1F1F1F] h-[200%]">
            <PrimaryTitle first={'About'} last={'Me'}></PrimaryTitle>
            <div className="flex text-white">
                <div className="w-[40%] px-4">
                    <h1 className="text-stat text-4xl font-bold mb-10">Personal Infos</h1>
                    <div className="grid grid-cols-2 gap-12 overflow-hidden">
                        {/* name */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">Full Name:</span>
                            <p className='font-bold text-xl text-gray-300'>MD. Hasan Kha</p>
                        </div>

                        {/* nationality */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">Nationality:</span>
                            <p className='font-bold text-xl text-gray-300'>Bangladeshi</p>
                        </div>

                        {/* address */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">Address:</span>
                            <p className='font-bold text-xl text-gray-300'>Dhaka, Bangladesh</p>
                        </div>

                        {/* phone */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">Phone:</span>
                            <p className='font-bold text-xl text-gray-300'>+880 1646448338</p>
                        </div>

                        {/* email */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">Email:</span>
                            <p className='font-bold text-xl text-gray-300 text-clip'>mdhasankha.wd@gmail.com</p>
                        </div>

                        {/* language */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">language:</span>
                            <p className='font-bold text-xl text-gray-300'>Bangla, English</p>
                        </div>

                    </div>
                    <div className="flex justify-start items-center mt-16">
                        <a href={resume}>
                            <PrimaryBtn text={'Download Resume'} icon={faDownload}>
                            </PrimaryBtn>
                        </a>

                    </div>
                </div>
                <div className="w-[60%]">
                    <p className="text-justify pr-24 leading-8 text-xl tracking-wider">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                </div>
            </div>
            <div className="py-20 text-white">
                <h1 className="text-center text-4xl uppercase">My Skills</h1>
                <div className="w-[50%] mx-auto my-10">
                    <Skills></Skills>
                </div>
            </div>
        </div>
    );
};

export default About;