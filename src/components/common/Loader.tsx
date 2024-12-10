"use client";


const Loader = () => {
  return (
    <div className="flex justify-center items-end gap-x-2 mt-5">
      <p className="text-center font-gilroyMedium text-[16px]">Fetching Data</p>
      <div className="loader"></div>
    </div>
  )
}

export default Loader