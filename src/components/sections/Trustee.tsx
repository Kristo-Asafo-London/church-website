
import React from "react";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { shadowColors } from "../common/common";

interface Trustee {
  id: string;
  name: string;
  role: string;
  member?: boolean;
  bio?: string;
  imageUrl: string;
  socialLinks?: {
    linkedIn?: string;
    twitter?: string;
    website?: string;
  };
}

interface TrusteesProps {
  trustees: Trustee[];
}

export const trusteesData: Trustee[] = [
  {
    id: "1",
    name: "Mr. Dennice Yeboah",
    role: "Chairperson",
    member: true,
    bio: "With over 20 years of experience in nonprofit leadership, Mr. Yeboah brings strategic vision to our organization.",
    imageUrl: "/trustees/chair.jpg",
    // socialLinks: {
    //   linkedIn: "https://linkedin.com/in/denniceyeboah",
    //   twitter: "https://twitter.com/denniceyeboah",
    // },
  },
  {
    id: "2",
    name: "Mr. Akwasi Anane",
    role: "Organisational Contact",
    member: true,
    bio: "Mr. Anane is a dedicated professional with a passion for community development. He has been instrumental in organizing events and initiatives that foster community engagement.",
    imageUrl: "/trustees/organiser.jpg",
    // socialLinks: {
    //   linkedIn: "https://linkedin.com/in/akwasi-anane",
    // },
  },
  {
    id: "4",
    name: "Mr. Daniel Yanogo",
    role: "Trustee Member",
    member: true,
    bio: "Mr. Yanogo is a dedicated advocate for community development and has been involved in various initiatives aimed at improving the lives of those in need.",
    imageUrl: "/trustees/member.jpg",
    // socialLinks: {
    //   twitter: "https://twitter.com/danielyanogo",
    //   website: "https://danielyanogo.com",
    // },
  },
  {
    id: "3",
    name: "Mr. Peter Okyere Boakye",
    role: "Administrator",
    member: false,
    bio: "Mr. Okyere Boakye has dedicated his career to building bridges between organizations and the communities they serve. He has a strong background in administration and organizational development.",
    imageUrl: "/trustees/admin.jpg",
    // socialLinks: {
    //   twitter: "https://twitter.com/peterokyere",
    //   website: "https://peterokyere.com",
    // },
  },
];

const Trustees: React.FC<TrusteesProps> = ({ trustees }) => {
  return (
    <TrusteesContainer id="trustees">
      <TrusteesTitle>Our Trustees</TrusteesTitle>
      <TrusteesDescription>
        Meet the dedicated individuals who guide our organization with their expertise and passion. Each trustee brings a unique set of skills and
        experiences that enrich our mission and help us serve the community effectively.
      </TrusteesDescription>
      <TrusteesGrid>
        {trustees.map((trustee) => (
          <TrusteeCard key={trustee.id}>
            <TrusteeImage imageUrl={trustee.imageUrl} />
            <TrusteeInfo>
              <TrusteeName>{trustee.name}</TrusteeName>
              <TrusteeRole>{trustee.role}</TrusteeRole>
              {trustee.member && <TrusteeMemberBadge>Member</TrusteeMemberBadge>}
              {trustee.bio && <TrusteeBio>{trustee.bio}</TrusteeBio>}
              {trustee.socialLinks && (
                <SocialLinks>
                  {trustee.socialLinks.linkedIn && (
                    <SocialLink href={trustee.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer" aria-label={`${trustee.name} LinkedIn`}>
                      <FaLinkedin />
                    </SocialLink>
                  )}
                  {trustee.socialLinks.twitter && (
                    <SocialLink href={trustee.socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${trustee.name} Twitter`}>
                      <FaTwitter />
                    </SocialLink>
                  )}
                  {trustee.socialLinks.website && (
                    <SocialLink href={trustee.socialLinks.website} target="_blank" rel="noopener noreferrer" aria-label={`${trustee.name} Website`}>
                      <FaGlobe />
                    </SocialLink>
                  )}
                </SocialLinks>
              )}
            </TrusteeInfo>
          </TrusteeCard>
        ))}
      </TrusteesGrid>
    </TrusteesContainer>
  );
};

export default Trustees;

export const TrusteesContainer = styled.div`
  margin: 0 auto;
  padding: 6rem ${theme.spacing.large};
  background: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(90deg, ${shadowColors.join(", ")});
    z-index: 1;
  }
`;

export const TrusteesTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${theme.colors.text};
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: ${theme.colors.light};
    margin: 1rem auto 0;
  }
`;

export const TrusteeMemberBadge = styled.span`
  display: inline-block;
  background-color: ${theme.colors.accent};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const TrusteesDescription = styled.p`
  font-size: 1.2rem;
  color: ${theme.colors.textLight};
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

export const TrusteesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const TrusteeCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const TrusteeImage = styled.div<{ imageUrl: string }>`
  height: 300px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
  }
`;

export const TrusteeInfo = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const TrusteeName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text};
`;

export const TrusteeRole = styled.p`
  color: ${theme.colors.light};
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

export const TrusteeBio = styled.p`
  color: ${theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  color: ${theme.colors.light};
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.light};
  }
`;