# Resumind - AI Resume Analyzer

🔗 **Live Deployment:** https://airesumind.vercel.app/

Resumind is an AI-powered resume review application that helps job seekers optimize their resumes for specific positions. It analyzes uploaded resumes against job descriptions, provides ATS scoring, and delivers detailed improvement feedback — all while allowing users to store and manage multiple resume submissions in one dashboard.

---

## ✨ Key Features

- **Upload & Analyze**
  - Upload PDF resumes and get AI-powered feedback tailored to a specific job description.

- **ATS Scoring**
  - Receive an ATS (Applicant Tracking System) compatibility score with actionable improvement tips.

- **Detailed Feedback**
  - Comprehensive analysis on:
    - Formatting
    - Content quality
    - Keyword match
    - Presentation & clarity

- **Resume Library**
  - Track and manage multiple resume submissions.
  - View previews of previously uploaded resumes anytime.

- **PDF to Image Preview**
  - Automatically converts PDF resumes into images for quick visual preview.

- **Delete Functionality**
  - Remove resumes from your dashboard when no longer needed.

---

## 🧰 Tech Stack

### Frontend
- **React Router 7**
- **TypeScript**
- **Vite**

### Styling
- **Tailwind CSS 4**

### Backend Services
- **Puter.js**
  - Authentication
  - File storage
  - AI chat API integration

### AI Model
- **GPT-4o-mini** (for resume analysis)

### PDF Processing
- **pdfjs-dist** (PDF → Image conversion)

---

## ⚙️ Core Functionality (How It Works)

1. Users sign in using **Puter authentication**
2. Upload a **resume PDF** along with job details:
   - Company name
   - Job title
   - Job description
3. The app converts the PDF into an **image preview**
4. Both the PDF and generated image are stored using **Puter file storage**
5. AI analyzes the resume against job requirements using **GPT-4o-mini**
6. Results include:
   - Overall score
   - ATS compatibility score
   - Detailed feedback & suggestions
7. All uploaded resumes are saved and accessible from the **home dashboard**

---

## 🎯 Purpose

Resumind helps job seekers:
- Improve resume quality using AI-driven insights  
- Increase ATS compatibility  
- Match resumes better to job descriptions  
- Organize and track resume submissions in one place  

---

## 📌 Deployment

The project is deployed and accessible here:  
👉 https://airesumind.vercel.app/

---

## 📄 License

This project is for educational and portfolio purposes.  
You may modify and extend it as needed.

---

Created With ❤️ by Daivya.
