import { useEffect } from "react";
import { useLocation } from "react-router";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/") document.title = "Home | Job Tracker";
    else if(location.pathname === "/companies") document.title = "Companies | Job Tracker";
    else if(location.pathname === "/profile") document.title = "Profile | Job Tracker";
    else document.title = "Job Tracker";
  }, [location.pathname]);

  return null;
};
export default DynamicTitle;
