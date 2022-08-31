import './comment.styles.scss'

export default function Comment({comment}) {
    const {name, message} = comment
  return (
    <div className='comment'>
        <h3>{name}</h3>
        <p>{message}</p>
    </div>
  )
}
