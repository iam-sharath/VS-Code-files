import React, { useEffect } from 'react';

const NewsletterSubscription = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    
    // Append the script to the body
    document.body.appendChild(script);
    
    // Clean up by removing the script from the document on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="visme_d" 
         data-title="Simple Newsletter Subscription" 
         data-url="mxg8k01j-simple-newsletter-subscription?fullPage=true" 
         data-domain="forms" 
         data-full-page="true" 
         data-min-height="100vh" 
         data-form-id="74043">
    </div>
  );
};

export default NewsletterSubscription;
