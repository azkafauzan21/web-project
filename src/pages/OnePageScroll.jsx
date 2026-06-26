import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { TentangKami } from './TentangKami';
import { ModulHub } from './ModulHub';
import { Galeri } from './Galeri';
import { Kontak } from './Kontak';

export function OnePageScroll() {
  const navigate = useNavigate();
  const location = useLocation();
  const isProgrammaticScroll = useRef(false);

  const sections = [
    { id: 'beranda', path: '/', Component: Home },
    { id: 'tentang', path: '/tentang', Component: TentangKami },
    { id: 'modul', path: '/modul', Component: ModulHub },
    { id: 'galeri', path: '/galeri', Component: Galeri },
    { id: 'kontak', path: '/kontak', Component: Kontak },
  ];

  // Intersection Observer for scroll spy
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px', // Adjust margins to trigger when element is prominent
      threshold: 0, 
    };

    const observerCallback = (entries) => {
      // Allow some time for programmatic smooth scrolls to finish before updating URL
      if (isProgrammaticScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const path = entry.target.getAttribute('data-path');
          if (path && location.pathname !== path) {
            navigate(path, { replace: true });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionElements = document.querySelectorAll('section[data-path]');
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [navigate, location.pathname]);

  // Initial scroll handling on mount (if user lands directly on /tentang, etc)
  useEffect(() => {
    const currentSection = sections.find(s => s.path === location.pathname);
    if (currentSection) {
      const el = document.getElementById(currentSection.id);
      if (el) {
        // Use a slight delay to ensure layout is ready
        setTimeout(() => {
          isProgrammaticScroll.current = true;
          el.scrollIntoView({ behavior: 'auto' });
          
          setTimeout(() => {
            isProgrammaticScroll.current = false;
          }, 1000);
        }, 100);
      }
    }
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {sections.map(({ id, path, Component }, index) => (
        <section
          key={id}
          id={id}
          data-path={path}
          className={`min-h-screen py-8 flex flex-col justify-center ${index !== sections.length - 1 ? 'border-b border-slate-200 dark:border-slate-800/50' : ''}`}
        >
          <Component />
        </section>
      ))}
    </div>
  );
}
