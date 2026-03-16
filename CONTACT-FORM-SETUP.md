# Contact Form Setup Guide

Your contact form is configured to send emails using **Formspree**, a free service that handles form submissions without requiring a backend.

## Setup Steps (5 minutes)

### 1. Create a Formspree Account
- Go to [https://formspree.io](https://formspree.io)
- Sign up with your email (otienoconrad58@gmail.com)
- Verify your email address

### 2. Create a New Form
- Click "New Form" in your Formspree dashboard
- Name it: "Portfolio Contact Form"
- You'll get a unique Form ID (looks like: `abc123xyz`)

### 3. Update Your Code
- Open `app/src/sections/Contact.tsx`
- Find line with: `https://formspree.io/f/YOUR_FORM_ID`
- Replace `YOUR_FORM_ID` with your actual form ID from Formspree
- Example: `https://formspree.io/f/abc123xyz`

### 4. Test Your Form
- Save the file
- Submit a test message through your contact form
- Check your email (otienoconrad58@gmail.com) for the submission

## What Happens When Someone Submits

1. Form data is sent to Formspree
2. Formspree forwards it to your email: otienoconrad58@gmail.com
3. User sees success message on your site
4. You receive an email with:
   - Name
   - Email
   - Subject
   - Message

## Formspree Free Plan Includes

- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (if needed later)
- ✅ No credit card required

## Alternative: Direct Email Link

If you prefer a simpler approach without Formspree, I can change the form to use a `mailto:` link instead. This will open the user's email client with pre-filled information. Let me know if you'd prefer this option.

## Need Help?

If you have any issues setting up Formspree, let me know and I can:
1. Help troubleshoot
2. Set up an alternative solution
3. Configure a different email service
