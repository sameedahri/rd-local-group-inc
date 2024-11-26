"use client";

interface InfoPieceProps {
    infoName: string,
    infoValue: string
}

const InfoPiece:React.FC<InfoPieceProps> = ({infoName, infoValue}) => {
  return (
    <p className="font-gilroyMedium text-[16px]">
      <span className="text-[#262626]">{infoName}</span>
      <span className="text-[#4B4B4B]"> {infoValue}</span>
    </p>
  )
}

export default InfoPiece