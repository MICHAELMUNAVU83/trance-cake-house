import React,{createContext , useState} from 'react'
export const RoomContext = createContext()

 
export function RoomProvider ({children}){
    const [saved ,setSaved]= useState([])
    const [filtered, setFiltered]= useState([])
    const addCart =(obj)=>{
      setSaved((prevState)=>[...prevState,obj])
    }
    const removeFromArray = (objectid)=>{
        setSaved((prevState)=>prevState.filter(cake=>{
            return cake.id !== objectid
        }))
    }
    const filteredUnique=()=>{
        setFiltered(saved.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.name === thing.name && t.item_id=== thing.item_id
        ))
      )
      )

    }
    

    return(
        <RoomContext.Provider value={{saved, addCart , removeFromArray , filtered , filteredUnique }}>
            {children}

        </RoomContext.Provider>
    )
}
export const RoomConsumer = RoomContext.Consumer