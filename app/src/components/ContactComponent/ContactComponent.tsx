import React from 'react';
import './ContactComponent.scss';
import {TextField} from "@mui/material";
import {send} from "emailjs-com";

const ContactComponent = () => {
  const [contact, setContact] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const onSubmit = () => {
    console.log(contact);
    send(
        'service_crp7x0f',
        'template_z2ptpyq',
        {
          message: `name: ${contact.name}, email: ${contact.email}, message: ${contact.message}`,
        },
        'BdWj8gR1-lWr9yNsx'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
    setContact({...contact, message: ''});
    setContact({...contact, name: ''});
    setContact({...contact, email: ''});
  };

  const handleChange = (e: any) => {
    setContact({...contact, [e.target.name]: e.target.value});
  };


  return (
      <div className="contact-wrapper">
          <div className='contact-title'>
            Get in Touch!
          </div>
        <div>
          <div className='first-two-fields-wrapper'>
            <div className='contact-field'><TextField name='name' onChange={handleChange} fullWidth sx={{
              '& .MuiInput-underline:before': {borderBottomColor: 'white'},
              '& .MuiInput-underline:after': {borderBottomColor: 'white'},
            }}
                                                      id="standard-basic" label="Name" variant="standard" placeholder='Enter your name' required
                                                      InputLabelProps={{
                                                        style: {color: 'white'},
                                                      }}/></div>
            <div className='contact-field'><TextField name='email' onChange={handleChange} fullWidth sx={{
              '& .MuiInput-underline:before': {borderBottomColor: 'white'},
              '& .MuiInput-underline:after': {borderBottomColor: 'white'},
            }}
                                                      id="standard-basic" label="Email" variant="standard" placeholder='Enter your email' required
                                                      InputLabelProps={{
                                                        style: {color: 'white'},
                                                      }}/></div>
          </div>
          <div className='contact-field'><TextField name='message' onChange={handleChange} fullWidth multiline rows={4} sx={{
            '& .MuiInput-underline:before': {borderBottomColor: 'white'},
            '& .MuiInput-underline:after': {borderBottomColor: 'white'},
          }}
                                                    id="standard-basic" label="Message" variant="standard" placeholder='Enter your message' required
                                                    InputLabelProps={{
                                                      style: {color: 'white'},
                                                    }}/></div>
          <div className='submit-button-wrapper'>
            <button className='submit-button' onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
  );
}

export default ContactComponent;
