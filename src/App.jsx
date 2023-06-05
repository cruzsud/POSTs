
import { Header } from './components/Header';
import { Post }  from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
         avatarUrl: 'https://github.com/cruzsud.png',
         name: 'Anderson Cruz',
         role: 'Desenvolvedor FullStack',
    },
    content:'<p> Fala galeraa</p> <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz Ignite.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi possimus, quaerat dignissimos asperiores id odio quis cumque ratione ea ipsa voluptate laboriosam iste neque similique molestiae aperiam, nihil necessitatibus!</p><p><a href="https://github.com/cruzsud/cartaoCredito">https://github.com/cruzsud</a></p>',
    publishedAt: new Date('2022-05-03 11:22:00'),
  },
  {
    id: 2,
    author: {
         avatarUrl: 'https://github.com/diego3g.png',
         name: 'Diego Cruz',
         role: 'Ceo @Rocketseat',
    },
    content:'<p> Fala galeraa</p> <p> Acabei de subir mais um projeto no meu portifa. É um projeto que fiz Ignite.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non commodi possimus, quaerat dignissimos asperiores id odio quis cumque ratione ea ipsa voluptate laboriosam iste neque similique molestiae aperiam, nihil necessitatibus!</p><p><a href="https://github.com/cruzsud/cartaoCredito">https://github.com/cruzsud</a></p>',
    publishedAt: new Date('2022-05-03 13:22:00'),
  }
]

// Componentes REACT 
export function App() {
 
  return (
      <div>
        <Header/>
        <div className={styles.wrapper}>  
          <aside><Sidebar/></aside>
          <main>
            { posts.map(post => {
                  return (
                    <Post 
                      author={post.author} 
                      content={post.content} 
                      publishedAt={post.publishedAt}
                    />
                  )
                }
              )
            }
          </main>
        </div>
      </div>  
  )
}

