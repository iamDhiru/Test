import React from 'react'

function SinglePost({posts}) {
  return (
    <div style={{border:"1px solid black",  width:"400px", marginTop:"10px", padding:"10px"}}>
            {
                posts?.map((post,index) =>(
                    <div key={index} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , padding:"5px", borderRadius:"5px", marginTop:"10px"}}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
                ))
            }
        </div>
  )
}

export default SinglePost