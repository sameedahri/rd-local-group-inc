import { useEffect, useRef, RefObject } from "react";
import Image from "next/image"

interface ProofDetailDialogueProps {
    setDialogueRef: (ref: RefObject<HTMLDialogElement>) => void,
    closeDialogue: () => void,
    imgUrl: string
}

const ProofDetailDialogue: React.FC<ProofDetailDialogueProps> = ({setDialogueRef, closeDialogue, imgUrl}) => {
    const dialogueRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        setDialogueRef(dialogueRef);
    }, [setDialogueRef])

    return (
        <>
        <dialog ref={dialogueRef} className="bottom-0 w-[700px] h-[500px]">
            <Image src={imgUrl} alt="" width={200} height={200} className="w-full h-full" />
        </dialog>
        {/* styles */}
        <style jsx>{`
            ::backdrop {
                background-color: rgba(0, 0, 0, 0.58);
            }
        `}</style>
        </>
    )
}

export default ProofDetailDialogue