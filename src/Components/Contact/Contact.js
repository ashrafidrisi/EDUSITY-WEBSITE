import React from 'react'
import './Contact.css'
function Contact() {

    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dc7b9d00-f16b-4618-b3d6-a595e77dd623");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
       <div className='contact-col'>
         <h3>Send us a message <img src="./images/msg-icon.png" alt=""></img></h3>
         <p>Feel free to reach out through contact from or fing our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our nuiversity community. </p>
         <ul>
            <li> <img src="./images/mail-icon.png" alt="mail"></img> Contact@GreatStack.dev</li>
            <li> <img src="./images/phone-icon.png" alt="phone"></img> +1 123-456-7890</li>
            <li> <img src="./images/location-icon.png" alt="location"></img> 77 Massachusetts Ave, Cambridge<br/> MA 02139, United States</li>
         </ul>
       </div>

       <div className='contact-col'>
         <form onSubmit={onSubmit}>
             <lable>Your name</lable>
             <input type='text' name='name' placeholder='Enter your name' required></input>
             <lable>Phone Number</lable>
             <input type='tel' name='phone' placeholder='Enter your Mobile number' required></input>
             <lable>Write your message here</lable>
             <textarea name='message' rows='6' placeholder='enter your message' required></textarea>
             <button type='submit' className='btn dark-btn'>Submit now <img src="./images/white-arrow.png" alt="white"></img></button>
         </form>
         <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact
