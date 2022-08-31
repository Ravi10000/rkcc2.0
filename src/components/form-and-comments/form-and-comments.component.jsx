import './form-and-comments.styles.scss'
import ContactForm from '../contact-form/form.component'
import CommentList from '../comment-list/comment-list.component'

export default function FormAndComments({reverse}) {
  return (
    <div className='form-comments-container'>
        <div className={`form-and-comments ${reverse && 'reverse'}`} >
            <ContactForm />
            <CommentList />
        </div>
    </div>
  )
}
