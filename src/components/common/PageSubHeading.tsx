"use client";


interface PageSubHeadingProps {
    subheading: string,
    mb?: string,
    fontSize?: string
}

const PageSubHeading: React.FC<PageSubHeadingProps> = ({subheading, mb=null, fontSize=null}) => {
  return (
    <p className={`text-[#3C3C3C] font-gilroyMedium ${mb ? mb : 'md:mb-8 mb-6'} ${fontSize ? fontSize : 'text-[16px]'}`}>{subheading}</p>
  )
}

export default PageSubHeading