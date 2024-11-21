"use client";


interface DragAndDropProps {
    label: string,
    inputId: string
}

const DragAndDrop:React.FC<DragAndDropProps> = ({label, inputId}) => {
  return (
    <div  className="grid gap-y-1 relative">
        <label htmlFor={inputId} className="text-label font-gilroySemibold text-[16px]">{label}</label>
    </div>
  )
}

export default DragAndDrop