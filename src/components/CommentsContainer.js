import React from 'react'
const comments=[
  {
    name:"Amalks",
    text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
    replies:[]
  },
  {
    name:"Amalks",
    text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
    replies:[]
  },
  {
    name:"Amalks",
    text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
    replies:[]
  },
  {
    name:"Amalks",
    text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
    replies:[]
  },
  {
    name:"Amalks",
    text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
    replies:[
      {
        name:"Amalks",
        text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
        replies:[
          {
            name:"Amalks",
            text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
            replies:[]
          },
          {
            name:"Amalks",
            text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
            replies:[
              {
                name:"Amalks",
                text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
                replies:[
                  {
                    name:"Amalks",
                    text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
                    replies:[]
                  },
                ]
              },
              {
                name:"Amalks",
                text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
                replies:[]
              },
            ]
          },
        ]
      },
      {
        name:"Amalks",
        text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
        replies:[]
      },
      {
        name:"Amalks",
        text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
        replies:[]
      },
      {
        name:"Amalks",
        text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
        replies:[]
      }
    ]
  },
  {
    name:"Amalks",
    text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
    replies:[]
  },
  {
    name:"Amalks",
    text:"lsdfkjslloiroioirioriurfiofkllknohiuspodofkjfvnkjcncvnjlkjlj",
    replies:[]
  }
]

const CommentList=({data})=>{
 
return data.map((comment,index)=>(
  <div>
   <CommentComponent key={index} data={comment} />
   <div className='ms-3 border-l-4 border-black'>
   <CommentList data={comment.replies} />
   </div>
   </div>
   ))



}

const CommentComponent=({data})=>{
  const {name,text,replies}=data

  return(
    <div className='m-10'>
      <h4 className='font-bold text-2xl'>{name}</h4>
      <p>{text}</p>

    </div>
  )
}

const CommentsContainer = () => {
  return (
    <div>
    <h1 className='text-4xl text-bold m-10'>Comments:</h1>
      <CommentList data={comments}/>
      </div>
  )
}

export default CommentsContainer