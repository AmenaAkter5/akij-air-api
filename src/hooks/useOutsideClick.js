import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
