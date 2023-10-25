import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_7fako7i";
    const templateId = "template_3i8puga";
    const publicKey = "HNT9ID-1fPc3KdfAk";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Job Wafula",
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("Email sent successfully", response);
        setName();
        setEmail();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

//   items-center justify-center h-screen
  return (
    <div className="border md:border-none  m-2 mr-2 justify-center  lg:ml-[40%] flex  shadow-2xl h-[14rem] md:w-[97%] sm:w-[95%]  lg:w-[20%] mt-[1rem] lg:mt-[-7rem] bg-white p-7 ">
      <form onSubmit={handleSubmit} className=" block flex-column justify-center">
        <div className="mb-[2rem] ">
            <div> <label className="text-bold">Name</label></div>
            <div><input className="border "
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="user_name"
            required
          /></div>
         
          
        </div>
        <div className="mb-[2rem]">
            <div> <label className="text-bold">Email</label></div>
            <div><input className="border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="user_email" required
          /></div>
         
          
        </div>
        <div  className="bg-purple-900  hover:bg-purple-500 text-white"><input className="" type="submit" value="Subscribe" /></div>

        
      </form>
    </div>
  );
}
