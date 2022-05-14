import React from 'react'

const card = () => {
  return (
    <div>
        <div class="col-sm-4">
     <div class="shadow p-3 mb-5 bg-white rounded " id='cint'>

                    <div className="center">
                   <img class="card-img-top imgg rounded mx-auto d-block" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU' alt='img'/>
                   </div><div class="card-body ">
                     <h5 class="card-title">Geethika Singareddy</h5>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   </div>
                   <ul class="list-group list-group-flush">
                     <li class="list-group-item">Cras justo odio</li>
                     <li class="list-group-item">Dapibus ac facilisis in</li>
                     <li class="list-group-item">Vestibulum at eros</li>
                   </ul>
                 </div>
    </div>
    </div>
  )
}

export default card