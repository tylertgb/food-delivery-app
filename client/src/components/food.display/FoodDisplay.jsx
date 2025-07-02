
import { useStoreContext } from '../../hooks/useStoreContext'
import FoodItem from '../food.item/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useStoreContext()
  return (
    <div className='flex flex-col items-start gap-10 pb-20'>
        <h2 className='text-3xl font-semibold'>Top Dishes Near You</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {food_list.map((item, index) => {
                if(category === "All" || item.category === category){
                    return(
                        <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
                    )
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay