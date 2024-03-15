interface VideoCompProps {
  autoPlay: boolean;
  video: string;
}

export const VideoComp = ({ autoPlay, video }: VideoCompProps) => {
  return (
    <div className="flex justify-center">
      <video width="1020" height="980" controls autoPlay={autoPlay} key={video}>
        <track kind="captions"></track>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};