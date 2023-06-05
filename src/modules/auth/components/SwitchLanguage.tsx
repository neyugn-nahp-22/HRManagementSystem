import { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLocale } from '../../intl/redux/intlReducer'

const lang = [
    {
        title: "Tiếng Việt",
        value: "vi"
    },
    {
        title: "English",
        value: "en"
    },
]
const SwitchLanguage = () => {
    const dispatch = useDispatch()
    const [currentLang, setCurrentLang] = useState(localStorage.getItem("currentLang") || 'vi')
    const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value
        console.log(selectedValue);
        setCurrentLang(selectedValue)
        localStorage.setItem("currentLang", selectedValue)
        dispatch(setLocale(selectedValue))
    }

    useEffect(() => {
        const storeValue = localStorage.getItem("currentLang")
        if (storeValue) {
            setCurrentLang(storeValue)
        }
    }, [])
    return (
        <div>
            <select
                className='form-control'
                style={{
                    position: "fixed",
                    top: 10,
                    right: 10,
                    maxWidth: "200px"
                }}
                onChange={changeLanguage}
                value={currentLang}
            >
                {lang.map((value, index: number) => (
                    <option key={index} value={value.value}>{value.title}</option>
                ))}
            </select>
        </div>
    )
}

export default SwitchLanguage