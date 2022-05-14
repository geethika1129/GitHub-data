import React, {UseState , useEffect } from 'react'

const Card = () =>{
  const [users , setUsers] = React.useState([]);

  const getUsers = async () =>{
       const response = await fetch('https://api.github.com/users');
       setUsers(await response.json());
       
  }

useEffect(() => {
  getUsers();
},[]);

  return (
    <>
         {
           users.map((props)=>{
                return(
                  <div class="col-sm-4">
                  <div class="shadow p-3 mb-5 bg-white rounded " id='cint'>
             
                                 <div className="center">
                                <img class="card-img-top imgg rounded mx-auto d-block" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU' alt='img'/>
                                </div><div class="card-body ">
                                  <h5 class="card-title">{props.login}</h5>
                                  <p class="card-text">{props.url}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">{props.followers_url}</li>
                                  <li class="list-group-item">{props.following_url}</li>
                                  <li class="list-group-item">{props.starred_url}</li>
                                </ul>
                              </div>
                 </div>
                )
           })

         }
         </> 
  )
 
}

export default Card