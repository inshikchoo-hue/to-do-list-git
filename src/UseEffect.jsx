import { useEffect } from 'react'

// import './App.css'

const Timer = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('타이머 돌아가는중 ing...')
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log('타이머 종료')
        }
    });
    return (
        <>
            <p>타이머 시작!</p>
        </>
    )
}

function UseEffect() {

    const [showTimer, setShowTimer] = useState(false);

    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>토글버튼</button>
        </div>
    )
}


export default UseEffect