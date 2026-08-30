import allNightPrayerImage from "../assets/images/announcements/all-night-prayer.png";
import fraudAlertImage from "../assets/images/announcements/all-night-prayer.png";
import buildingSupportImage from "../assets/images/announcements/all-night-prayer.png";
import officialNoticeImage from "../assets/images/announcements/all-night-prayer.png";
import specialProgrammesImage from "../assets/images/announcements/all-night-prayer.png";

export const announcements = [
  {
    id: 1,
    type: "event",
    category: "Upcoming Event",
    title: "Annual All-Night Prayer",
    date: "Friday, 31 October 2026",
    time: "6:00 PM – 6:00 AM",
    image: allNightPrayerImage,
    summary:
      "Join us for a powerful night of worship, prayer, deliverance, and spiritual renewal.",
    details: [
      "The all-night prayer service is one of the ministry’s important yearly gatherings.",
      "Please follow the official church communication lines for final event updates.",
    ],
    actionLabel: "Contact Church",
    actionLink: "/contact",
    featured: true,
  },
  {
    id: 2,
    type: "warning",
    category: "Fraud Alert",
    title: "Beware of fake online accounts",
    date: "Ongoing Notice",
    time: "Important Notice",
    image: fraudAlertImage,
    summary:
      "Please be careful of fake accounts, messages, or people pretending to represent House Of Miracles Prophetic Ministries.",
    details: [
      "Only use the official email, phone numbers, website, Facebook, and YouTube links listed on this website.",
      "Do not send money or personal information to unofficial accounts.",
    ],
    actionLabel: "View Contact Details",
    actionLink: "/contact",
  },
  {
    id: 3,
    type: "support",
    category: "Support & Giving",
    title: "Church Building Support",
    date: "Current Need",
    time: "Open Support Notice",
    image: buildingSupportImage,
    summary:
      "The church may share approved building needs, materials, supplies, or equipment requests when support is needed.",
    details: [
      "Some people may prefer buying actual materials or supplies instead of sending money.",
      "Please contact the official church team first to confirm what is currently needed.",
    ],
    actionLabel: "Ask Current Needs",
    actionLink: "/contact",
  },
  {
    id: 4,
    type: "notice",
    category: "Church Notice",
    title: "Official Communication Lines",
    date: "Important Notice",
    time: "Official Information",
    image: officialNoticeImage,
    summary:
      "All official church updates should come from the communication lines listed on this website.",
    details: [
      "The official email is houseofmiraclesPM@gmail.com.",
      "Please ignore unofficial accounts or unverified contact details.",
    ],
    actionLabel: "Contact Church",
    actionLink: "/contact",
  },
  {
    id: 5,
    type: "event",
    category: "Special Services",
    title: "Special Programmes & Services",
    date: "Dates To Be Confirmed",
    time: "Updates Coming Soon",
    image: specialProgrammesImage,
    summary:
      "Upcoming church programmes, special services, December events, and prayer gatherings can be announced here.",
    details: [
      "Confirmed programmes and special services will be shared through the church’s official communication channels.",
      "Members and visitors should check this page for important updates.",
    ],
    actionLabel: "View Sermons",
    actionLink: "/sermons",
  },
];