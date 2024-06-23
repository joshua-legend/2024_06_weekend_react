export type ProfileImageProps = {
  imgSrc?: string;
};

const ProfileImage = ({ imgSrc = "default.webp" }: ProfileImageProps) => {
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden">
      <img className="w-full h-full object-cover" src={imgSrc} alt="" />
    </div>
  );
};

export default ProfileImage;
