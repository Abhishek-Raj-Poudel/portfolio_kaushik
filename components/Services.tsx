import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

type Props = {};

export default function Services({}: Props) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const cardAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="section pt-20 md:pt-24 pb-10 ">
      <h2 className="section_heading md:mb-20 z-10">Choose a Service</h2>
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row gap-6 z-10"
      >
        <Card
          title={"Kundali Generation"}
          discription={
            "Build your child his own kundali. Please call for further Information"
          }
          requirements={[
            "Child's Date of birth",
            "Child's Time of Birth",
            "Child's Place of Birth",
          ]}
          price={499}
          perPerson
        />
        <Card
          title={"Kundali Vislesion"}
          discription={
            "Know your future and ask me anything. Please call for further Information and time reservation."
          }
          requirements={["Bring your Date, Location and time of birth."]}
          price={999}
          perPerson
        />
        <Card
          title={"Vastu Counceling"}
          discription={
            "Here I will give come to your home for inspection and will provide with remedy. Please call for further Information."
          }
        />

        {/* svg */}
      </motion.div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="623"
        height="328"
        fill="currentColor"
        viewBox="0 0 623 328"
        className=" absolute bottom-6 right-48 opacity-20"
      >
        <g fill="currentColor" clipPath="url(#clip0_56_1855)">
          <path d="M335.968 294.81l5.456-5.794-7.595-.777 1.266-6.712-6.041 3.05-3.238-5.933-2.759 6.239-6.695-3.662 1.214 7.865-6.434 1.215 4.251 3.819-5.115 4.832 8.371 1.364-.969 7.559 5.063-2.945 2.505 5.295 3.483-6.772 7.665 3.626-1.484-6.886 5.674-.734-4.618-4.649zM25.69 177.676l5.456-5.794-7.595-.777 1.266-6.703-6.032 3.05-3.247-5.934-2.758 6.24-6.696-3.67 1.214 7.864-6.434 1.224 4.26 3.81L0 181.827l8.371 1.363-.969 7.559 5.063-2.945 2.505 5.296 3.483-6.781 7.673 3.635-1.484-6.895 5.666-.725-4.618-4.658zM199.692 287.442c4.854-.692 8.228-5.193 7.536-10.052-.692-4.859-5.187-8.237-10.041-7.544-4.854.692-8.228 5.193-7.536 10.052.691 4.859 5.187 8.237 10.041 7.544zM282.537 251.108a8.875 8.875 0 015.973 7.845 8.877 8.877 0 01-4.952 8.527 8.861 8.861 0 01-9.765-1.315 8.88 8.88 0 015.313-15.521 8.868 8.868 0 013.431.464zM389.345 327.792c4.798-1.011 7.868-5.724 6.858-10.527-1.01-4.803-5.718-7.877-10.516-6.866-4.798 1.011-7.868 5.725-6.858 10.528 1.01 4.803 5.718 7.877 10.516 6.865zM601.989 257.408a8.881 8.881 0 015.989 7.848 8.88 8.88 0 01-10.039 9.371 8.879 8.879 0 01-7.401-6.53 8.904 8.904 0 011.918-8.157 8.88 8.88 0 016.1-2.994 8.874 8.874 0 013.433.462zM464.233 171.789c4.403-2.159 6.225-7.482 4.069-11.891-2.157-4.408-7.474-6.231-11.878-4.073-4.403 2.159-6.225 7.482-4.068 11.89a8.873 8.873 0 0011.877 4.074zM544.647.48a8.891 8.891 0 011 16.387 8.87 8.87 0 01-9.771-1.322 8.894 8.894 0 01-.779-12.542 8.885 8.885 0 016.113-2.99 8.878 8.878 0 013.437.468zM617.003 182.701a8.88 8.88 0 014.789 12.86 8.871 8.871 0 01-8.85 4.337 8.856 8.856 0 01-4.683-2.14 8.884 8.884 0 011.966-14.633 8.85 8.85 0 016.778-.424zM494.594 49.68a8.889 8.889 0 014.803 12.874 8.877 8.877 0 01-8.862 4.343 8.876 8.876 0 01-7.397-6.537 8.89 8.89 0 01.187-5.157 8.87 8.87 0 0111.269-5.523z"></path>
          <path d="M387.513 320.913c-.227 0-.452-.044-.663-.131l-61.663-24.678a2.058 2.058 0 01-.419-.236l-45.514-34.413-80.404 18.936a1.74 1.74 0 01-1.283-.174L14.709 178.882a1.803 1.803 0 01-.961-1.791 1.797 1.797 0 012.707-1.355l182.247 101.003 80.552-18.946a1.784 1.784 0 011.493.315l45.994 34.78 60.895 24.329 209.936-52.887 14.796-73.598a1.796 1.796 0 012.849-1.346 1.802 1.802 0 01.643 2.054l-15.015 74.716a1.824 1.824 0 01-1.326 1.39l-211.595 53.306a1.898 1.898 0 01-.411.061z"></path>
          <path d="M387.513 320.913a1.655 1.655 0 01-.759-.175 1.74 1.74 0 01-.95-1.004 1.752 1.752 0 01.077-1.382l72.749-155.217 31.355-105.564c.092-.29.25-.553.463-.77l50.07-49.198a1.805 1.805 0 011.294-.574 1.797 1.797 0 011.651 2.563 1.79 1.79 0 01-.431.58l-49.756 48.867-31.233 105.249c0 .079-.061.166-.096.245l-72.81 155.349a1.801 1.801 0 01-1.624 1.031z"></path>
        </g>
        <defs>
          <clipPath id="clip0_56_1855">
            <path fill="currentColor" d="M0 0H623V328H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
