import { TimelineItem } from './TimelineItem';
import { timeLineListData } from './timelineList';
import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

export const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(timelineRef);

  return (
    <div className="sm:mb-52 flex w-full overflow-x-scroll scrollbar-hide" {...events} ref={timelineRef}>
      <div className="flex">
        {timeLineListData.map((item, i) => (
          <TimelineItem
            key={item.year}
            image={item.image}
            text={item.text}
            year={item.year}
            width={item.width}
            lastOne={i === timeLineListData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
