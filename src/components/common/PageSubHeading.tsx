"use client";


interface PageSubHeadingProps {
    subheading: string,
    mb?: string
}

const PageSubHeading: React.FC<PageSubHeadingProps> = ({subheading, mb=null}) => {
  return (
    <p className={`text-[#3C3C3C] font-gilroyMedium text-[16px] ${mb ? mb : 'md:mb-8 mb-6'}`}>{subheading}</p>
  )
}

export default PageSubHeading