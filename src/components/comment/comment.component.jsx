import "./comment.styles.scss";

export default function Comment({ comment }) {
  const { name, message } = comment;
  return (
    <div className="comment">
      <div className="user-name">
        <img src="./user.png" alt="user" />
        <h3>{name}</h3>
      </div>
      <p>{message}</p>
    </div>
  );
}
