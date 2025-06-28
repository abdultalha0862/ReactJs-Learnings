import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000);
    })
  }

  const onSubmit =async (data)=>{
    await delay(4)
    console.log(data);
    // if(data.username=="rohan"){
    //   setError("myform",{message:"This user is Blocked"})
    // }

    let r=await fetch("http://localhost:3000/")
    let res=await r.text()
    console.log(res);
    
    
  }


  


  return (
    <>
    {isSubmitting && <div>Loading ...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username",{required:true,minLength:{value:4,message:"The length is less than 5"},maxLength:{value:8,message:"The username length is exceed "}})} type="text"  />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password")} type="password" />
          <br />

          <input disabled={isSubmitting} type="submit" value="Submit" />

          {errors.myform && <div> {errors.myform.message}</div>}
        </form>

      </div>
    </>
  )
}

export default App
