"use client";


interface FormSubHeadingProps {
    heading: string
}

const FormSubHeading:React.FC<FormSubHeadingProps> = ({heading}) => {
  return (
    <legend className="text-black font-gilroySemibold text-[20px] capitalize mb-5">{heading}</legend>
  )
}

export default FormSubHeading