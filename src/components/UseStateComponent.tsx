import { useState } from "react"

function UseStateComponent() {

    const [arr, arrSet] = useState<number[]>([])
    const [name, nameSet] = useState<string | null>(null)

    return (
        <div>
            <div>
                <button onClick={() => {
                    arrSet([...arr, arr.length + 1])
                }}>Add to Array</button>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button onClick={() => nameSet("jack")}>Add to name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    )
}

export default UseStateComponent;