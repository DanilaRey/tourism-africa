import Home from "./page/Home/Home"
import AboutUs from "./page/AboutUs/AboutUs";
import Package from "./page/Package/Package";
import Gallery from "./page/Gallery/Gallery";
import ContactUs from "./page/ContactUs/ContactUs";

const pageRoutes = [
    {
      path: "/home",
      name: "Home",
      element: <Home />,

    },
    {
        path: "/about",
        name: "AboutUs",
        element: <AboutUs />,
   
      },
      {
        path: "/package",
        name: "Package",
        element: <Package />,
  
      },
      {
        path: "/gallery",
        name: "Gallery",
        element: <Gallery />,
  
      },
      {
        path: "/contact",
        name: "ContactUs",
        element: <ContactUs />,

      },
  ];
  
  export default pageRoutes;