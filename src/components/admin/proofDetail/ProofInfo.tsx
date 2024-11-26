"use client";


interface ProofInfoProps {
    infoName: string,
    infoValue: string
}

const ProofInfo:React.FC<ProofInfoProps> = ({infoName, infoValue}) => {
  return (
    <li className="md:text-[22px] text-[20px]">
        <span className="text-[#262626] font-gilroySemibold">{infoName}</span>
        <span  className="text-[#4B4B4B] font-gilroyMedium"> {infoValue}</span>
    </li>
  )
}

export default ProofInfo