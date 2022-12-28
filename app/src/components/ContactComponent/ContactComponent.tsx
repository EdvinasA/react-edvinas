import React from 'react';
import './ContactComponent.scss';
import {TextField} from "@mui/material";

interface ContactComponentProps {
}

const ContactComponent = () => {
  const [contact, setContact] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  return (
      <div className="contact-wrapper">
        <div className='contact-title'>
          Get in Touch!
        </div>
        <div>
          <div></div>
          <div className='contact-field'><TextField fullWidth sx={{
            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
          }}
              id="standard-basic" label="Name" variant="standard" placeholder='Enter your name' required
                                                    InputLabelProps={{
                                                      style: { color: 'white' },
                                                    }}/></div>
          <div className='contact-field'><TextField fullWidth sx={{
            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
          }}
                                                    id="standard-basic" label="Email" variant="standard" placeholder='Enter your email' required
                                                    InputLabelProps={{
                                                      style: { color: 'white' },
                                                    }}/></div>
          <div className='contact-field'><TextField fullWidth multiline rows={4} sx={{
            '& .MuiInput-underline:before': { borderBottomColor: 'white' },
            '& .MuiInput-underline:after': { borderBottomColor: 'white' },
          }}
                                                    id="standard-basic" label="Message" variant="standard" placeholder='Enter your message' required
                                                    InputLabelProps={{
                                                      style: { color: 'white' },
                                                    }}/></div>
          <div className='submit-button-wrapper'><button className='submit-button'>Submit</button></div>
        </div>
      </div>
  );
}

export default ContactComponent;
