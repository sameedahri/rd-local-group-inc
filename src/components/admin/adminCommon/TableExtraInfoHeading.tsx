"use client";

interface TableExtraInfoHeadingProps {
    heading: string
}

const TableExtraInfoHeading:React.FC<TableExtraInfoHeadingProps> = ({heading}) => {
  return (
    <h3 className="text-[#262626] font-gilroySemibold text-[18px] mb-2">{heading}</h3>
  )
}

export default TableExtraInfoHeading