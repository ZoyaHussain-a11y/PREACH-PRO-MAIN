
interface Testimonial {
  id: number;
  authorName: string;
  authorPosition: string;
  authorImage: string;
  testimonialText: string;
  dataWId: string;
}

const Testimonial = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      authorName: "Jessica Redman",
      authorPosition: "Ceo of Ozz cafe",
      authorImage: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885bd4bfbe7f9f2211692ad_Team%20Author%20Image%2001.svg",
      testimonialText: "Satch is the first bag that's actually made my day easier. It's lightweight, spacious, and feels built to last. Stylish and practical — the perfect combo.",
      dataWId: "ad56ce28-bce3-0535-9dac-cfbbdc08e47e"
    },
    {
      id: 2,
      authorName: "Harriet Nitzsche",
      authorPosition: "Product Brand Executive",
      authorImage: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/68906a9855a360a548974f1c_Author%20Image%2004.png",
      testimonialText: "Satch is the first bag that's actually made my day easier. It's lightweight, spacious, and feels built to last. Stylish and practical — the perfect combo.",
      dataWId: "b294a1ac-cdea-9a59-3882-27d8172d234f"
    },
    {
      id: 3,
      authorName: "Rex Nitzsche",
      authorPosition: "Legacy Factors Technician",
      authorImage: "https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885bd4bfbe7f9f2211692ad_Team%20Author%20Image%2001.svg",
      testimonialText: "From commuting to weekend trips, Satch handles it all. It's the only bag I trust to keep up with my lifestyle. Comfortable, reliable, and effortlessly cool.",
      dataWId: "faebf95b-1449-146c-2c3c-8bc556ff13ec"
    }
  ];

  return (
    <section className="section testimonial">
      <div className="w-layout-blockcontainer container w-container">
        <div className="testimonial-wrapper">
          <div className="testimonial-top-wrap">
            <div 
              data-w-id="aeae3bdb-c569-9904-a67a-e29fb05df2cf" 
              style={{ opacity: 1 }} 
              className="section-sub-title-wrap"
            >
              <div className="section-single-title pd--09">
                <img 
                  src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885bd4ad4249589709b6ae3_Author%20Sub%20Icon.svg" 
                  loading="lazy" 
                  alt="Testimonial Icon" 
                  className="faq-icon"
                />
                <div className="section-sub-title font-16 ">Testimonial</div>
              </div>
            </div>
            <h2 className="testimonial-title" style={{ marginBottom: '2rem' }}>Voices of Trust</h2>
          </div>
          
          <div 
            data-w-id="93286eba-c8f1-7933-709e-963a5704f05f" 
            style={{ opacity: 1 }} 
            className="testimonial-wrap"
          >
            {/* Grid layout for testimonials */}
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  data-w-id={testimonial.dataWId}
                  className="testimonial-card"
                >
                  <div className="testimonial-single-all-wrap">
                    <div className="testimonial-single-slide-bg">
                      <div className="testimonial-single-slide-wrap">
                        <div className="testimonial-slider-top-wrap">
                          <div className="testimonial-slider-author-wrap">
                            <img 
                              src={testimonial.authorImage}
                              loading="lazy"
                              alt="Testimonial Author"
                              className="testimonial-author"
                            />
                            <div className="testimonial-author-details">
                              <h3 className="testimonial-author-title">{testimonial.authorName}</h3>
                              <div className="testimonial-author-details-text">{testimonial.authorPosition}</div>
                            </div>
                          </div>
                          <img 
                            src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885c804e135439678bbd3e1_Testimonial%20Star.svg"
                            loading="lazy"
                            alt="Testimonial Star"
                            className="testimonial-star"
                          />
                        </div>
                        <div className="testimonial-line"></div>
                        <p className="testimonial-details">{testimonial.testimonialText}</p>
                      </div>
                    </div>
                    <img 
                      src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885bd49af72390465ad1b0c_quote.svg"
                      loading="lazy"
                      alt="Testimonial Quotes"
                      className="testimonial-quotes"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;