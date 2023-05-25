'use client'
import React from 'react'

interface Props {
  id: string
  content: string
  isCompleted: boolean
  toggleTodo: (id: string, complete: boolean) => void
}

function TodoItem(props: Props) {
  const { id, content, isCompleted, toggleTodo } = props
  return (
    <li className='flex gap-1 items-center'>
      <input
        id={id}
        type='checkbox'
        className='cursor-pointer peer'
        defaultChecked={isCompleted}
        onChange={(e) => toggleTodo(id, e?.target?.checked)}
      />
      <label
        htmlFor={id}
        className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
      >
        {content}
      </label>
    </li>
  )
}

export default TodoItem
