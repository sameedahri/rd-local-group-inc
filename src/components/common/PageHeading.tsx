"use client";


interface PageHeadingProps {
    heading: string,
    mb?: string | null,
    fontSize?: string | null,
    h2?: boolean
}

const PageHeading: React.FC<PageHeadingProps> = ({heading, mb=null, fontSize=null, h2=false}) => {
  const headingClasses = `text-heading font-gilroySemibold ${fontSize ? fontSize : 'md:text-[28px] text-[24px]'} ${mb ? mb : "md:mb-8 mb-6"}`;

  return (
    <>
    {h2 ? 
        <h2 className={headingClasses}>{heading}</h2>
      : <h1 className={headingClasses}>{heading}</h1>
    }
    </>
  )
}

export default PageHeading