import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";




export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    
    return (
        <div>
            <h4>{category}</h4>
            { isLoading && <h5>Cargando...</h5>}
            { !isLoading && <div className="card-grid">
                { images.map( (img) => (
                    <GifItem key={img.id} 
                            {...img}
                    />
                )) }
            </div>}
        </div>
    )
}
