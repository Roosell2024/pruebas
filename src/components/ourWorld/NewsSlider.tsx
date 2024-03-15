import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';
import { newsData } from '../../assets/data/news';
import { NewItemSlider } from './NewsItemSlider';

export const NewSlider = () => {
  const timelineRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(timelineRef);
  return (
    <div className="flex w-full overflow-x-scroll scrollbar-hide md:my-15" {...events} ref={timelineRef}>
      <div className="flex gap-16 md:p-12 p-5">
        {newsData.map((newItem, i) => (
          <NewItemSlider key={i} newItem={newItem} lastOne={i === newsData.length - 1} />
        ))}
      </div>
    </div>
  );
};
