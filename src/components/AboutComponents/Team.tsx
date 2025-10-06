'use client';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  imageSrcSet: string;
  imageSizes: string;
  dataWId: string;
  socialLinks: {
    facebook: { dataWId: string };
    twitter: { dataWId: string };
    linkedin: { dataWId: string };
    pinterest: { dataWId: string };
  };
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Robert Jhonson",
      position: "ceo / architect",
      image: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa905c8fc8793731d3f9_Member%20Image%2001.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa905c8fc8793731d3f9_Member%20Image%2001-p-500.webp 500w, https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa905c8fc8793731d3f9_Member%20Image%2001-p-800.webp 800w, https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa905c8fc8793731d3f9_Member%20Image%2001.webp 923w",
      imageSizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 923px",
      dataWId: "eca404a8-dccd-4003-2d0a-76423871cc0f",
      socialLinks: {
        facebook: { dataWId: "4262da88-f4a9-f5e4-df44-bc8e150eca98" },
        twitter: { dataWId: "f9cb6585-49bd-ecfc-c6fa-e4f862e45e78" },
        linkedin: { dataWId: "f80e655e-6769-6fe0-7280-5c9efa99c740" },
        pinterest: { dataWId: "ea730394-8bab-caa6-eb3b-c2463dfcb54c" }
      }
    },
    {
      id: 2,
      name: "Allisa Breaker",
      position: "Co Founder / architect",
      image: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa906c01b1342367e447_Member%20Image%2002.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa906c01b1342367e447_Member%20Image%2002-p-500.webp 500w, https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa906c01b1342367e447_Member%20Image%2002-p-800.webp 800w, https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa906c01b1342367e447_Member%20Image%2002.webp 922w",
      imageSizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 922px",
      dataWId: "eaa3b46d-c76c-c2a6-de90-72ae8d111cb0",
      socialLinks: {
        facebook: { dataWId: "eaa3b46d-c76c-c2a6-de90-72ae8d111cba" },
        twitter: { dataWId: "eaa3b46d-c76c-c2a6-de90-72ae8d111cbe" },
        linkedin: { dataWId: "eaa3b46d-c76c-c2a6-de90-72ae8d111cc2" },
        pinterest: { dataWId: "eaa3b46d-c76c-c2a6-de90-72ae8d111cc6" }
      }
    },
    {
      id: 3,
      name: "Mr. Jony",
      position: "Lead Design / architect",
      image: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa9080fdbf02fa04eb95_Member%20Image%2003.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa9080fdbf02fa04eb95_Member%20Image%2003-p-500.webp 500w, https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa9080fdbf02fa04eb95_Member%20Image%2003-p-800.webp 800w, https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa9080fdbf02fa04eb95_Member%20Image%2003.webp 922w",
      imageSizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 922px",
      dataWId: "2fe5bd27-6a5c-4214-d23d-ba1faeb23c6f",
      socialLinks: {
        facebook: { dataWId: "2fe5bd27-6a5c-4214-d23d-ba1faeb23c79" },
        twitter: { dataWId: "2fe5bd27-6a5c-4214-d23d-ba1faeb23c7d" },
        linkedin: { dataWId: "2fe5bd27-6a5c-4214-d23d-ba1faeb23c81" },
        pinterest: { dataWId: "2fe5bd27-6a5c-4214-d23d-ba1faeb23c85" }
      }
    },
    {
      id: 4,
      name: "Mr. Jony",
      position: "Founder / architect",
      image: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa900842b3ce67503d9f_Member%20Image%2004.webp",
      imageSrcSet: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa900842b3ce67503d9f_Member%20Image%2004-p-500.webp 500w, https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa900842b3ce67503d9f_Member%20Image%2004-p-800.webp 800w, https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa900842b3ce67503d9f_Member%20Image%2004.webp 922w",
      imageSizes: "(max-width: 767px) 100vw, (max-width: 991px) 728px, 922px",
      dataWId: "2216c2dc-9ede-3198-0a47-1aeba40d1461",
      socialLinks: {
        facebook: { dataWId: "2216c2dc-9ede-3198-0a47-1aeba40d146b" },
        twitter: { dataWId: "2216c2dc-9ede-3198-0a47-1aeba40d146f" },
        linkedin: { dataWId: "2216c2dc-9ede-3198-0a47-1aeba40d1473" },
        pinterest: { dataWId: "2216c2dc-9ede-3198-0a47-1aeba40d1477" }
      }
    }
  ];

  const backgroundTitles = [
    "Ceo, Founders",
    "Ceo , Architect", 
    "Ceo , Architect",
    "Ceo , Architect"
  ];

  const socialIconStyle = {
    transform: "translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
  };

  return (
    <section className="section team">
      <div className="w-layout-blockcontainer container w-container">
        <div data-w-id="ab3787e3-ed0a-e746-2f10-34de67e0eadc" className="team-wrapper">
          <div className="team-sticky-wrap">
            <div data-w-id="48061a32-c855-6eb2-9248-49d3ea24881f" style={{ opacity: 0 }} className="team-all-wrap">
              <div className="team-all-item-wrap">
                {teamMembers.map((member, index) => (
                  <div 
                    key={member.id}
                    data-w-id={member.dataWId}
                    className={`team-item-wrap _0${index + 1}`}
                  >
                    <div className="team-single-wrap">
                      <div className="team-bg-wrap">
                        <img 
                          src={member.image}
                          loading="lazy"
                          sizes={member.imageSizes}
                          srcSet={member.imageSrcSet}
                          alt="Team User Image"
                          className="team-user-image"
                        />
                        <div className="team-btm-wrap">
                          {index === 0 ? (
                            <h3 className="team-btm-title">{member.name}</h3>
                          ) : (
                            <h4 className="team-btm-title">{member.name}</h4>
                          )}
                          <div className="team-author-pst">{member.position}</div>
                          <div className="team-social-wrapper">
                            {/* Facebook */}
                            <a 
                              data-w-id={member.socialLinks.facebook.dataWId}
                              href="https://www.facebook.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="team-social-link w-inline-block"
                            >
                              <div className="team-social-link-wrap">
                                <img 
                                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f40d2b35d3d191e9c_Facebook%20Gray.svg" 
                                  loading="lazy" 
                                  style={socialIconStyle}
                                  alt="Team Social Icon" 
                                  className={`team-social-icon ${index === 1 ? '_02' : ''}`}
                                />
                                <img 
                                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aacae02413305de5696e_Facebook%20Blue.svg" 
                                  loading="lazy" 
                                  style={socialIconStyle}
                                  alt="Team Social Icon" 
                                  className={`team-social-icon ${index === 1 ? '_02' : ''}`}
                                />
                              </div>
                            </a>

                            {/* Twitter */}
                            <a 
                              data-w-id={member.socialLinks.twitter.dataWId}
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="team-social-link w-inline-block"
                            >
                              <div className="team-social-link-wrap">
                                <img 
                                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f6014e86297e613f3_Twitter%20Gray.svg" 
                                  loading="lazy" 
                                  style={socialIconStyle}
                                  alt="Team Social Icon" 
                                  className="team-social-icon"
                                />
                                <img 
                                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f62414a6710a6774f_Twitter%20Blue.svg" 
                                  loading="lazy" 
                                  style={socialIconStyle}
                                  alt="Team Social Icon" 
                                  className="team-social-icon"
                                />
                              </div>
                            </a>

                            {/* LinkedIn */}
                            <a 
                              data-w-id={member.socialLinks.linkedin.dataWId}
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="team-social-link w-inline-block"
                            >
                              <div className="team-social-link-wrap">
                                <img 
                                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f6dec5df6f862e9ad_Linkend%20Gray.svg" 
                                  loading="lazy" 
                                  alt="Team Social Icon" 
                                  className="team-social-icon _01"
                                />
                                <img 
                                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f32ebea93d1dad4c6_Linkend%20Blue.svg" 
                                  loading="lazy" 
                                  style={socialIconStyle}
                                  alt="Team Social Icon" 
                                  className="team-social-icon"
                                />
                              </div>
                            </a>

                            {/* Pinterest */}
                            <a 
                              data-w-id={member.socialLinks.pinterest.dataWId}
                              href="https://www.pinterest.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="team-social-link w-inline-block"
                            >
                              <div className="team-social-link-wrap">
                                <img 
                                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8fc4a168e60b3dfe06_Pinterest%20Gray.svg" 
                                  loading="lazy" 
                                  style={socialIconStyle}
                                  alt="Team Social Icon" 
                                  className="team-social-icon"
                                />
                                <img 
                                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f0572ae9a7e322bc1_Pinterest%20Blue.svg" 
                                  loading="lazy" 
                                  style={socialIconStyle}
                                  alt="Team Social Icon" 
                                  className="team-social-icon"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="team-all-title-wrap">
                {backgroundTitles.map((title, index) => (
                  <h1 key={index} className="team-back-title">
                    {title}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;