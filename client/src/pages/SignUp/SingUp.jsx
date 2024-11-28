
import { email, password, user } from "../../fakeDB/icon";

// import Sign from "../components/sigin";
// import { signUp } from "../fakeData/fakeDB";

const Signup = () => {

    return (
        <div className="w-[750px] h-[1334px] items-center flex flex-col justify-around bg-gray-400 rounded-[25px] pt-[30px] pb-[30px]">
            <h2 className="mb-6 text-center text-5xl font-bold text-white">
                Sign Up
            </h2>
            <form className="space-y-[51px]">
                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {user}
                    <input required type="text" id="username" name="username" autoComplete="off" placeholder="Username" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>

                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {email}
                    <input required type="email" id="email" name="email" autoComplete="off" placeholder="Email" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>

                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {password}
                    <input required type="password" id="password" name="password" autoComplete="off" placeholder="Password" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>

                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {password}
                    <input required type="password" id="phone" name="phone" autoComplete="off" placeholder="Confirm" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>

                <button
                    type="submit"
                    className="w-[650px] h-[100px] rounded-[16px] bg-blue-600 text-center text-white text-[30px] transition duration-200 hover:bg-blue-700"
                >
                    Sign up
                </button>
            </form>
            <a href="http://localhost:3000" className="text-white text-[30px] cursor-pointer hover:underline">Already have an account?</a>
        </div>
    );
};

export default Signup;
