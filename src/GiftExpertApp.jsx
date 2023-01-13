import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


export const GiftExpertApp = () => {

  const [categories, setCategories] = useState([])

  const addNewCategory = (newValue) => {
    if (categories.includes(newValue)) return;
    setCategories([newValue, ...categories])
  }
  return (
    <>
      <h1>Gift Expert App</h1>

      <AddCategory /* setCategories={setCategories} */
        onAddNewCategory={addNewCategory}
      />

      {
        categories.map(category => (
          <GifGrid key={category} category={category} />
        ))
      }

    </>
  )
}

