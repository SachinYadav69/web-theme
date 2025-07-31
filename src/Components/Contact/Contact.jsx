import React from 'react'
import '../Contact/Contact.css'
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {

   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e41420b-f613-4277-b4e9-f825b4c44258");

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
       <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>feel free to reach out to us anytime, for any suggestions any enquries or anything. we are here to help you 24x7</p>
            <ul className="contact-info">
              <li><span>📧</span> contact@thisgmail.com</li>
              <li><span>📞</span> +91 98765 4</li>
              <li><span>📍</span> Sec - 62, Delhi, India</li>
            </ul>

        </div>

       <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Phone No.</label>
          <input type="tel" name='phone' placeholder='Enter your mobile no' required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn dark-btn'  > Submit Now</button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact
