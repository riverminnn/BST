# EmailJS Setup Guide

## Why Email Forms Weren't Working

The contact forms were previously just **simulating** email sending - they showed a success message but didn't actually send any emails. Now they're configured to use **EmailJS**, which sends real emails from the browser without needing a backend server.

## Setup Instructions

Follow these steps to enable email functionality:

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free account is sufficient)
3. Verify your email address

### 2. Add Email Service

1. In the EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Connect your Outlook account
   - **Other**: Choose from 20+ email services
4. Click **"Connect Account"** and authorize
5. Copy your **Service ID** (looks like: `service_abc123`)

### 3. Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Set up the template:
   - **Template Name**: `bst_contact_form`
   - **Subject**: `New Contact Form Submission from {{from_name}}`
   - **Content**:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     
     Message:
     {{message}}
     ```
   - **To Email**: `{{to_email}}` (this will be hatrumtruong03@gmail.com)
4. Click **"Save"**
5. Copy your **Template ID** (looks like: `template_xyz789`)

### 4. Get Public Key

1. Go to **"Account"** → **"General"** in the sidebar
2. Find your **Public Key** (looks like: `A1B2C3D4E5F6G7H8I`)
3. Copy it

### 5. Update Configuration File

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:
   ```typescript
   export const EMAILJS_CONFIG = {
     PUBLIC_KEY: 'A1B2C3D4E5F6G7H8I',      // Your Public Key
     SERVICE_ID: 'service_abc123',         // Your Service ID
     TEMPLATE_ID: 'template_xyz789',       // Your Template ID
   };
   ```
3. Save the file

### 6. Test the Forms

1. Make sure the dev server is running: `npm run dev`
2. Visit `http://localhost:5174`
3. Fill out the quick contact form in the hero section
4. Click "Send Message"
5. Check **hatrumtruong03@gmail.com** inbox for the email

Also test the detailed contact form at `/contact`.

## Email Template Variables

Both forms send these variables to your EmailJS template:

- `from_name` - User's full name
- `from_email` - User's email address
- `phone` - User's phone number
- `message` - Message content (detailed info for Contact page)
- `to_email` - Recipient (hatrumtruong03@gmail.com)

## Troubleshooting

### Email Not Received

- ✅ Check spam/junk folder
- ✅ Verify Service ID, Template ID, and Public Key are correct
- ✅ Make sure email service is connected and active in EmailJS dashboard
- ✅ Check browser console for errors (F12 → Console tab)

### "401 Unauthorized" Error

- Your Public Key is incorrect or expired
- Go to EmailJS dashboard → Account → Generate new key

### "Invalid Template" Error

- Template ID is wrong or template doesn't exist
- Verify template is saved in EmailJS dashboard

### Gmail Blocking Emails

- Make sure "Less secure app access" is enabled (if using Gmail)
- Or use EmailJS's Gmail OAuth connection (recommended)

## Free Tier Limits

EmailJS free account includes:
- ✅ **200 emails per month**
- ✅ Unlimited email services
- ✅ Unlimited templates
- ✅ Basic support

This is sufficient for a business contact form.

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/docs/faq/](https://www.emailjs.com/docs/faq/)
