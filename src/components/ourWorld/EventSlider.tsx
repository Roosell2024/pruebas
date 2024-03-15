import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { eventsData } from '../../assets/data/events';
import { EventItemSlider } from './EventItemSlider';


export const EventSlider = () => {
  const timelineRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(timelineRef);
  return (
    <div className="flex w-full overflow-x-scroll scrollbar-hide " {...events} ref={timelineRef}>
      <div className="flex">
        {eventsData.map((event, i) => (
          <EventItemSlider key={i} eventItem={event} lastOne={i === eventsData.length - 1} />
        ))}
      </div>
    </div>
  );
};
