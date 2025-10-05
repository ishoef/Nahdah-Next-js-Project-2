# 🕌 An-Nahdah Online Institute  
### Progressive Islamic E-Learning Platform (Next.js + Node.js + PWA)

---

## 📘 Project Summary

**An-Nahdah Online Institute** is a modern **e-learning platform** that integrates **authentic Islamic knowledge** with **practical skill development**.  
The system includes **dashboards for students, instructors, and admins**, a **donation system**, and **secure payment integration**.  

With **PWA (Progressive Web App)** capabilities, users can:
- Install the app on their devices.
- Access materials offline.
- Receive **push notifications** for updates and events.  
Perfect for users in regions with **limited internet access**.

![App Preview](./public/Screenshot_10.png)
---

## 🧩 Core Modules

### 2.1 Public Website Pages

#### 🏠 Home Page
- Dynamic Hero Section with academy intro and CTAs (“Start Learning Now”, “Install App”).
- Featured Courses & Categories (Islamic Knowledge / Skill Development).
- About An-Nahdah section with mission and vision.
- Featured Instructors & Testimonials.
- FAQ (includes “How to install the app?”).
- Donation Banner & Newsletter Signup.
- Footer with navigation, contact, and PWA install prompt.

#### 📖 Islamic Knowledge Page
- Categories: Quran, Tafsir, Hadith, Fiqh, Aqeedah, Arabic Grammar, History.
- Filters: Level, Duration, Language, Offline availability.
- Featured Scholars section.

#### 💻 Skill Development Page
- Categories: Coding, Digital Marketing, Design, Leadership, etc.
- Filters: Free/Paid, Popularity, Recency, Offline support.
- Featured Trainers.

#### 🕌 About Us Page
- Mission & Vision.
- Institute History & Values.
- Leadership Team.

#### ✉️ Contact Us Page
- Contact Form, Map Embed, Social Links.

#### 👨‍🏫 Instructor Profiles (Public)
- Details: Name, bio, qualifications.
- Courses taught.
- Ratings & reviews.

#### 💝 Donation Page
- Overview: Impact of donations.
- Options: One-time, Recurring, Zakat/Sadaqah, Sponsor-a-Student.
- Secure Payment Form.
- Donation Tracker with progress bars.

---

### 2.2 User Roles & Dashboards

#### 🎓 Student Dashboard
- Enrolled Courses with offline download options.
- Progress Tracker & Achievements.
- Certificates (downloadable/shareable).
- Saved Courses, Payment & Donation History.
- Messages, Announcements, and Push Notifications.
- Discussion Forum access.

#### 👨‍🏫 Instructor Dashboard
- Create & Manage Courses.
- Student Analytics, Feedback.
- Revenue Reports.
- Messaging System.
- Profile Management.

#### 🛠️ Admin Dashboard
- User, Course, and Content Management.
- Financial and Campaign oversight.
- Analytics: User activity, donations, and PWA usage metrics.

---

### 2.3 Course System

- Course listings with filters (category, price, level, offline support).
- Course Details Page: Instructor info, syllabus, preview video, enrollment CTA.
- Learning Interface:
  - Video lectures (with subtitles & offline caching).
  - PDFs and Reading Materials.
  - Quizzes/Assignments with auto-grading.
  - Discussion/Q&A and Progress Tracker.
- Certificates generated as PDFs.

---

### 2.4 Payment & Donation System

- **Payment Methods:** Stripe, PayPal, SSLCommerz.  
- Course Payments: One-time, Subscriptions, or Bundles.  
- Donation System: One-time, Recurring, Zakat, Sponsorships.  
- Receipts & Invoices (Email/PDF).  
- Reporting and Admin Exports.

---

### 2.5 Additional Features

- 🌍 **Multilingual Support:** Arabic, English, Bangla, Urdu, Indonesian.  
- 📱 **Responsive Design:** Fully mobile-optimized.  
- ⚡ **SEO Optimization:** Enhanced discoverability.  
- 🔔 **Notifications:** Email, dashboard, and PWA push notifications.  
- 🔍 **Advanced Search:** Courses, instructors, and categories.  
- ⭐ **Reviews & Ratings:** Moderated student feedback.  
- 🏆 **Gamification:** Badges, points, and leaderboards.  
- 🤖 **AI-Powered Recommendations:** Personalized suggestions.  
- 🎥 **Live Classes:** Zoom/Google Meet integration.  
- 📂 **Offline Access:** PWA caching for course materials.  
- 🧑‍🤝‍🧑 **Community Features:** Groups and peer mentoring.  
- ♿ **Accessibility:** WCAG 2.1 compliance.  
- ⛓️ **Blockchain Certificates:** Verifiable credentials.  
- 💬 **Chatbot Support:** Instant help via AI assistant.

---

### 📲 PWA-Specific Features

- Installable as a native-like app (Android, iOS, Desktop).  
- Offline caching for videos, PDFs, and materials.  
- Push notifications for:
  - Course updates
  - Prayer times
  - Islamic events (e.g., Ramadan reminders)
  - Donation campaigns  
- Background sync for progress uploads.
- Custom “Add to Home Screen” prompt.
- Service Worker for caching and offline mode.

---

## 🧭 User Journey Flow

### 👨‍🎓 Students
1. Visit Home Page → Browse courses.
2. Register → Enroll.
3. Pay (if needed) → Access Dashboard.
4. Learn offline → Track progress.
5. Earn certificates → Receive notifications.
6. Donate optionally.

### 👨‍🏫 Instructors
1. Register & get approval.
2. Create & publish courses.
3. Manage students and analytics.
4. Receive earnings reports.

### 🧑‍💼 Admins
1. Manage users and courses.
2. Moderate content.
3. Track finances and campaigns.
4. Monitor PWA usage (installs, offline metrics).

---

## ⚙️ Technical Requirements

| Component | Technology |
|------------|-------------|
| **Frontend** | Next.js (App Router) + Tailwind CSS |
| **Backend** | Node.js (Express) |
| **Database** | MongoDB |
| **Authentication** | Firebase Auth / JWT |
| **Payments** | Stripe, PayPal, SSLCommerz |
| **Media Hosting** | AWS S3 / Cloudinary |
| **Video Streaming** | Vimeo / YouTube / Custom |
| **Live Classes** | Zoom / Google Meet API |
| **Certificates** | jsPDF / PDFKit |
| **Search** | Elasticsearch |
| **Notifications** | SendGrid (Email), Firebase Cloud Messaging (Push) |
| **Analytics** | Google Analytics / Mixpanel |
| **CDN** | Cloudflare |

---

## 🧠 PWA Implementation (Next.js + next-pwa)

- Install `next-pwa` package.
- Configure **`next.config.mjs`** for service worker and caching.
- Add **`manifest.json`** to `/public` with app name, icons, and theme color.
- Register the service worker for offline caching.
- Use **Firebase Cloud Messaging** for push notifications.
- Test with **Lighthouse** to achieve a 100/100 PWA score.
- Handle offline mode using IndexedDB/local storage for syncing.

---

## 🔒 Non-Functional Requirements

- **Scalability:** 10,000+ users.  
- **Security:** Bcrypt, SSL/TLS, RBAC, 2FA.  
- **Performance:** <2s page loads (with CDN).  
- **Backup:** Daily DB backups.  
- **Accessibility:** WCAG 2.1 compliance.  
- **Reliability:** 99.9% uptime.  
- **Data Privacy:** GDPR/CCPA compliance.  
- **Offline Fallback:** Custom “Offline Mode” UI.  

---

## 🌟 Advanced Islamic Academy Features

- 📱 Mobile App extension (via Capacitor).  
- 🕋 Islamic Calendar Integration (prayer times, Hijri dates).  
- 📚 Virtual Library (offline eBooks/fatwas).  
- 💵 Multi-Currency: USD, BDT, SAR.  
- 📤 Social Sharing for certificates.  
- 👨‍👩‍👧 Parental Controls for young learners.  
- 🔗 API Integrations for LMS/CRM.  
- 🤖 AI Moderation for forums.  
- 🌍 Localized Content (region-specific).  
- 🧕 Mentorship: 1-on-1 chat.  
- 💖 Charity Dashboard: Real-time donation impact.

---

## 📊 Success Metrics

| Metric | Target |
|--------|---------|
| User Engagement | 70% course completion |
| Donation Goal | $100,000 first year |
| User Growth | 10,000 active users (12 months) |
| PWA Adoption | 50% install rate |
| Course Ratings | 4+ stars average |
| Accessibility & PWA | 100% compliance |

---

## 🧾 Summary

**An-Nahdah Online Institute** will serve as a **comprehensive digital academy**, combining **Islamic scholarship**, **modern skills**, and **technology excellence**.  
By leveraging **Next.js**, **Node.js**, **MongoDB**, and **PWA capabilities**, it ensures:
- Speed ⚡  
- Security 🔒  
- Accessibility ♿  
- Community Impact 💞  

> _If you need sample code snippets, wireframes, or Next.js configurations (like `next.config.mjs`), feel free to request them!_
