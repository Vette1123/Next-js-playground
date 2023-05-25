import TodoItem from '@/components/TodoItem'
import { prisma } from '@/services/dbConnection'
import Link from 'next/link'
import React from 'react'

const getTodos = () => {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  'use server'
  await prisma.todo.update({ where: { id }, data: { isCompleted: complete } })
}

async function HomePage() {
  const todos = await getTodos()
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Todos</h1>
        <Link
          className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
          href='/create-todo'
        >
          Create new todo
        </Link>
      </header>
      <ul className='pl-4'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}

export default HomePage
