import React from 'react'


export default function BookItem({post,user,deleteHandler}) {
  return (
    <div className="col-4 mt-1">
    <div className="card">
      <div className="card-body">
        <p className="card-text">{post.bookName}</p>
      </div>
      <img
        style={{ height: '300px', objectFit: 'cover' }}
        src={post.img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{post.description}</p>
      </div>
      {user?.id === post.userId &&
      <div className=" col d-flex justify-content-between align-items-center">
      <a href={`/books/${post.id}`} className="btn btn-primary mt-1">Редактировать</a>
      <button disabled={user?.id !== post.userId} onClick={() => deleteHandler(post.id)} type="button" className="btn btn-danger mt-1">Удалить</button>
        </div>
        }
    <div className="card-body">
        <p className="card-text">{`Запостил: ${post?.User?.name}`}</p>
      </div>
    </div>
  </div>
  )
}
