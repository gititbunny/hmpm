import featuredServiceImage from "../assets/images/media/featured-service.jpg";
import sundayGalleryImage from "../assets/images/media/sunday-gallery.jpg";
import wednesdayGalleryImage from "../assets/images/media/wednesday-gallery.jpg";
import outreachGalleryImage from "../assets/images/media/outreach-gallery.jpg";
import specialEventImage from "../assets/images/media/special-event.jpg";
import worshipMomentImage from "../assets/images/media/worship-moment.jpg";
import prayerMomentImage from "../assets/images/media/prayer-moment.jpg";

export const mediaCategories = [
  {
    title: "Sunday Services",
    description:
      "Photos and highlights from Sunday worship, sermons, prayer, and fellowship.",
  },
  {
    title: "Wednesday Services",
    description:
      "Midweek service moments, prayer gatherings, and teaching highlights.",
  },
  {
    title: "Outreach & Charity",
    description:
      "Community support, giving projects, charity work, and outreach moments.",
  },
  {
    title: "Special Events",
    description:
      "Conferences, celebrations, church events, and special ministry gatherings.",
  },
];

export const mediaItems = [
  {
    id: 1,
    title: "Sunday Service Highlight",
    category: "Sunday Services",
    type: "Photo",
    image: featuredServiceImage,
    description:
      "A featured moment from a recent Sunday service at House Of Miracles Prophetic Ministries.",
  },
  {
    id: 2,
    title: "Sunday Gallery",
    category: "Sunday Services",
    type: "Photo Gallery",
    image: sundayGalleryImage,
    description:
      "A collection of worship, prayer, and sermon moments from Sunday service.",
  },
  {
    id: 3,
    title: "Wednesday Midweek Service",
    category: "Wednesday Services",
    type: "Photo Gallery",
    image: wednesdayGalleryImage,
    description:
      "Midweek service moments focused on prayer, teaching, and spiritual direction.",
  },
  {
    id: 4,
    title: "Outreach & Charity Work",
    category: "Outreach & Charity",
    type: "Photo Gallery",
    image: outreachGalleryImage,
    description:
      "Community outreach moments showing the ministry serving people with love and compassion.",
  },
  {
    id: 5,
    title: "Special Church Event",
    category: "Special Events",
    type: "Photo",
    image: specialEventImage,
    description:
      "A special ministry event, gathering, or celebration captured for the church archive.",
  },
  {
    id: 6,
    title: "Worship Moment",
    category: "Sunday Services",
    type: "Photo",
    image: worshipMomentImage,
    description:
      "A worship moment from the life of the ministry.",
  },
  {
    id: 7,
    title: "Prayer Moment",
    category: "Sunday Services",
    type: "Photo",
    image: prayerMomentImage,
    description:
      "A prayer moment captured during church service.",
  },
];