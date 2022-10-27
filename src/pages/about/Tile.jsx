import React from 'react'

const Tile = ({ white, title, children }) => {
  return (
    <div className={`p-20 ${white && "bg-white"}`}>
      <h1 className={`text-center text-5xl pb-3 ${white && "text-accent"}`}>{ title }</h1>
      <p className={`${white && "text-black"} text-lg`}>
        { children || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident incidunt ullam doloremque earum cupiditate in aliquam, ut consequatur quaerat non laudantium temporibus numquam tempore quasi veritatis nisi sit? Magni quasi voluptatem corporis, suscipit animi dolorem illo assumenda? Quidem, esse consequatur." }
      </p>
    </div>
  )
}

export default Tile