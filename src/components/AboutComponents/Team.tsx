'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { useEffect } from 'react';

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Robert Jhonson",
      position: "CEO / Architect",
      image: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa905c8fc8793731d3f9_Member%20Image%2001.webp",
      backTitle: "Ceo, Founders"
    },
    {
      id: 2,
      name: "Allisa Breaker",
      position: "Co Founder / Architect",
      image: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa906c01b1342367e447_Member%20Image%2002.webp",
      backTitle: "Co Founder"
    },
    {
      id: 3,
      name: "Mr. Jony",
      position: "Lead Design / Architect",
      image: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa9080fdbf02fa04eb95_Member%20Image%2003.webp",
      backTitle: "Lead Design"
    },
    {
      id: 4,
      name: "Sophia Brown",
      position: "Founder / Architect",
      image: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa900842b3ce67503d9f_Member%20Image%2004.webp",
      backTitle: "Founder"
    }
  ];

  const socialIcons = {
    facebook: {
      gray: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f40d2b35d3d191e9c_Facebook%20Gray.svg",
      blue: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aacae02413305de5696e_Facebook%20Blue.svg"
    },
    twitter: {
      gray: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f6014e86297e613f3_Twitter%20Gray.svg",
      blue: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f62414a6710a6774f_Twitter%20Blue.svg"
    },
    linkedin: {
      gray: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f6dec5df6f862e9ad_Linkend%20Gray.svg",
      blue: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f32ebea93d1dad4c6_Linkend%20Blue.svg"
    },
    pinterest: {
      gray: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8fc4a168e60b3dfe06_Pinterest%20Gray.svg",
      blue: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885aa8f0572ae9a7e322bc1_Pinterest%20Blue.svg"
    }
  };

  return (
    <section className="section team" style={{ textAlign: 'center', overflow: 'hidden',  }}>
      <div className="w-layout-blockcontainer container w-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
       <div className="faq-top-wrap" data-aos="fade-up">
                    <div className="section-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
                      <div className="section-single-title">
                        <Image 
                          src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/687c318a60d814c2e8209c90_Faq%20Icon.svg" 
                          loading="lazy" 
                          alt="Faq Icon" 
                          className="faq-icon"
                          width={24}
                          height={24}
                        />
                        <div className="section-sub-title">Team</div>
                      </div>
                    </div>
                    <h2 className="faq-title" data-aos="fade-up" data-aos-delay="200">Meet Our All Team Members.</h2>
                    </div>
                    
                     <div className="team-wrapper" data-aos="fade-up">
          <div className="team-all-item-wrap" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '80px',
            padding: '40px 0'
          }}>
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="team-item-wrap" 
                data-aos="fade-up" 
                data-aos-delay={300 + (index * 100)}
                style={{ 
                  maxWidth: '600px',
                  width: '100%',
                  margin: '0 auto'
                }}
              >
                <div className="team-single-wrap">
                  <div className="team-bg-wrap">
                    <Image
                      src={member.image}
                      alt="Team User Image"
                      className="team-user-image"
                      width={400}
                      height={300}
                      loading="lazy"
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        maxWidth: '400px',
                        borderRadius: '8px'
                      }}
                    />
                    <div className="team-btm-wrap" style={{ marginTop: '20px' }}>
                      <h3 className="team-btm-title" style={{ 
                        fontSize: '24px', 
                        marginBottom: '8px',
                        textAlign: 'center'
                      }}>
                        {member.name}
                      </h3>
                      <div className="team-author-pst" style={{ 
                        fontSize: '16px',
                        color: '#666',
                        marginBottom: '20px',
                        textAlign: 'center'
                      }}>
                        {member.position}
                      </div>
                      <div className="team-social-wrapper" style={{ 
                        display: 'flex', 
                        justifyContent: 'center',
                        gap: '12px'
                      }}>
                        <a href="https://www.facebook.com/" target="_blank" className="team-social-link w-inline-block">
                          <div className="team-social-link-wrap">
                            <Image src={socialIcons.facebook.gray} alt="Facebook" width={20} height={20} />
                            <Image src={socialIcons.facebook.blue} alt="Facebook" width={20} height={20} />
                          </div>
                        </a>
                        <a href="https://twitter.com/" target="_blank" className="team-social-link w-inline-block">
                          <div className="team-social-link-wrap">
                            <Image src={socialIcons.twitter.gray} alt="Twitter" width={20} height={20} />
                            <Image src={socialIcons.twitter.blue} alt="Twitter" width={20} height={20} />
                          </div>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" className="team-social-link w-inline-block">
                          <div className="team-social-link-wrap">
                            <Image src={socialIcons.linkedin.gray} alt="LinkedIn" width={20} height={20} />
                            <Image src={socialIcons.linkedin.blue} alt="LinkedIn" width={20} height={20} />
                          </div>
                        </a>
                        <a href="https://www.pinterest.com/" target="_blank" className="team-social-link w-inline-block">
                          <div className="team-social-link-wrap">
                            <Image src={socialIcons.pinterest.gray} alt="Pinterest" width={20} height={20} />
                            <Image src={socialIcons.pinterest.blue} alt="Pinterest" width={20} height={20} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="team-back-title" style={{ 
                  fontSize: '32px',
                  marginTop: '30px',
                  color: '#f0f0f0',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}>
                  {member.backTitle}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;