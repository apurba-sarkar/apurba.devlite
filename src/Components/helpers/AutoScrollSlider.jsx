import{ useRef, useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const AutoScrollSlider = ({ children }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      duration: 1500, // Change slide duration (in milliseconds)
      dragStart: () => autoScroll.stop(), // Stop auto scroll on drag
      dragEnd: () => autoScroll.start(), // Resume auto scroll after drag
    });

    const autoScroll = {
      intervalId: null,
      start() {
        this.intervalId = setInterval(() => {
          if (slider) {
            slider.next();
          }
        }, 3000); // Change auto-scroll interval (in milliseconds)
      },
      stop() {
        clearInterval(this.intervalId);
      },
    };

    autoScroll.start(); // Start auto scroll initially

    return () => {
      autoScroll.stop(); // Stop auto scroll when component unmounts
      slider.destroy(); // Destroy Keen Slider instance to prevent memory leaks
    };
  }, []); // Run effect only on initial mount

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  );
};

export default AutoScrollSlider;