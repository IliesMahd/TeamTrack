import {useEffect, useMemo} from "react";
import {createAvatar} from "@dicebear/core";
import { botttsNeutral } from "@dicebear/collection";
import Image from "next/image";

const Avatar = ({avatar}: any) => {
    const userAvatar = useMemo(() => {
        return createAvatar(botttsNeutral, {
            size: 40,
            radius: 8,
            seed: avatar[0].seed,
        }).toDataUriSync();
    }, [avatar])
    return (
        <div className="avatar">
{/*            <img src={test} alt="avatar"/>*/}
            <Image src={userAvatar} alt={"user avatar"} width={40} height={40} />
        </div>
    )
}

export default Avatar;