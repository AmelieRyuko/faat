import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import TodoList from '../components/todolist'

const TodoPage = (props) => (
  <div>
    <Head>
      <title>Todo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="hero">
      <h1 className="title">Ma todolist !</h1>
      
      <TodoList />
    </div>

      <style jsx>{`
        .hero {
          width: 100%;
          max-width: 480px;
          margin: auto;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          margin-bottom: 30px;
        }
        .title {
          text-align: center;
        }
        ul {
          max-width: 480px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: column;
          list-style: none;
        }
        li {
          margin: 10px 0;
        }
        
      `}</style>
    </div>
  )

export default TodoPage
