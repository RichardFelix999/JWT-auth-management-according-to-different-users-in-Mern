import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { email, password } from "../icon";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
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
        // console.log("Form submitted:", formData);

        try {
            const response = await fetch(`${BACKEND_URL}/api/auth/SignIn`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            // console.log(data);

            if (response.ok) {
                // Save the token in local storage
                storeTokenInLocalStorage(data.token);

                setFormData({
                    email: "",
                    password: "",
                });

                toast.success("Login successful"); // Success toast message
                // Redirect to the home page
                navigate("/");
            } else {
                toast.error(data.message[0]?.message || "Login failed");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again."); // Error toast message
        }
    };

    return (
        <div className="w-[750px] h-[1334px] items-center flex flex-col justify-around bg-gray-400 rounded-[25px] pt-[30px] pb-[30px]">
            <h2 className="mb-6 text-center text-5xl font-bold text-white">
                Log In
            </h2>
            <form onSubmit={handleSubmit} className="space-y-[51px]">

                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {email}
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="off" placeholder="Email" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>
                <div className="w-[650px] h-[100px] rounded-[16px] border-white border-2 flex space-x-[40px] bg-gray-400 items-center pl-[40px]">
                    {password}
                    <input type="password" id="password" name="password" value={formData.password} required onChange={handleChange} autoComplete="off" placeholder="Password" className="pl-[38px] placeholder:text-white border-l-2 border-white rounded-r-[16px]  h-[100%] bg-gray-400 text-white text-[30px] w-[550px] focus:outline-none" />
                </div>
                <button
                    type="submit"
                    className="w-[650px] h-[100px] rounded-[16px] bg-blue-600 text-center text-white text-[30px] transition duration-200 hover:bg-blue-700">
                    Log In
                </button>
            </form>
            <a className="text-white text-[30px] cursor-pointer hover:underline">Forgot password?</a>

        </div>
    );
};

export default SignIn;
