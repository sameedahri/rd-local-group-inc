'use client';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import {X} from "lucide-react";

interface RadixUIDialogProps {
    imgUrl: string
}
export default function RadixUIDialog({imgUrl}: RadixUIDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
      <Image
        src={imgUrl}
        alt={`Uploaded `}
        width={100}
        height={100}
        className="md:w-[100px] w-[58px] md:h-[100px] h-[58px] object-cover rounded-[10px] border border-[#F3EEED]"
      />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50" />
        <Dialog.Content
          className="lg:w-[80%] w-[95%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-primaryBg lg:p-7 p-5 rounded-xl shadow-lg"
        >  
            <Dialog.Title></Dialog.Title>
            <Image
                src={imgUrl}
                alt={`Uploaded`}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-[10px] border border-inputOutline"
            />
            <Dialog.Close className="absolute top-2 right-2">
                <X className="cursor-pointer text-red-500 hover:text-red-700 lg:w-[18px] w-[12px] lg:h-[18px] h-[12px]" />
            </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}