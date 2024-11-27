import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { email, password, user } from "../icon";

// import Sign from "../components/sigin";
// import { signUp } from "../fakeData/fakeDB";

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const navigate = useNavigate();
    const { storeTokenInLocalStorage } = useAuth();

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; // Getting the backend URL(localhost:3000) from the .env file

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log("Form submitted:", formData);

        try {
            const response = await fetch(`${BACKEND_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Set content type to JSON
                },
                body: JSON.stringify(formData), // Convert JS object to JSON string
            });
            const data = await response.json();
            // console.log(data.message);

            // Clearning the form after submission
            if (response.ok) {
                // Save the token in local storage
                storeTokenInLocalStorage(data.token);

                setFormData({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });

                toast.success("Registration successful!");
                // Redirect to the login page
                navigate("/login");
            } else {
                // console.log(data.message[0].message);

                toast.error(data.message[0]?.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="w-[750px] h-[1334px] items-center flex flex-col justify-around bg-gray-400 rounded-[25px] pt-[30px] pb-[30px]">
            <h2 className="mb-6 text-center text-5xl font-bold text-white">
                Sign Up
            </h2>
            <form onSubmit={handleSubmit} className="space-y-[51px]">
                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {user}
                    <input required type="text" id="username" name="username" value={formData.username} onChange={handleChange} autoComplete="off" placeholder="Username" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>

                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {email}
                    <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off" placeholder="Email" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>

                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {password}
                    <input required type="password" id="password" name="password" value={formData.password} onChange={handleChange} autoComplete="off" placeholder="Password" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>

                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {password}
                    <input required type="password" id="phone" name="phone" value={formData.phone} onChange={handleChange} autoComplete="off" placeholder="Confirm" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>

                <button
                    type="submit"
                    className="w-[650px] h-[100px] rounded-[16px] bg-blue-600 text-center text-white text-[30px] transition duration-200 hover:bg-blue-700"
                >
                    Sign up
                </button>
            </form>
            <a className="text-white text-[30px] cursor-pointer hover:underline">Already have an account?</a>
        </div>
    );
};

export default SignUp;
