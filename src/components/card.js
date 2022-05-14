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
                                <img class="card-img-top imgg rounded mx-auto d-block" src={props.avatar_url} alt='img'/>
                                </div><div class="card-body ">
                                  <h5 class="card-title"><center>{props.login}</center></h5>
                                  <p class="card-text"><i><center>{props.url}</center></i></p>
                                </div>
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item"><b>Followers : </b>40</li>
                                  <li class="list-group-item"><b>Following : </b>23</li>
                                  <li class="list-group-item"><b>Repositories : </b>19</li>
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