import React, { useEffect, useState } from 'react'
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../../FirebaseAuth/Firebase';
import { axiosInstance } from '../../../Utils/BaseUrl';

function Resetpassword() {
    const [ phonenumber , setPhonenumber ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ startTime , setStartTime ] = useState(30)
    const [ startTimer , setStartTimer ] = useState(false)
    const [ showPassword , setShowPassword ] = useState(false)
    const [ showOtp , setShowOtp ] = useState(false)
    const [ loading , setLoading ] = useState(false)
    const [ confirmationCode , setConfirmationCode ] = useState("")
    const [ otp , setOtp ] = useState("")


    const substringNumber = phonenumber.substring(1)
    const phoneNumber = `+254${substringNumber}`


    //CONTROLL START TIMER
    useEffect(()=>{
        if(startTime < 2){
            setStartTime(30)
            setStartTimer(false)
        }
    },[startTime ])

    //COUNTER
    let timer;
    useEffect(()=>{
        if(startTimer){
            timer = setInterval(()=>{
                    setStartTime((startTime)=>  startTime - 1)
                },1000)
        }
        return ()=> {clearInterval(timer)}

    },[startTimer , startTime ])
    
    // OTP REQUEST
    const sendOtp = async()=>{

        setStartTimer(true)
        //ENABLE RESEND VERIFIFIER
        if(!window.recaptchaVerifier){
            window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
                'size': 'invisible',
                'callback': (response) => {
                  // reCAPTCHA solved, allow signInWithPhoneNumber.
                },
                'expired-callback': () => {
                  // Response expired. Ask user to solve reCAPTCHA again.
                }
              }, auth);
            }
        setShowOtp(true)

        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            setConfirmationCode( window.confirmationResult)
            toast.success("Otp sent succcessfully")
            
            }).catch((error) => {
            // Error; SMS not sent
            alert("Too frequent")
            setStartTimer(false)

            // ...
            });
    }

    //RESET BUTTON
    const resetPassword = async()=>{
         setLoading(true)
        try{
            confirmationCode.confirm(otp).then(async (result) => {
              console.log(result)
              await axiosInstance.put("/Users/reset" , { phonenumber: phonenumber , password: password })
              setLoading(false)
              toast.success("Succcessfully modified")
            //   setTimeout(()=>{
            //     <Navigate to="/login" />
            // },2000)
            
              }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                toast.error("Wrong confirmation code")
                setLoading(false)
              });
             
        }catch(err){
            toast.error(err.response.data)
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
    <div className='w-[50rem] min-h-0 bg-[white] text-[2rem] shadow-2xl rounded-2xl'>
    <div className='flex flex-col gap-[2rem] pb-[3rem] pt-[1.5rem] px-[3rem]'>
        <div className='self-center text-[3rem] font-bold'>
            <h1>Reset password</h1>
        </div>

        {/* <p className='self-center text-[#ef4444]'>Username is required</p> */}
        {/* <p className='self-center text-[#ef4444]'>Phonenumber is required</p> */}
        {/* <p className='self-center text-[#ef4444]'>Email is required</p> */}
        {/* <p className='self-center text-[#ef4444]'>Password is required</p> */}
        
        <div className='flex items-center gap-[0.7rem]'>
            <div className='flex flex-col gap-[1rem] w-full'>
                <label className='font-bold'>Phonenumber</label>
                <input 
                    onChange={(e)=>setPhonenumber(e.target.value)}
                    className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                    type="number" 
                    placeholder='Enter Phonenumber' 
                />
            </div>
        </div>

        <div className='flex items-center gap-[0.8rem]'>
            <div className='relative flex flex-col gap-[1rem] w-full'>
                {!showPassword && 
                    <AiOutlineEyeInvisible
                        onClick={()=>setShowPassword(true)}  
                        className="absolute text-[2.8rem] right-[1.5rem] top-[5.8rem] text-[#8f909b] cursor-pointer"
                    />
                }
                {showPassword && 
                 <AiOutlineEye
                    onClick={()=>setShowPassword(false)}  
                    className="absolute text-[2.8rem] right-[1.5rem] top-[5.8rem] text-[#8f909b] cursor-pointer"
                />
                }
                <label className='font-bold'>Password</label>
                <input 
                    onChange={(e)=>setPassword(e.target.value)}
                    className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                    type={showPassword ? "text" : "password"} 
                    placeholder='Enter password' 
                />
            </div>
            
        </div>
            <div className='relative flex flex-col gap-[0.8rem] w-full'>
                {showOtp &&
                <label className='font-bold'>OTP</label>
                }
               {showOtp &&
                <input 
                    onChange={(e)=>setOtp(e.target.value)}
                    className='w-full h-[6rem] pl-[2rem] rounded-lg bg-[#eff3f4]'
                    type="number" 
                    placeholder='Enter otp' 
                />
                }
                {phonenumber.length > 9 &&
                    <button 
                        disabled={startTimer}
                        onClick={sendOtp}
                        className='w-full h-[6rem] bg-[#a359db] rounded-lg text-[white]  hover:bg-[#69388f]'
                    >
                        {startTimer ? "Resend in" : "Request otp"}
                    </button>
                }
                   {startTimer && 
                    <div className='grid shadow-xl items-center justify-center rounded-full bg-[white] py-[0.4rem] px-[0.5rem] absolute top-[12rem] right-[2rem] font-bold text-[1.5rem]'>
                        <p>
                        {startTime < 10 ? "0"+startTime : startTime}
                        </p>
                    </div> 
                    }
            </div>
        <div className='w-full h-[6rem] mt-[2rem] '>
            <button 
                disabled={otp?.length < 5}
                onClick={resetPassword}
                className='w-full h-[100%] text-white bg-[#8529cd] rounded-lg hover:bg-[#69388f]'
            >
                {loading ? "Loading..." : "Reset password"}
            </button>
        </div>
        <div className='flex text-[#252831] flex-col gap-[0.5rem]'>
            <p>Remembered password ,  
                <span className='cursor-pointer text-[gray]'>
                    <Link to="/login">
                        Login
                    </Link>
                </span></p>
        </div>
    </div>
    </div>
    <div id='sign-in-button'></div>
</div>
  )
}

export default Resetpassword
