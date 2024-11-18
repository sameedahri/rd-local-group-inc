"use client";


interface PageHeadingProps {
    heading: string,
    mb?: string | null,
    fontSize?: string | null
}

const PageHeading: React.FC<PageHeadingProps> = ({heading, mb=null, fontSize=null}) => {
  return (
    <h1 className={`text-heading font-gilroySemibold ${fontSize ? fontSize : 'md:text-[28px] text-[24px]'} ${mb ? mb : "md:mb-8 mb-6"} `}>{heading}</h1>
  )
}

export default PageHeading