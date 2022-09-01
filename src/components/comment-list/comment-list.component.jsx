import "./comment-list.styles.scss";
import { useState, useEffect } from "react";
import { getLatestComments, getMoreComments } from "../../firebase";
import SubHeading from "../subheading/subheading.component";
import Comment from "../comment/comment.component";
import { motion } from "framer-motion";

export default function CommentList() {
  const [commentsSnapshot, setCommentsSnapshot] = useState(null);
  const [comments, setComments] = useState(null);
  const [isMoreComments, setIsMoreComments] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [firstLoading, setFirstLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const latestCommentsSnapshot = await getLatestComments({ count: 5 });
      setCommentsSnapshot(latestCommentsSnapshot);
      const latestComments = [];
      latestCommentsSnapshot.docs.forEach((doc) => {
        latestComments.push({ ...doc.data(), id: doc.id });
      });
      setComments(latestComments);
      setIsLoading(false);
      setFirstLoading(false);
    })();
  }, []);

  async function showMoreComments() {
    const lastComment = commentsSnapshot.docs[commentsSnapshot.docs.length - 1];
    console.log({ lastComment: lastComment.data() });
    setIsLoading(true);
    const latestCommentsSnapshot = await getMoreComments({
      count: 5,
      lastComment,
    });
    setCommentsSnapshot(latestCommentsSnapshot);
    const latestComments = [];
    latestCommentsSnapshot.docs.forEach((doc) => {
      latestComments.push({ ...doc.data(), id: doc.id });
    });
    if (!latestComments.length) {
      setIsMoreComments(false);
      setIsLoading(false);
      return;
    }
    if (
      comments[comments.length - 1].id ===
      latestComments[latestComments.length - 1].id
    ) {
      setIsMoreComments(false);
      setIsLoading(false);
      return;
    }
    setComments((comments) => [...comments, ...latestComments]);
    setIsLoading(false);
  }

  return (
    <div className="comment-list" id="comment-list">
      <div className="subheading-container">
        <SubHeading highlight="#4C4EF999">Top Comments</SubHeading>
      </div>
      <div className="comments-container">
        {comments?.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
        {isLoading ? (
          <div className={`loader-comments ${firstLoading && 'first-loading'}`}></div>
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
