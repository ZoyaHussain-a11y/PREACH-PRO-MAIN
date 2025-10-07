'use client';
import { autoUpdate, computePosition, offset, shift } from '@floating-ui/dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const Mission: React.FC = () => {
  // Refs for icon wrappers so Floating UI can compute positions
  const iconRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out', once: true });

    // Setup Floating UI autoUpdate for each icon to apply a subtle shift on hover/mousemove.
    const cleanups: Array<() => void> = [];

    iconRefs.current.forEach((iconEl, idx) => {
      if (!iconEl) return;

      // We'll create a tiny floating "ghost" element for computing transforms,
      // and then apply small translate transforms to the real icon to create a shift effect.
      // This approach uses computePosition + shift to ensure the icon subtly moves inside bounds.
      const targetEl = iconEl.querySelector('.mission-icon-bg') as HTMLElement | null;

      if (!targetEl) return;

      // Create a tiny floating element (hidden) as the floating element used by computePosition.
      // We won't add it to the DOM; instead we'll use computePosition to calculate offsets and apply transform.
      let mounted = true;

      // Handler to compute and apply small shift based on cursor position inside the icon wrapper
      const onMouseMove = (e: MouseEvent) => {
        if (!mounted) return;

        // Use computePosition with a virtual reference at pointer location
        const virtualReference = {
          getBoundingClientRect: () => ({
            width: 0,
            height: 0,
            top: e.clientY,
            bottom: e.clientY,
            left: e.clientX,
            right: e.clientX,
            x: e.clientX,
            y: e.clientY,
            toJSON: () => ({}),
          }),
        } as any;

        // computePosition returns x,y where the floating element should be placed relative to reference
        computePosition(virtualReference, targetEl, {
          middleware: [
            offset(8), // little offset
            shift({ padding: 6 }), // keep inside viewport
          ],
        }).then(({ x, y }) => {
          if (!mounted) return;

          // convert computed x,y into a subtle translate relative to center of icon element
          const rect = targetEl.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const deltaX = (x - centerX) * 0.08; // reduce magnitude
          const deltaY = (y - centerY) * 0.08;

          // apply transform (subtle)
          targetEl.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
          targetEl.style.transition = 'transform 180ms ease-out';
        });
      };

      const onMouseLeave = () => {
        targetEl.style.transform = '';
        targetEl.style.transition = 'transform 220ms ease-out';
      };

      // use autoUpdate to keep position logic stable if layout changes (returns cleanup)
      const stopAuto = autoUpdate(
        // reference: the wrapper (we supply a dummy ref below by using an element)
        targetEl,
        targetEl,
        () => {
          // do nothing - we only use computePosition on mouse events
        }
      );

      targetEl.addEventListener('mousemove', onMouseMove);
      targetEl.addEventListener('mouseleave', onMouseLeave);

      cleanups.push(() => {
        mounted = false;
        targetEl.removeEventListener('mousemove', onMouseMove);
        targetEl.removeEventListener('mouseleave', onMouseLeave);
        stopAuto();
      });
    });

    return () => {
      cleanups.forEach((c) => c());
    };
  }, []);

  // Testimonials-like content converted to mission items
  const missionItems = [
    {
      id: 'm1',
      title: 'Our Mission',
      detail:
        'Our mission is to simplify complex processes through intuitive technology, enabling businesses',
      list: ['Automate with precision and reliability', 'Deliver seamless user experiences'],
      icon:
        'https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885f46b7aa5e71e790a6865_Mission%20Icon%2001.svg',
    },
    {
      id: 'm2',
      title: 'Our Vision',
      detail:
        'We see a future where innovation streamlines daily tasks, allowing teams to focus on what matters most.',
      list: ['Build smarter, scalable systems', 'Foster meaningful digital interactions'],
      icon:
        'https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885f46bf34c5e02ca3d0bfd_Mission%20Icon%2002.svg',
    },
  ];

  return (
    <section className="section mission">
      <div className="w-layout-blockcontainer container w-container">
        <div className="mission-wrapper">
          <div className="mission-grid-wrap">
            <div
              className="mission-left-wrap"
              data-aos="fade-up"
              data-w-id="20f1e3cc-ac95-1f2c-d329-96ac047a2144"
              style={{ opacity: 1 }}
            >
              <div className="section-sub-title-wrap" data-aos="fade-up" data-aos-delay="100">
                <div className="section-single-title pd--09">
                  <Image
                    src="https://cdn.prod.website-files.com/687a22774248f07556bfb7de/6885f46b0584072faacc61ba_Mission%20Sub%20Icon.svg"
                    loading="lazy"
                    alt="Faq Icon"
                    className="faq-icon"
                    width={24}
                    height={24}
                  />
                  <div className="section-sub-title font-16">Our Mission &amp; Vision</div>
                </div>
              </div>

              <h4 className="mission-title" data-aos="fade-up" data-aos-delay="200">
                Driven by Innovation, Guided by Purpose Our Mission and Vision for Smarter, Faster,
                and More Ethical Coding Experiences
              </h4>
            </div>

            <div
              className="mission-right-wrap"
              data-aos="fade-up"
              data-w-id="8a7f03f9-16a9-46a6-bf3f-a6c7827cac92"
              style={{ opacity: 1 }}
            >
              {missionItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="mission-single-wrap"
                  // allow AOS stagger effect
                  data-aos="fade-up"
                  data-aos-delay={300 + (idx * 100)}
                  ref={(el) => {
                    // store wrapper for floating calculations (iconRefs)
                    iconRefs.current[idx] = el;
                  }}
                >
                  <div className="mission-icon-wrap">
                    <div className="mission-icon-bg" aria-hidden>
                      <Image
                        src={item.icon}
                        loading="lazy"
                        alt="Mission Single Icon"
                        className="mission-single-icon"
                        width={48}
                        height={48}
                      />
                    </div>
                  </div>

                  <h3 className="mission-single-title">{item.title}</h3>
                  <p className="mission-single-details">{item.detail}</p>

                  <ul role="list" className="mission-signle-list">
                    {item.list.map((li, i) => (
                      <li key={i} className="mission-signle-list-item">
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;