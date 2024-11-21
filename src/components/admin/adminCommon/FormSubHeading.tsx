"use client";


interface FormSubHeadingProps {
    heading: string
}

const FormSubHeading:React.FC<FormSubHeadingProps> = ({heading}) => {
  return (
    <legend className="text-black font-gilroySemibold text-[20px] capitalize md:mb-5 mb-4">{heading}</legend>
  )
}

export default FormSubHeading