import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "What We Offer:",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Comprehensive GBP Audits:",
      desc: "Analyze and enhance your profile’s accuracy and completeness.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Content Optimization:",
      desc: "Add and edit descriptions, categories, and more with targeted keywords.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Review Monitoring & Responses:",
      desc: "Manage customer reviews and craft thoughtful, keyword-rich replies.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Ongoing Profile Management:",
      desc: "Regular updates to keep your profile engaging and relevant.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Services",
  desc: "Optimize Your Google Business Profile with LocalSoc.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "GBP Auditing",
      desc: "We conduct a detailed analysis of your existing Google Business Profile to identify areas for improvement. Our audit ensures your profile is accurate, complete, and optimized to attract local customers.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Content Optimization",
      desc: "Our team enhances your profile’s descriptions, categories, and attributes by integrating targeted keywords. This helps boost your visibility in local searches and ensures your profile stands out.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Review Monitoring & Responses",
      desc: "Stay on top of your customer feedback with our review monitoring service. We craft professional and engaging replies that include relevant keywords to enhance your reputation and improve engagement. ",
      icon: <SunIcon />,
    },
    {
      title: "Ongoing Profile Management",
      desc: "Keep your GBP updated and engaging with regular posts, new photos, and timely updates. We ensure your profile remains active and attractive to potential customers.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
