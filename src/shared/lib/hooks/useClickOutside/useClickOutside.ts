import { RefObject, useEffect } from "react";

type EventType = keyof DocumentEventMap;

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  eventType: EventType = "mousedown"
) {
  function handleClickOutside(event: Event) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener(eventType, handleClickOutside);
    return () => {
      document.removeEventListener(eventType, handleClickOutside);
    };
  }, []);
}
