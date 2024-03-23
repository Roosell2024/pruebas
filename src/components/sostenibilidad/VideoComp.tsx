interface VideoCompProps {
  autoPlay: boolean;
  video: string;
}

export const VideoComp = ({ autoPlay, video }: VideoCompProps) => {
  return (
    <div className="flex justify-center">
      <video width="1020" height="980" controls autoPlay={autoPlay} key={video} className="bg-black/20">
        <track kind="captions"></track>
        <source src={`${video}#t=0.1`} type="video/mp4" />
      </video>
    </div>
  );
};