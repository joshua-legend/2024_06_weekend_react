import CommentDate from "./CommentDate";
import NickName from "./Nickname";
import ProfileImage from "./ProfileImage";
import Reply from "./Reply";

const Comment = () => {
  return (
    <div className="bg-slate-700 w-80 h-20 flex gap-3 p-3 ">
      <div className="flex-none">
        <ProfileImage />
      </div>
      <div className="w-full flex flex-col flex-initial">
        <div className="w-full flex-none flex justify-between">
          <NickName />
          <CommentDate />
        </div>
        <div className="flex-1">
          <Reply />
        </div>
      </div>
    </div>
  );
};

export default Comment;
