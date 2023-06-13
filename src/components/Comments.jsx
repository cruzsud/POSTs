import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comments.module.css';
import { Avatar } from './Avatar';

export function Comments({ content, onDeleteComment }) {

    function handleDeleteComment() {

        onDeleteComment(content);
              
    }
    return(
        <div className={style.comment}>
            <Avatar hasBorder={false} src='https://github.com/maykbrito.png'/>
             <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Anderson Cruz</strong>
                            <time title="12 de Maio às 08h10" dateTime='2023-05-12 08:10:01'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'> 
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer><button><ThumbsUp/>Aplaudir <span>20</span></button></footer>
             </div>
        </div>
    )
    
}