import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function TACRequestTab() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [generatedTAC, setGeneratedTAC] = useState(''); // State for TAC
    const [isRequesting, setIsRequesting] = useState(false);
    
    const generateTAC = () => {
        // Generate a 4-digit random TAC
        const newTAC = String(Math.floor(1000 + Math.random() * 9000));
        setGeneratedTAC(newTAC);
        return newTAC;
    };

    const sendEmail = (tacToSend) => {
        const templateParams = {
            to_email: email,
            generated_tac: tacToSend
        };

        console.log('Sending email with TAC:', tacToSend);

        // Fill in service_id, template_id,idk_what_that_is and public_key (can be found in your own emailJS account)
        emailjs.send('service_6jeiqgq', 'template_dfleaku', templateParams, 'WlJ2AEL5DC96v1nwC')
            .then((response) => {
                console.log('Email sent successfully:', response);
                setFeedback('TAC has been sent to your email!');
            }, (error) => {
                console.error('Email sending error:', error);
                setFeedback('Invalid email!');
            });
    };

    const handleTacRequestAndSendEmail = async (e) => {
        setEmail(e.target.value);
        setIsRequesting(true);
        const newTAC = generateTAC(); // Generate new TAC
        sendEmail(newTAC);
        
        // Re-enable the button after 30 seconds
        setTimeout(() => {
            setIsRequesting(false);
        }, 30000);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="tab-content">
            <h2>TAC Request</h2>
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
            />
            <button 
                onClick={handleTacRequestAndSendEmail} 
                disabled={!email || isRequesting}
            >
                {isRequesting ? 'Requesting TAC...' : 'Ask for TAC'}
            </button>
            <p>{feedback}</p>
            <p><strong>Generated TAC (for debugging):</strong> {generatedTAC}</p>
        </div>
    );
}

export default TACRequestTab;
