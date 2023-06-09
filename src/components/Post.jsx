import styles from './Post.module.css';
import { Comments } from './Comments';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';


export  function Post(props) {

    const publishedAtForm = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
    const publishedDateRelativeNow = formatDistanceToNow(props.publishedAt, {locale: ptBR, addSuffix: true});

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!',
      
    ]);

    const [newCommentText, setNewCommentText] = useState('');


    function handerCreatNewComment() {
        event.preventDefault();
        //const newCommentText = event.target.comment.value;  
        setComments([...comments, newCommentText]);
      
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
        setNewCommentText('');
        
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar hasBorder src={props.author.avatarUrl}/>
                   <div className={styles.authorInfo}>
                    <strong>{props.author.name}</strong>
                    <span>{props.author.role}</span>
                   </div>
                </div>
                <time title={publishedAtForm} dateTime={props.publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>

            <div className={styles.contents}>
                {props.content.map(line =>{
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>;
                    }else if (line.type === 'link'){
                         return <p><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handerCreatNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    onChange={handleNewCommentChange} 
                    name="comment" 
                    className={styles.commentArea} 
                    placeholder='Deixe seu comentário'/>
                <footer>
                    <button type="submit">Publicar</button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return (
                        <Comments content={comment}/>
                    )
                  }
                )}
            </div>
        </article>
      )
      
}