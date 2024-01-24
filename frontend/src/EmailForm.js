// // // src/EmailForm.js
// // import React, { useState } from 'react';
// // import './EmailForm.css'; // Import the CSS file

// // const EmailForm = () => {
// //   console.log('Rendering EmailForm component');
// //   const [recipients, setRecipients] = useState('');
// //   const [subject, setSubject] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleRecipientsChange = (e) => {
// //     setRecipients(e.target.value);
// //   };

// //   const handleSubjectChange = (e) => {
// //     setSubject(e.target.value);
// //   };

// //   const handleMessageChange = (e) => {
// //     setMessage(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log('Recipients:', recipients);
// //     console.log('Subject:', subject);
// //     console.log('Message:', message);

// //     try {
// //       const response = await fetch('http://localhost:3000/saveAndSendEmail', {
// //         method: 'POST',
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ recipients, subject, message }),
// //     });
    

// //         if (response.ok) {
// //             console.log('Data saved and email sent successfully');
// //         } else {
// //             console.error('Failed to save data and send email');
// //         }
// //     } catch (error) {
// //         console.error('Error in fetch:', error);
// //     }
// // };

  
// //   return (
// //     <div className="email-form-container">
// //       <h2>Email Form</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label>Recipients (comma-separated):</label>
// //           <input
// //             type="text"
// //             value={recipients}
// //             onChange={handleRecipientsChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Subject:</label>
// //           <input
// //             type="text"
// //             value={subject}
// //             onChange={handleSubjectChange}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Message:</label>
// //           <textarea
// //             value={message}
// //             onChange={handleMessageChange}
// //             required
// //           ></textarea>
// //         </div>
// //         <button type="submit" className="bt">Send Email</button>
// //       </form>
// //     </div>
   
// //   );
// // };

// // export default EmailForm;
// // src/EmailForm.js
// // src/EmailForm.js
// import React, { useState } from 'react';
// import './EmailForm.css'; // Import the CSS file

// const EmailForm = () => {
//   console.log('Rendering EmailForm component');
//   const [recipients, setRecipients] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [attachment, setAttachment] = useState(null);

//   const handleRecipientsChange = (e) => {
//     setRecipients(e.target.value);
//   };

//   const handleSubjectChange = (e) => {
//     setSubject(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleAttachmentChange = (e) => {
//     const file = e.target.files[0];
//     setAttachment(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Recipients:', recipients);
//     console.log('Subject:', subject);
//     console.log('Message:', message);
//     console.log('Attachment:', attachment);

//     try {
//       const formData = new FormData();
//       formData.append('recipients', recipients);
//       formData.append('subject', subject);
//       formData.append('message', message);
//       formData.append('attachment', attachment);

//       const response = await fetch('http://localhost:3000/saveAndSendEmail', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         console.log('Data saved and email sent successfully');
//       } else {
//         console.error('Failed to save data and send email');
//       }
//     } catch (error) {
//       console.error('Error in fetch:', error);
//     }
//   };

//   return (
//     <div className="email-form-container">
//       <h2>Email Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Recipients (comma-separated):</label>
//           <input
//             type="text"
//             value={recipients}
//             onChange={handleRecipientsChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Subject:</label>
//           <input
//             type="text"
//             value={subject}
//             onChange={handleSubjectChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Message:</label>
//           <textarea
//             value={message}
//             onChange={handleMessageChange}
//             required
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label>Attachment:</label>
//           <input type="file" onChange={handleAttachmentChange} />
//         </div>
//         <button type="submit" className="bt">
//           Send Email
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EmailForm;
// src/EmailForm.js
// src/EmailForm.js
// src/EmailForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './EmailForm.css'; // Import your custom CSS file

const EmailForm = () => {
  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleRecipientsChange = (e) => {
    setRecipients(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachment(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Recipients:', recipients);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('Attachment:', attachment);

    try {
      const formData = new FormData();
      formData.append('recipients', recipients);
      formData.append('subject', subject);
      formData.append('message', message);
      formData.append('attachment', attachment);

      const response = await fetch('http://localhost:3000/saveAndSendEmail', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Data saved and email sent successfully');
      } else {
        console.error('Failed to save data and send email');
      }
    } catch (error) {
      console.error('Error in fetch:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Email Form</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Recipients (comma-separated):</label>
              <input
                type="text"
                className="form-control"
                value={recipients}
                onChange={handleRecipientsChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject:</label>
              <input
                type="text"
                className="form-control"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea
                className="form-control"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Attachment:</label>
              <input type="file" className="form-control" onChange={handleAttachmentChange} />
            </div>
            <div class="button-container">
    <button type="submit">
      Send Email
    </button>
    </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
