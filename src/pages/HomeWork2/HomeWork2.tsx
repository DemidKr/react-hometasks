import {RefObject, useEffect, useRef, useState} from "react";

export const HomeWork2 = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const ref = useRef<HTMLDivElement | null>(null)

  function updatePosition() {
    const elem = document.getElementById('scroll')
    if (elem !== null) {
      const widgetWidth = elem.clientWidth * (elem.scrollTop / (10000 - elem.offsetHeight))
      setScrollPosition(widgetWidth)
    }
  }

  useEffect(() => {
    if(ref.current === null) return;
    ref.current?.addEventListener('scroll', updatePosition)
  }, []);

  return <div className="relative-container" id="scroll" ref={ref}>
    <div className="scroll-widget" style={{width: scrollPosition}}/>
    <div className="really-huge-container" >
      <h2>Это начало</h2>
      <h2>Это середина</h2>
      <h2>Это конец...</h2>
    </div>
  </div>

};
