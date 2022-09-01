import "./comment-list.styles.scss";
import { useState, useEffect } from "react";
import { getLatestComments, getMoreComments } from "../../firebase";
import SubHeading from "../subheading/subheading.component";
import Comment from "../comment/comment.component";

export default function CommentList() {
  const [comments, setComments] = useState(null);
  const [isMoreComments, setIsMoreComments] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const latestComments = await getLatestComments(3);
      setComments(latestComments);
      setIsLoading(false);
      setFirstLoading(false)
    })();
  }, []);

  async function showMoreComments() {
    setIsLoading(true);
    const moreComments = await getMoreComments(3);
    if (!moreComments) {
      setIsMoreComments(false);
      setIsLoading(false);
      return;
    }
    setComments((comments) => [...comments, ...moreComments]);
    setIsLoading(false);
  }
  return (
    <div className="comment-list" id="comment-list"> 
      <div className="subheading-container">
        <SubHeading highlight="#4C4EF999">Comments</SubHeading>
      </div>
      <div className="comments-container">
        {comments?.map((comment, idx) => (
          <Comment comment={comment} key={`comment-${idx}`}/>
        ))}
        {isLoading ? (
          <div className="loader" style={{height: `${firstLoading && '50px'}`, width: `${firstLoading && '50px'}`}}></div>
        ) : isMoreComments && comments ? (
          <p className="show-more text link" onClick={showMoreComments}>
            load more comments
          </p>
        ) : (
          comments && <p className="text">no more comments left</p>
        )}
      </div>
    </div>
  );
}
