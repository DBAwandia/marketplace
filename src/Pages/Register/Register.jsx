import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from "../../Utils/BaseUrl"

function Register() {
    const [ error , setError ] = useState(false)
    const [ showPassword, setShowPassword ] = useState(false)
    const [ loading , setLoading ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ phonenumber, setPhonenumber ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ username, setUsername ] = useState("")

    const navigate = useNavigate()

    //DISMISS ERROR
    useEffect(()=>{
       if(error){
        setTimeout(()=>{
            setError(false)
        },4000)
       }
    },[error])

    const handleClick = async(e) =>{
        e.preventDefault()
        if(phonenumber.length === 0 || username.length === 0 || email.length === 0 || password.length === 0){
                setError(true)
                
                }else{
                    setLoading(true)
                    try{
                        await axiosInstance.post("/Users/register" , 
                            {
                                password,
                                phonenumber,
                                email,
                                username
                            }
                        )
                        toast.success("Succesfully registered")
                        setTimeout(()=>{
                            navigate("/login")
                        }, 3200)
            
                    }catch(err){
                        setLoading(false)
                        toast.error(err.response.data)
                    }
                }
       
    }


  return (
    <div className='w-full grid items-center justify-center h-screen bg-[url("https://wallpaperaccess.com/full/1092587.jpg")] bg-cover '>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

        <div className='w-[70rem] min-h-0 bg-[white] text-[2rem] shadow-2xl rounded-2xl'>
        <div className='flex flex-col gap-[2rem] pb-[5rem] pt-[2rem] px-[3rem]'>
            <div className='self-center text-[3rem] font-bold'>
                <h1>Register</h1>
            </div>

           {error && username.length === 0  ? <p className='self-center text-[#ef4444]'>Username is required</p> : ""}
            {error && phonenumber.length === 0 ?<p className='self-center text-[#ef4444]'>Phonenumber is required</p>: ""}
            {error &&  email.length === 0 ?<p className='self-center text-[#ef4444]'>Email is required</p>: ""}
            {error && password.length === 0  ?<p className='self-center text-[#ef4444]'>Password is required</p>: ""}
            
            <div className='flex items-center gap-[2rem]'>
                <div className='flex flex-col gap-[1rem] w-full'>
                    <label className='font-bold'>Phone number</label>
                    <input 
                        className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                        type="number" 
                        placeholder='Enter phonenumber' 
                        onChange={(e)=> setPhonenumber(e.target.value)}

                    />
                </div>
                <div className='flex flex-col gap-[1rem] w-full'>
                    <label className='font-bold'>Username</label>
                    <input 
                        className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                        type="text" 
                        placeholder='Enter username' 
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>
            </div>

            <div className='flex items-center gap-[2rem]'>
                <div className='flex flex-col gap-[1rem] w-full'>
                    <label className='font-bold'>Email</label>
                    <input 
                        className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                        type="email" 
                        placeholder='Enter email' 
                        onChange={(e)=> setEmail(e.target.value)}

                    />
                </div>
                <div className='relative flex flex-col gap-[1rem] w-full'>
                   {!showPassword && <AiOutlineEyeInvisible 
                        onClick={()=>setShowPassword(true)} 
                        className="absolute text-[2.8rem] right-[1.5rem] top-[5.8rem] text-[#8f909b] cursor-pointer"
                    />}
                     {showPassword && <AiOutlineEye
                        onClick={()=>setShowPassword(false)}
                        className="absolute text-[2.8rem] right-[1.5rem] top-[5.8rem] text-[#8f909b] cursor-pointer"
                    />}
                    <label className='font-bold'>Password</label>
                    <input 
                        className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                        type={showPassword ? "text" : "password"}
                        placeholder='Enter password' 
                        onChange={(e)=> setPassword(e.target.value)}

                    />
                </div>
            </div>
            
            <div className='w-full h-[6rem] mt-[4rem] text-[white] '>
                <button 
                    onClick={handleClick}
                    className='w-full h-[100%] bg-[#8529cd] rounded-lg hover:bg-[#69388f]'
                >
                    {loading ? "Loading...": "Register"}
                </button>
            </div>
        <p>Have account , 
            <span className='cursor-pointer text-[gray] font-bold'>
                <Link to="/login">
                    Login
                </Link>
            </span>
        </p>

        </div>
        </div>
    </div>
  )
}

export default Register
