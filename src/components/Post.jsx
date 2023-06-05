import styles from './Post.module.css';
import { Comments } from './Comments';
import { Avatar } from './Avatar';


export  function Post(props) {
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
                <time title="12 de Maio às 08h10" dateTime='2023-05-12 08:10:01'>Publicado há 1h</time>
            </header>
            <div className={styles.contents}>
                <p>
                    Fala galeraa
                </p>
                <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz Ignite.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi possimus, quaerat dignissimos asperiores id odio quis cumque ratione ea ipsa voluptate laboriosam iste neque similique molestiae aperiam, nihil necessitatibus!
                </p>
                <p><a href="https://github.com/cruzsud/cartaoCredito">https://github.com/cruzsud</a></p>

            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea className={styles.commentArea} placeholder='Deixe seu comentário'/>
                <footer>
                    <button type="submit">Publicar</button> 
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comments/>
                <Comments/>
                <Comments/>
            </div>
        </article>
      )
      
}