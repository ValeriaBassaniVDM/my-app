import { useCallback, useState } from "react";
import "./textArea.css"

type Props = {
    label?: string,
    name: string,
    value?: string,
    maxLength: number,
    required?: boolean,
}
export default function TextArea({ label, name, maxLength, value, required }: Props) {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(value);

    const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        const isDeleting = newValue.length < count;
        if (newValue.length <= maxLength || isDeleting) {
            setInputValue(e.target.value);
            setCount(newValue.length);
        }
    }, [count, maxLength])

    return (
        <>
            <div className="field">
                <div className="field__label">
                    <label htmlFor="description">{label}</label>
                    {required && <p>*</p>}
                </div>
                <div className="row text-end">
                    <div className="col">
                        <p id="text--area--suggestion" className='field__suggestion' >{count}/{maxLength}</p>
                    </div>
                </div>
                <textarea name="Description" id="description" value={inputValue} onChange={handleDescriptionChange} aria-describedby="text--area--suggestion" aria-required={required}></textarea>
            </div>
        </>
    )

}

