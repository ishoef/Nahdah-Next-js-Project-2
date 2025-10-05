# 🕌 An-Nahdah Online Institute  
### Progressive Islamic E-Learning Platform (Next.js + Node.js + PWA)

![App Preview](./public/Screenshot_10.png)

---

## 📘 Project Summary

**An-Nahdah Online Institute** is a modern **e-learning platform** that integrates **authentic Islamic knowledge** with **practical skill development**.  
The system includes **dashboards for students, instructors, and admins**, a **donation system**, and **secure payment integration**.  

With **PWA (Progressive Web App)** capabilities, users can:
- Install the app on their devices.
- Access materials offline.
- Receive **push notifications** for updates and events.  
Perfect for users in regions with **limited internet access**.

---

## 🧩 Core Modules

### 2.1 Public Website Pages

#### 🏠 Home Page

Your Home Page currently includes the following components:

| #  | Component | Description |
|----|------------|--------------|
| 1️⃣ | `<Hero />` | Main banner introducing the academy with CTAs (“Start Learning Now”, “Install App”). |
| 2️⃣ | `<CourseCategory />` | Displays categorized Islamic and modern skill-based courses. |
| 3️⃣ | `<FeaturedCourses />` | Highlights popular and trending courses. |
| 4️⃣ | `<CourseFeatures />` | Lists course benefits and unique learning features. |
| 5️⃣ | `<CourseShowcase />` | Displays highlighted or upcoming courses. |
| 6️⃣ | `<FounderSection />` | Introduces the founder and vision of the academy. |
| 7️⃣ | `<CooSection />` | Introduces the Chief Operating Officer (COO) section. |
| 8️⃣ | `<TestimonialsSlider />` | Carousel showing student reviews and testimonials. |
| 9️⃣ | `<TeachersSection />` | Lists certified and qualified instructors. |
| 🔟 | `<NewsSection />` | Latest updates, announcements, and academy news. |
| 11️⃣ | `<Donation />` | Donation section for institute support and campaigns. |
| 12️⃣ | `<FAQ />` | Frequently Asked Questions and help section. |

Other Home Page highlights:
- Dynamic hero section with intro and CTAs.
- Featured categories (Islamic Knowledge / Skill Development).
- Mission & Vision highlights.
- Testimonials & instructors.
- Newsletter & donation prompts.
- Footer with navigation, contact info, and install prompt.

---

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

## 📲 PWA-Specific Features

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

1. Follow the documentation/PWA-Guide.md
