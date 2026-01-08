import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { Navbar } from "../../components/navbar";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://127.0.0.1:5000/signup",
                user,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            alert(response.data.message);
            navigate("/login");
        } catch (err) {
            console.log("Signup error full:", err);

            if (err.response) {
                // Server responded with status code (4xx / 5xx)
                console.log("Response data:", err.response.data);
                console.log("Status:", err.response.status);
                alert(err.response.data.message || "Server error");
            } else if (err.request) {
                // Request was made but no response
                console.log("No response received:", err.request);
                alert("No response from server");
            } else {
                // Something else happened
                console.log("Error message:", err.message);
                alert(err.message);
            }
        }

    };

    return (
        <>
            <Navbar />
            <motion.div className="min-h-screen flex items-center justify-center">
                <motion.form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500"
                >
                    <h2 className="text-3xl text-white text-center mb-6">
                        Create Account
                    </h2>

                    <input
                        name="name"
                        placeholder="Full Name"
                        required
                        onChange={handleChange}
                        className="w-full mb-4 p-3 rounded"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        className="w-full mb-4 p-3 rounded"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={handleChange}
                        className="w-full mb-4 p-3 rounded"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        required
                        onChange={handleChange}
                        className="w-full mb-6 p-3 rounded"
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded"
                    >
                        Sign Up
                    </button>

                    <p className="text-white text-center mt-4">
                        Already have an account?
                        <span
                            className="ml-2 underline cursor-pointer"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </span>
                    </p>
                </motion.form>
            </motion.div>
        </>
    );
}
