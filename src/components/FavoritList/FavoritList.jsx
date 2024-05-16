import React from 'react'
import './FavoritList.css'
import { useSelector } from 'react-redux'
export const FavoritList = () => {
    const favoriList = useSelector(state=>state.post)
    console.log(favoriList,'favorilist')
  return (
    <div className='listFavoriDiv'>
        <h1>Favorites List</h1>
        {
            favoriList?.map(item=>{
                if(item.id!==''){
                    return(
                        <div key={item.id} class="card">
                        <a className="card1" href={`http://localhost:5173/list/${item.id}`}>
                         <p className="small">{item.title}</p>
                         <div className="go-corner" href="#">
                           <div className="go-arrow">
                             →
                           </div>
                         </div>
                       </a>
                     </div>
                    )
                }
                
            })
        }
        {/* {
            favoriList.movies?.map(item=>{
                return (
                    <div key={item.id}>
                        {item}
                    </div>

                )
            })
        } */}
    </div>
  )
}
