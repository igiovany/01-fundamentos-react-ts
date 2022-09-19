import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/igiovany.png',
      name: 'Giovany Inocêncio',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Opa, boa noite!' },
      { type: 'paragraph', content: 'Estou iniciando os estudos em ReactJS na plataforma Ignite da RocketSeat, em breve estarei subindo novos projetos no meu GitHub!' },
      { type: 'link', content: 'https://github.com/igiovany' },  
    ],
    publishedAt: new Date('2022-09-09 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/guuhschmaltz.png',
      name: 'Gustavo Schmaltz',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Apenas um teste' },
      { type: 'paragraph', content: 'Testando o conteúdo do post!' },
      { type: 'link', content: 'https://github.com/igiovany' },  
    ],
    publishedAt: new Date('2022-09-10 10:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={ styles.wrapper }>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
    
    
  )
}
