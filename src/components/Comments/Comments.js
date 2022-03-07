import './Comments.scss';


export default function Comments({ comments }){
    return (
<ul className='comments'>
{comments.map((comment) => {
    return(
        <li className='comments-list comments-list__border-top'>
            <div className='comments-list__item'>
                <h3 className='comments-list__item--name'>{comment.name}</h3>
                <p className='comments-list__item--date'>{ new Date (comment.timestamp).toLocaleDateString()}</p>
            </div>
                <p className='comments-list__item--comment'>{comment.comment}</p>
                <img className='comments-list__item--avatar' alt='avatar'/>
          </li>
    )
})

  }  </ul>
    )}