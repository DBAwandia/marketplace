import React, { useContext, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosInstance } from "../../Utils/BaseUrl"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Login() {
    const [ error , setError ] = useState(false)
    const [ showPassword, setShowPassword ] = useState(false)
    const [ showImage, setShowImage ] = useState(false)
    const [ password, setPassword ] = useState("")
    const [ phonenumber, setPhonenumber ] = useState("")

    const navigate = useNavigate()
    const { loading , dispatch } = useContext(LoginContext)

    const handleClicks = async () =>{
        if(password.length === 0  || phonenumber.length === 0){
            setError(true)
        }else{
            dispatch({type: "LOGIN_START"})
            try{
              const res =  await axiosInstance.post("/Users/login" , {
                    password: password,
                    phonenumber: phonenumber
                    
                })
                dispatch({type: "LOGIN_SUCCESS" , payload: res.data.details})
                toast.success("Login sucess")
                setShowImage(true)
                setTimeout(()=>{
                    navigate("/")
                },5500)
            }catch(err){
                setShowImage(false)
                dispatch({type: "LOGIN_FAIL"})
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
        {showImage && 
        <div className='w-full h-full'>
                 <LazyLoadImage
                    effect='blur'
                    className='h-[100vh] w-[100%] object-fill'
                    src='https://static.vecteezy.com/system/resources/previews/004/672/776/original/flash-sale-banner-design-template-offer-shopping-on-blue-and-pink-background-free-vector.jpg'
                    alt=''
                
                />
        </div>}

       {!showImage && 
       <div className='w-[50rem] min-h-0 bg-[white] text-[2rem] shadow-2xl rounded-2xl'>
            <div className='flex flex-col gap-[2rem] pb-[5rem] pt-[2rem] px-[3rem]'>
                <div className='self-center text-[3rem] font-bold'>
                    <h1>Login</h1>
                </div>

                {error && phonenumber.length === 0 ?<p className='self-center text-[#ef4444]'>Phonenumber is required</p>: ""}
                {error && password.length === 0  ?<p className='self-center text-[#ef4444]'>Password is required</p>: ""}
                
                <div className='flex items-center gap-[2rem]'>
                    <div className='flex flex-col gap-[1rem] w-full'>
                        <label className='font-bold'>Phonenumber</label>
                        <input 
                            className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                            type="number" 
                            placeholder='Enter phonenuber' 
                            onChange={(e)=> setPhonenumber(e.target.value)}
                            
                        />
                    </div>
                </div>

                <div className='flex items-center gap-[2rem]'>
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
                            type={showPassword ? "text" : "password" }
                            placeholder='Enter password' 
                            onChange={(e)=> setPassword(e.target.value)}

                        />
                    </div>
                </div>
                
                <div className='w-full h-[6rem] mt-[4rem] text-[white] '>
                    <button 
                    onClick={()=>handleClicks()}
                    className='w-full h-[100%] bg-[#8529cd] rounded-lg hover:bg-[#69388f]'>
                        {loading ? "Loading..." : "Login"}
                    </button>
                </div>
                <div className='flex text-[#252831] flex-col gap-[0.5rem]'>
                    <p>Forget password , 
                        <span className='cursor-pointer text-[gray]'>
                        <Link to="/resetpassword">
                            Reset
                        </Link>
                        </span>
                    </p>
                    <p>No account yet , 
                        <span className='cursor-pointer text-[gray]'>
                            <Link to="/register">
                                Register
                            </Link>
                        </span></p>
                </div>
            </div>
        </div>}
</div>
  )
}

export default Login
