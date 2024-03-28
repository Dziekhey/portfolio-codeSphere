import React, { useEffect } from 'react';

const DialogFlowMessenger = () => {
  useEffect(() => {
    // Dynamically add the Dialogflow Messenger script
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);

    // Optional: Error handling for script loading
    script.onerror = () => {
      console.error('The Dialogflow Messenger script failed to load.');
    };

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  // Safely accessing the environment variable
  const agentId = typeof process !== 'undefined' ? process.env.REACT_APP_AGENT_ID : undefined;

  return (
    <df-messenger
      project-id="codesphere-va"
      agent-id={agentId} // Using the safely accessed agent ID
      language-code="en"
      max-query-length="-1"
    >
      <df-messenger-chat-bubble chat-title="CodeSphere VA"></df-messenger-chat-bubble>
    </df-messenger>
  );
};

export default DialogFlowMessenger;
