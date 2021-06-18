import React from 'react'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SendEmail() {
    const USER_ID = process.env.REACT_APP_USER_ID;
    const warnEmptyNotify = () => toast.warn('Please fill recipient address', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const warnAttachmentSizeNotify = () => toast.warn('Attachment size is too large', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        const sentSuccessfully = () => toast.success('Email sent Successfully!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_kssr7nc', e.target, USER_ID)
          .then((result) => {
              console.log(result.text);
            //   window.alert("Email sent Successfully.")
            sentSuccessfully()
          }, (error) => {
              console.log(error.text);
              if (error.status===413) {
                warnAttachmentSizeNotify()
                //   window.alert("Attachment size is too large.");
                  console.log("Attachment size is too large.");
              }
              if(error.status===422){
                warnEmptyNotify()
                //   window.alert("Attachment size is too large.");
                  console.log("Attachment size is too large.");
              }
          });
          e.target.reset();
      }
  
    return (
        <div className="email_div">
            <h1 style={{marginTop:"15px",marginLeft: "30px"}}>Send Email</h1>
            <form className="contact-form email_form" onSubmit={sendEmail}>
            <label>Sender's Name:</label>
            <br />
            <input type="text" name="name" placeholder="Name" class="form-control form-control-sm" />
            

            <label>Recipient Email:</label>
            <input type="text" name="email" placeholder="Email" class="form-control form-control-sm">
           
            
            </input>
           
           
            <label>Subject:</label>
            <br />
            <input type="text" name="subject" placeholder="Subject" class="form-control form-control-sm" />
            <label>Body:</label>
            <br />
            <textarea name="message" placeholder="Body" class="form-control form-control-sm" />
            <br />
            <label>Attach file:</label>
            <input type="file" name="my_file" /> 
            <br />
            <button style={{marginBottom:"10px", marginTop:"5px"}} className="btn btn-primary" type="submit">Send</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default SendEmail
