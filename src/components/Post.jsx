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
        setNewCommentText('');
    }

    function handleNewCommentChange() {

        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);    
    }

    function handleNewCommentInvalid() {

        event.target.setCustomValidity('Esse campo é obrigatório!');
        if (newCommentText === '') return false;
    }

    function deleteComment(commentToDelete) {
        const commensWithoutDeleteOne = comments.filter(comment =>{
            return comment !== commentToDelete;
        })
        setComments(commensWithoutDeleteOne);
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
                        return <p key={line.content}>{line.content}</p>;
                    }else if (line.type === 'link'){
                         return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handerCreatNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    onChange={handleNewCommentChange} 
                    name="comment" 
                    className={styles.commentArea} 
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={newCommentText.length==0}>
                        Publicar
                    </button> 
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return (
                        <Comments 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                         />
                    )
                  }
                )}
            </div>
        </article>
      )
      
}