import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    //Ex 001
    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(() => {
        setFatorial(calcFatorial(num))
    }, [num])

    //Ex 002
    const [parImpar, setParImpar] = useState('Impar')

    useEffect(() => {
        setParImpar(num % 2 === 0 ? 'Par' : 'Impar')
    }, [num])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exrcício 01" />
            <div >
                <div>
                    <span>Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                </div>

                <input type="number" className="input" value={num}
                    onChange={e => setNum(e.target.value)} />
            </div>

            <SectionTitle title="Exrcício 02" />
            <span className='text red'>{parImpar}</span>

        </div>
    )
}

export default UseEffect
