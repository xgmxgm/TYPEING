import { FC, useEffect, useState } from 'react'

import "./HomePage.scss"
import { Button } from '@/shared/ui/Button';

export const HomePage: FC = () => {
    const [text, setText] = useState<string>('');
    const [finish, setFinish] = useState<boolean>(false);
    const [welcomeModal, setWelcomeModal] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [timer, setTimer] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const output = (event: any) => {
        const current_text = event.target.value

        if (current_text == text) {
            setFinish(true)
        } else {
            setFinish(false)
        }

        setTimer(true);
        setValue(current_text)
        compareArrays(text, current_text);
    }

    const input = (event: any) => {
        const current_text: string = event.target.value;
        setText(current_text)
    }

    const checkInput = () => {
        if (text.length == 0) {
            setWelcomeModal(true)
        } else {
            setWelcomeModal(false)
        }
    }

    const compareArrays = (str1: string, str2: string) => {
        for (let item = 0; item < str2.length; item++) {
            if (str1[item] == str2[item]) {
                setWelcomeModal(false);
                setError(false);
            } else {
                setError(true);
            }
        }
    }

    const again = () => {
        setText('');
        setTimer(false);
        setTime(0);
        setWelcomeModal(true);
        setFinish(false);
        setValue('');
    }

    useEffect(() => {
        if (timer && finish == false) {
            setTimeout(() => {
                setTime(time + 1);
            }, 1000)
        }
    })

    return (
        <div className='flex flex-col items-center'>
            {
                welcomeModal ?
                <div className="welcome__Modal">
                    <p>Enter text to copy.</p>
                    <textarea
                        className='welcome__text__area'
                        placeholder='Enter here text...'
                        onChange={input}
                    />
                    <Button
                        onClick = {checkInput}                                 
                    >enter</Button>
                </div>
                :
                <div></div>
            }
            <textarea readOnly className='text' value={ text.length == 0 ? "Enter please code !!!" : text }></textarea>
            <textarea
                className={`text__area ${error ? 'text-red-700' : 'text-white'}`}
                placeholder='Retype text here'
                onChange={output}
                value={value}
            />
            { time }
            <Button onClick={() => setWelcomeModal(true)}>again</Button>
            { finish ? <div className='finishModal'>
                <h2>Congratulations, you have successfully rewritten the text!</h2>
                <h2>Your Time : {time} sec</h2>
                <h2>Your WPM : {Math.round((text.length / 5) / (time / 60 ))}</h2>
                <Button onClick={again}>again</Button>
            </div> : <div></div> }
        </div>
    )
} 