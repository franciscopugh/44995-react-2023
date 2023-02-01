import { useState, useEffect } from "react"

export const Dolar = () => {
    const [dolar,setDolar] = useState([])

useEffect(() => {
    fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(({oficial, solidario, mep, blue}) => {
        const plantillaDolar = 
        <>
            <p>Dolar Oficial: ${oficial}</p>
            <p>Dolar Solidario: ${solidario}</p>
            <p>Dolar Mep: ${mep}</p>
            <p>Dolar Blue: ${blue}</p>
        </>
        setDolar(plantillaDolar)
        console.log(dolar)
    })

}, [])

    

    return (
        <>
            {dolar}
        </>
    )
}