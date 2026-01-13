import { useEffect, useRef } from "react";


export function useIntersection(options = {}, className="show"){
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        entry.target.classList.add(className);
        observer.unobserve(entry.target)
      }
      
    }, options);
    
    if(ref.current){
      observer.observe(ref.current);
    }
    return () => observer.disconnect()
  }, [options, className])

  return ref;
}