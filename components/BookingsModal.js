import { useState } from "react"

function BookingsModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex">
        <img className="object-cover w-8 h-8 rounded-full"
                    src={
                      "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                    } alt="profile-pic" />
        <p className="font-semibold">Hassen</p>
      </div>
      <div className="">
        <label className="" >Date:</label>
        <input type="date" />
      </div>
      <div className="">
        <label htmlFor="">Time:</label>
        <input type="time"/>
      </div>
      <div className="">
        <label htmlFor="">Coach</label>
        <select name="" id="">
          <option value="">Coach 1</option>
          <option value="">Coach 2</option>
          <option value="">Coach 3</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="">Court</label>
        <select name="" id="">
          <option value="">Court 1</option>
          <option value="">Court 2</option>
          <option value="">Court 3</option>
        </select>
      </div>
      <div className="flex">
      <button className="flex-end">Confirm</button>
      </div>
    </div>
  )
}

export default BookingsModal
