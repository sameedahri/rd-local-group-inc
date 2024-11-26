"use client";


interface UserProps {
    userId: number,
    initial: string,
    name: string,
    email: string
}

const User:React.FC<UserProps> = ({userId, initial, name, email}) => {
  console.log(userId)
  return (
    <li className="flex items-center gap-x-[15px]">
        <div className="flex justify-center items-center w-[65px] h-[65px] rounded-full bg-[#F3DCD6]">
            <p className="text-[#AF604C] font-gilroySemibold text-[28px]">{initial}</p>
        </div>
        <div>
            <p className="text-[#262626] font-gilroySemibold text-[20px]">{name}</p>
            <p className="text-[#717171] font-gilroyMedium text-[16px]">{email}</p>
        </div>
    </li>
  )
}

export default User