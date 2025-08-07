// Trustees.tsx

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
  },
  {
    id: "2",
    name: "Mr. Akwasi Anane",
    role: "Organisational Contact",
    member: true,
    bio: "Mr. Anane is a dedicated professional with a passion for community development. He has been instrumental in organizing events and initiatives that foster community engagement.",
    imageUrl: "/trustees/organiser.jpg",
  },
  {
    id: "4",
    name: "Mr. Daniel Yanogo",
    role: "Trustee Member",
    member: true,
    bio: "Mr. Yanogo is a dedicated advocate for community development and has been involved in various initiatives aimed at improving the lives of those in need.",
    imageUrl: "/trustees/member.jpg",
  },
  {
    id: "3",
    name: "Mr. Peter Okyere Boakye",
    role: "Administrator",
    member: false,
    bio: "Mr. Okyere Boakye has dedicated his career to building bridges between organizations and the communities they serve. He has a strong background in administration and organizational development.",
    imageUrl: "/trustees/admin.jpg",
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

// -------------------- STYLES --------------------

export const TrusteesContainer = styled.div`
  margin: 0 auto;
  padding: 4rem 1.5rem;
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
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.text};

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 3px;
    background: ${theme.colors.light};
    margin: 0.75rem auto 0;
  }
`;

export const TrusteesDescription = styled.p`
  font-size: 1rem;
  color: ${theme.colors.textLight};
  text-align: center;
  margin: 0 auto 2rem;
  max-width: 700px;
  line-height: 1.5;
`;

export const TrusteesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TrusteeCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const TrusteeImage = styled.div<{ imageUrl: string }>`
  height: 300px;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;


export const TrusteeInfo = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

export const TrusteeName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: ${theme.colors.text};
`;

export const TrusteeRole = styled.p`
  font-size: 1rem;
  color: ${theme.colors.light};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const TrusteeMemberBadge = styled.span`
  display: inline-block;
  background-color: ${theme.colors.accent};
  color: white;
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  margin-bottom: 1rem;
`;

export const TrusteeBio = styled.p`
  color: ${theme.colors.text};
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const SocialLink = styled.a`
  color: ${theme.colors.light};
  font-size: 1.3rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.accent};
  }
`;
