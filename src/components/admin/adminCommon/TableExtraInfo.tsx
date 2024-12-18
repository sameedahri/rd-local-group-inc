"use client";


interface TableExtraInfoProps {
    infoTitle: string,
    infoValue: string
}

const TableExtraInfo:React.FC<TableExtraInfoProps> = ({infoTitle, infoValue}) => {
  return (
    <div className="flex gap-x-[10px]">
        <p className="text-[#262626] font-gilroyMedium text-[14px]">{infoTitle}:</p>
        <p className="text-[#676767] font-gilroyMedium text-[14px]">{infoValue}</p>
    </div>
  )
}

export default TableExtraInfo