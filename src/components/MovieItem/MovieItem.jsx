import React, { useEffect } from 'react';
import './MovieItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../State/Slice/fetchSlice';
import { add } from '../../State/Slice/CardSlice';

const MovieItem = ()=> {
        const dataInitial = useSelector(state=>state.fetch.data.Search)
        const dataLoading = useSelector(state=>state.fetch)
        console.log(dataLoading.isLoading)
        const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(fetchData('Batman'))
        },[])
        // console.log(dataInitial,'dataInitaial')

        // const { title, year, poster } = props;
        return (
            <div>
                                {/* {dataInitial.map(item=>console.log(item))} */}

                {
                  dataLoading.isLoading? <div style={{display:'flex',margin:'auto',marginTop:'50px'}}>
                    <div class="boxes">
                  <div class="box">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
                  <div class="box">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
                  <div class="box">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
                  <div class="box">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
              </div> 
                  </div>:  dataInitial && dataInitial.length >0?dataInitial?.map(item=>{
                        return(
                            <article key={item.imdbID} className="movie-item">
                            <img className="movie-item__poster" src={item.Poster} alt={item.Title} />
                            <div className="movie-item__info">
                                <h3 className="movie-item__title">{item.Title}&nbsp;({item.Year})</h3>
                                <button type="button" className="movie-item__add-button"onClick={()=>dispatch(add({title:item.Title,id:item.imdbID,poster:item.Poster,year:item.Year}))}>Добавить в список</button>
                            </div>
                        </article>
                        )
                    }): <li>Belə bir film tapılmadı</li> 
                }
            </div>
        );
    
}
 
export default MovieItem;