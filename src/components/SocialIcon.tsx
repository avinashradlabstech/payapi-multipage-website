import React from "react";
import { socialIcons } from "../data/socialIcons";
import FacebookIcon from "../data/svg/socialmedia/FacebookIcon";
import TwitterIcon from "../data/svg/socialmedia/TwitterIcon";
import LinkedInIcon from "../data/svg/socialmedia/LinkedInIcon";

interface SocialMediaData {
  appliedClassName?: string;
}

const iconComponents: { [key: string]: React.FC<{ className?: string }> } = {
  Facebook: FacebookIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedInIcon,
};

const SocialMedia: React.FC<SocialMediaData> = ({ appliedClassName = "" }) => {
  return (
    <>
      {/* Social Media */}
      <div className={`social-media ${appliedClassName}`}>
        {socialIcons.map((item) => {
          const IconComponent = iconComponents[item.name];
          return (
            <div key={item.id}>
              {IconComponent ? (
                <a
                  target="_blank"
                  href={item.path}
                  rel="noopener noreferrer"
                  className="text-primary-link-water-white  hover:text-secondary-charm-pink transition duration-300"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              ) : (
                ""
              )}
            </div>
          )
        })}
      </div>
    </>
  );
};

export default SocialMedia;
