import { useEffect, RefObject } from 'react';

/**
 * Parameters for the useOutsideClick hook
 */
interface UseOutsideClickParams<T extends HTMLElement = HTMLElement> {
  /** Single ref or array of refs to monitor for outside clicks */
  refs: RefObject<T | null> | RefObject<T | null>[];
  /** Callback function to execute when click occurs outside */
  callback: () => void;
  /** Optional flag to enable/disable the hook (default: true) */
  enabled?: boolean;
}

/**
 * Custom hook to detect clicks outside of specified element(s)
 */
export function useOutsideClick<T extends HTMLElement = HTMLElement>({
  refs,
  callback,
  enabled = true,
}: UseOutsideClickParams<T>): void {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const refArray = Array.isArray(refs) ? refs : [refs];

      // Check if click is outside ALL refs
      const isOutside = refArray.every(
        (ref) => ref.current && !ref.current.contains(target)
      );

      if (isOutside) {
        callback();
      }
    };

    // Add both click and touchend for mobile support (using click instead of mousedown to prevent conflicts)
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [refs, callback, enabled]);
}

