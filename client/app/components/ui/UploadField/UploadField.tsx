import { FC } from 'react'
import {IUploadField} from "@/ui/UploadField/uploadField.interface";
import styles from './UploadField.module.scss'
import {useUploadFile} from "@/hooks/useUploadFile";

const UploadField: FC<IUploadField> = ({
    onChange,
    value,
    folder
}) => {
    const { uploadFile } = useUploadFile(onChange, folder)

    return (
        <div className={styles.files}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {value && <img src={value} alt='' width={70} className='mb-2 rounded' />}
            <label className='block'>
                <span className="sr-only">Choose file</span>
                <input type="file" onChange={uploadFile} />
            </label>
        </div>
    )
}

export default UploadField