import styles from '../styles/promptText.module.css';
import { useState } from 'react';


const TextBox = ()=>{
    const [userInput, setUserInput] = useState('');

    const onUserChangedText = (event) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
      };

    return(
        <>
            <div className="header">
                <div className={styles.headerTitle}>
                    <h3>sup, insert your headline here</h3>
                </div>
                <div className={styles.headerSubtitle}>
                    <h3>insert your subtitle here</h3>
                </div>
            </div>

            <div className={styles.promptContainer}>
                <textarea placeholder="start typing here" className={styles.promptBox} onChange={onUserChangedText}/>
            </div>
            {/*Button generate*/}
            <div className={styles.promptButtons}>
                <a className={styles.generateButton} onClick={null}>
                <div className={styles.generate}>
                    <p>Generate</p>
                </div>
                </a>
            </div>
	    </>
    )
}

export default TextBox;