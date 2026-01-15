import { Navbar } from "../../components/navbar/index.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email:"",
    password:""
  });
  const onLoginChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/auth/login",loginDetails,
        {
          headers:{
            "Content-Type":"application/json"
          }
        }
      );
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center"
      >
        <motion.form
          variants={container}
          initial="hidden"
          animate="visible"
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 border border-white/30 rounded-2xl shadow-2xl p-8"
        >
          <motion.div variants={item} className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-sm text-white/80 mt-2">
              Login to continue your journey
            </p>
          </motion.div>

          <motion.div variants={item} className="relative mb-6">
            <input
              type="email"
              name="email"
              required
              title="Enter a valid email address"
              className="peer w-full bg-transparent border border-white/40 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-white"
              placeholder="Email"
              onChange={onLoginChange}
            />
            <label className="absolute left-4 top-3 text-white/70 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-indigo-600 peer-focus:px-1">
              Email address
            </label>
          </motion.div>

          <motion.div variants={item} className="relative mb-8">
            <input
              type="password"
              name="password"
              required
         onChange={onLoginChange}
              title="Password must contain uppercase, lowercase, number & special character"
              className="peer w-full bg-transparent border border-white/40 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-white"
              placeholder="Password"
            />
            <label className="absolute left-4 top-3 text-white/70 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-indigo-600 peer-focus:px-1">
              Password
            </label>
          </motion.div>

          <motion.button
            variants={item}
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white py-3 rounded-lg font-semibold tracking-wide hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            Login
          </motion.button>

          <motion.p
            variants={item}
            className="text-center text-sm text-white/80 mt-6"
          >
            Don’t have an account?
            <span
              className="ml-1 text-white font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </motion.p>
        </motion.form>
      </motion.div>
    </>
  );
};
