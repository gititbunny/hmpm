import sundayServicePoster from "../assets/images/sermons/sunday-service-poster.jpg";
import wednesdayServicePoster from "../assets/images/sermons/wednesday-service-poster.jpg";

import galleryOne from "../assets/images/sermons/sunday-faith-gallery-01.jpg";
import galleryTwo from "../assets/images/sermons/sunday-faith-gallery-02.jpg";
import galleryThree from "../assets/images/sermons/sunday-faith-gallery-03.jpg";
import galleryFour from "../assets/images/sermons/wednesday-direction-gallery-01.jpg";
import galleryFive from "../assets/images/sermons/wednesday-direction-gallery-02.jpg";
import gallerySix from "../assets/images/sermons/wednesday-direction-gallery-03.jpg";

export const servicePosters = [
  {
    id: 1,
    serviceType: "Sunday Service",
    title: "Sunday Service",
    date: "Sunday Service",
    time: "11:30 AM",
    location: "Tzaneen, Sasekani, Vantor Park",
    image: sundayServicePoster,
  },
  {
    id: 2,
    serviceType: "Wednesday Service",
    title: "Wednesday Midweek Service",
    date: "Wednesday Service",
    time: "11:30 AM",
    location: "Tzaneen, Sasekani, Vantor Park",
    image: wednesdayServicePoster,
  },
];

export const weeklyServiceGallery = [
  {
    id: 1,
    image: galleryOne,
    alt: "House Of Miracles service moment",
  },
  {
    id: 2,
    image: galleryTwo,
    alt: "House Of Miracles worship moment",
  },
  {
    id: 3,
    image: galleryThree,
    alt: "House Of Miracles prayer moment",
  },
  {
    id: 4,
    image: galleryFour,
    alt: "House Of Miracles Wednesday service moment",
  },
  {
    id: 5,
    image: galleryFive,
    alt: "House Of Miracles church gathering",
  },
  {
    id: 6,
    image: gallerySix,
    alt: "House Of Miracles congregation moment",
  },
];