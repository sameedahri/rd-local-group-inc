"use client";


interface PageHeadingProps {
    heading: string,
    mb?: string
}

const PageHeading: React.FC<PageHeadingProps> = ({heading, mb=null}) => {
  return (
    <h1 className={`text-heading font-gilroySemibold text-[24px] md:text-[28px] ${mb ? mb : "md:mb-8 mb-6"} `}>{heading}</h1>
  )
}

export default PageHeading