import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { MedalsItemSlider } from './MedalsItemSlider';
import { medalsData } from '../../assets/data/ourworld';

export const MedalsSlider = () => {
  const timelineRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(timelineRef);
  return (
    <div className="flex w-full overflow-x-scroll scrollbar-hide sm:m-12 sm:mt-0 mt-10" {...events} ref={timelineRef}>
      <div className="flex">
        {medalsData.map((medal, i) => (
          <MedalsItemSlider key={i} rumMedals={medal} lastOne={i === medalsData.length - 1} />
        ))}
      </div>
    </div>
  );
};
