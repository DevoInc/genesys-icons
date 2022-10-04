'use strict';

import { useEffect } from 'react';

/**
 * This hook allows you to detect clicks outside of a specified elements:
 * container and trigger
 *
 * This hook checks both the reference.current and the reference itself, because
 * this way it can be used by passing those references with useRef and useState
 * respectively.
 *
 */

export const useOnEventOutside = ({
  events = ['mousedown', 'touchstart'],
  handler,
  references,
}) => {
  useEffect(() => {
    const listener = (event) => {
      const isInside = references.some(
        (ref) =>
          (ref?.current?.contains && ref?.current?.contains(event.target)) ||
          (ref?.contains && ref?.contains(event.target))
      );
      if (!isInside) {
        handler(event);
      }
    };
    events.forEach((event) => {
      document.addEventListener(event, listener);
    });
    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener);
      });
    };
  }, [events, handler, references]);
};
