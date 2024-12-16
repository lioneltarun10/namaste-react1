import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu = (resId) => {
    
    const [resInfo,setResInfo] = useState(null)
    
    // fetch data
    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId)

        const json = await data.json()

        console.log(json.data.cards[2].card.card.info.cuisines);
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
        setResInfo(json.data)

    }
    
    return resInfo
}

export default useRestaurantMenu