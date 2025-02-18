import React from "react";

const ProfilePhoto: React.FC = () => {
  return (
    <div className="w-full lg:w-[70%]">
      <a
        href="https://www.linkedin.com/in/rehanjamil41/"
        target="_blank"
        aria-label="View LinkedIn Profile"
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src="/assets/images/profile-photo.png" // Change the image path here
          alt="Rehan Jamil"
          className="rounded-full shadow-lg mx-auto mb-8 md:mb-12 lg:mb-16s"
        />
      </a>
    </div>
  );
};

export default ProfilePhoto;