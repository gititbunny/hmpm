# House of Miracles Prophetic Ministries (HMPM)

**House of Miracles Prophetic Ministries (HMPM)** is a responsive church website built for a real organisation.

The website provides one central place for visitors and church members to explore sermons, ministry information, outreach, testimonies, announcements and media, book one-on-one sessions, contact the church and access location information.

Built with **React, JavaScript, Vite and React Router**, with form handling and deployment through **Netlify**.

🌐 **Live Website:** [hmpm.org.za](https://hmpm.org.za/)

## Features

* Responsive church website across desktop, tablet and mobile
* Multi-page navigation using React Router
* Reusable Navbar, Footer and carousel components
* Data-driven sermon archive
* Dynamic individual sermon pages using URL slugs
* Structured opening and main sermon messages
* Scripture references, summaries, key points and prayer points
* Service photo and video galleries
* Testimonies and media content
* Ministries information
* Community outreach content
* Church announcements and updates
* One-on-one appointment booking
* Dynamically generated available booking dates
* Unique booking reference numbers
* Contact and prayer-request form
* Netlify form handling
* Honeypot spam protection on forms
* Google Maps integration
* Direct Google Maps directions link
* Social and media links
* Custom 404 page
* Success page for submitted forms

## Tech Stack

**Frontend**

* React
* JavaScript
* CSS
* HTML

**Framework & Routing**

* Vite
* React Router

**Forms & Deployment**

* Netlify
* Netlify Forms

**Development Tools**

* Git
* GitHub
* npm
* Oxlint

## Website Structure

HMPM is organised as a routed React application with pages for:

* Home
* About
* Sermons
* Individual Sermon Details
* Testimonies / Media
* Ministries
* Outreach
* Announcements
* One-on-One Booking
* Contact
* Submission Success
* 404 / Not Found

Shared components such as the navigation bar, footer, hero carousel and scroll behaviour are reused throughout the application to maintain a consistent experience.

## Sermon System

One of the main features of the website is its structured sermon system.

Sermon information is stored separately from the page components and rendered dynamically throughout the site.

Each sermon has its own URL:

```text
/sermons/:slug
```

React Router's URL parameters are used to find and display the correct sermon.

Individual sermon pages can contain:

* Service type
* Service date
* Theme
* Main scripture
* Sermon summary
* Opening message
* Speaker information
* Key teaching points
* Main prophetic message
* Prayer points
* Full sermon notes
* Service images and videos

If an invalid sermon URL is requested, the website displays a dedicated **Sermon Not Found** state instead of failing.

## One-on-One Booking

The website includes a custom one-on-one booking experience.

Visitors can select from the available booking days and dates directly through the website.

The booking logic:

* Supports Wednesday, Saturday and Sunday sessions
* Dynamically calculates upcoming available dates
* Generates a unique booking reference
* Collects the visitor's contact information
* Submits the booking through Netlify Forms
* Redirects the visitor to a success page after submission

The booking reference can then be used by the church team to identify the appointment.

## Contact & Location

Visitors can contact the church directly through the website for:

* General enquiries
* Prayer requests
* Visit information
* Ministry information

The contact form is integrated with **Netlify Forms** and includes honeypot spam protection.

The website also includes an embedded **Google Map** for the church location and a direct **Open in Google Maps** button for navigation.

## Data-Driven Content

Several parts of the website keep content separate from presentation components.

```text
src/data/
├── announcements.js
├── outreach.js
├── sermons.js
└── testimonies.js
```

This allows content such as sermons, testimonies, outreach projects and announcements to be updated without rebuilding the structure of the related pages.

## Project Structure

```text
hmpm/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── HeroCarousel.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── data/
│   │   ├── announcements.js
│   │   ├── outreach.js
│   │   ├── sermons.js
│   │   └── testimonies.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Announcements.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Ministries.jsx
│   │   ├── NotFound.jsx
│   │   ├── Outreach.jsx
│   │   ├── SermonDetail.jsx
│   │   ├── Sermons.jsx
│   │   ├── Success.jsx
│   │   └── Testimonies.jsx
│   │
│   ├── styles/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/gititbunny/hmpm.git
```

Navigate into the project:

```bash
cd hmpm
```

Install the dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will provide a local development URL that can be opened in the browser.

## Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run the project linter:

```bash
npm run lint
```

## Responsive Design

The website was designed to provide a consistent experience across different screen sizes.

Responsive behaviour includes:

* Adaptive page layouts
* Mobile navigation
* Responsive sermon cards
* Flexible media galleries
* Stacked mobile content sections
* Responsive booking and contact forms
* Scalable typography
* Mobile-friendly buttons and navigation
* Responsive images and video content

## What This Project Demonstrates

HMPM demonstrates practical experience with:

* React application development
* Reusable component architecture
* Client-side routing with React Router
* Dynamic routes and URL parameters
* Data-driven UI rendering
* JavaScript state management
* Form handling
* Dynamic date generation
* Netlify Forms integration
* Responsive web design
* Accessibility-conscious interface design
* Image and video integration
* Google Maps embedding
* Error and fallback states
* Organising content and application data
* Maintaining separate page-specific styles
* Git and GitHub version control
* Production website deployment

## Project Context

HMPM was developed for **House of Miracles Prophetic Ministries**, a real church organisation.

The project was designed around practical organisational needs rather than functioning only as a portfolio concept. This includes organising sermon content, communicating ministry and outreach information, publishing announcements, supporting visitor enquiries, handling appointment requests and making church information easy to access across devices.

## Deployment

The production website is deployed at:

**https://hmpm.org.za/**

## Author

Built by **Git It Bunny**

[GitHub](https://github.com/gititbunny)
