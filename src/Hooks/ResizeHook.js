import { useState, useCallback } from 'react';
import { useResizeDetector } from 'react-resize-detector';

const ResizeHook = (targetRef) => {
   const [mainWidth, setMainWidth] = useState(0);

   const onResize = useCallback((width) => {
         setMainWidth(Math.round(width));
   }, []);

   useResizeDetector(
      {
         handleHeight: false,
         refreshMode: 'debounce',
         refreshRate: 100,
         skipOnMount: true,
         onResize,
         targetRef
      }
   );

   return mainWidth;
}

export default ResizeHook;