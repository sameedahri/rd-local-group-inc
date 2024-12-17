"use client";
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import cloudIcon from "/public/assets/images/admin/submitProof/cloud-icon.svg";
import ValidationMessage from '@/components/common/ValidationMessage';

interface DragAndDropProps {
    onDrop: (files: File[]) => void,
    label: string,
    inputId: string
}

const DragAndDrop:React.FC<DragAndDropProps> = ({onDrop, label, inputId}) => { 
    const handleDrop = useCallback((acceptedFiles: File[]) => {
        onDrop(acceptedFiles);
    }, [onDrop]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: {
            // 'image/*': ['.jpeg', '.png', '.pdf'],
            'image/*': ['.jpeg', '.png'],
        },
    });

    return (
        <div  className="grid gap-y-2 relative">
            <label htmlFor={inputId} className="text-label font-gilroySemibold text-[16px]">{label}</label>
            {/* Drag and Drop */}
            <div
                {...getRootProps()}
                className="flex justify-center items-center border border-dashed border-[#797979] bg-white rounded-[10px] p-[10px] cursor-pointer"
            >
                <input {...getInputProps()} />
                    {isDragActive ? (
                    <div className="h-[250px] flex flex-col justify-center items-center gap-y-2">
                        <Image src={cloudIcon} alt="Cloud" width={31} height={28} />
                        <p className="text-[#3F3F3F] font-gilroyBold text-[16px]">Drag & Drop file here</p>
                        <p className="text-[#3F3F3F] font-gilroySemibold text-[11px]">JPEG, PNG, PDF, 1 mb, 20 image max upload</p>
                     </div>
                ) : (
                    <div className="h-[250px] flex flex-col justify-center items-center gap-y-2">
                        <Image src={cloudIcon} alt="Cloud" width={31} height={28} />
                        <p className="text-[#3F3F3F] font-gilroyBold text-[16px]">Drag & Drop file here</p>
                        <p className="text-[#3F3F3F] font-gilroyRegular text-[20px]">Or</p>
                        <button 
                            type="button" 
                            className="w-[160px] h-[50px] rounded-[5px] bg-[#F3DCD6] text-[#3F3F3F] font-gilroySemibold text-[14px]"
                        >Browse File</button>
                        <p className="text-[#3F3F3F] font-gilroySemibold text-[11px]">JPEG, PNG, PDF, 1 mb, 20 image max upload</p>
                    </div>
                )}
            </div>
           <ValidationMessage id={"maxSize"} message="File size must be not be greater than 1 mb*" />
           <ValidationMessage id={"maxLimit"} message="Maximum limit to upload files is 20*" />
        </div>
    )
}

export default DragAndDrop