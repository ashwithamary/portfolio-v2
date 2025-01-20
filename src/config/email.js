// src/config/email.js
import emailjs from '@emailjs/browser';

emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key

export const emailConfig = {
  serviceId: 'YOUR_SERVICE_ID',     // Replace with your Service ID
  templateId: 'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  publicKey: 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
};