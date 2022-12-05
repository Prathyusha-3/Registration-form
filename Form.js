import React,{useState,useEffect}from 'react'

function Form() {
    const data={name:"",email:"",password:""};
    const [inputData,setInputData]=useState(data)
    const[flag,setFlag]=useState(false)
   useEffect(()=>{
    console.log("Registered")
   },[flag])
    const handleData=(e)=>{
        setInputData({...inputData,[e.target.name]:[e.target.value]})
        console.log(inputData)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(!inputData.name||!inputData.email||!inputData.password)
        {
            alert('all fields are mandatory')
        }
        else{
            setFlag(true)
        }
    }
  return (
    <>
    <pre>{(flag)?<h2 className="four">Hello {inputData.name},You've Registered Successfully</h2>:""}</pre>
    <form onSubmit={submitHandler}>
    <div className="one">
        <h1>REGISTRATION FORM</h1>
    </div>
    <div className="two">
        <input type="text" placeholder="Enter your name" name="name" value={inputData.name} onChange={handleData}/><br /><br />

        <input type="text" placeholder="Enter your email" name="email"  value={inputData.email} onChange={handleData}/><br /><br />
        <input type="text" placeholder="Enter your password" name="password" value={inputData.password} onChange={handleData}/><br /><br />
    
        <button type="submit">Submit</button>
    </div>
    </form>
    </>
  )
}

export default Form