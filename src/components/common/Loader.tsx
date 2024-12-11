"use client";

interface LoaderProps {
  dotsOnly?: boolean,
  mt?: string,
  size?: string
}

const Loader:React.FC<LoaderProps> = ({dotsOnly=true, mt, size}) => {
  return (
    <div className={`flex justify-center items-end gap-x-2 ${mt ? mt : "mt-5"}`}>
      <p className={`text-center font-gilroyMedium text-[16px] ${dotsOnly ? 'hidden' : ''}`}>Fetching Data</p>
      <div className={`loader ${dotsOnly ? 'ms-0' : 'ms-[30px]'} ${size ? size : 'w-[15px] h-[15px]'}`}></div>
    </div>
  )
}

export default Loader