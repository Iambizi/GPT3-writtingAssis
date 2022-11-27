import styles from '../styles/promptText.module.css';
import { useState } from 'react';


const TextBox = ()=>{
    const [userInput, setUserInput] = useState('');

    const onUserChangedText = (event) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
      };
     
      const [apiOutput, setApiOutput] = useState('')
      const [isGenerating, setIsGenerating] = useState(false)
      
      const callGenerateEndpoint = async () => {
        setIsGenerating(true);
        
        console.log("Calling OpenAI...")
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userInput }),
        });
      
        const data = await response.json();
        const { output } = data;
        console.log("OpenAI replied...", output.text)
      
        setApiOutput(`${output.text}`);
        setIsGenerating(false);
      }  

    return(
        <>
            <div className="header">
                <div className={styles.headerTitle}>
                    <h3>✨Magic Media Kit Generator✨</h3>
                </div>
                <div className={styles.headerSubtitle}>
                    <p>insert an example of a company you'd like a Media Kit from</p>
                </div>
            </div>

            <div className={styles.promptContainer}>
                <textarea placeholder="start typing here" className={styles.promptBox} onChange={onUserChangedText}/>
            </div>
            {/*Button generate*/}
            <div className={styles.promptButtons}>
                <a className={isGenerating ? `${styles.generateButton} loading` : styles.generateButton } onClick={callGenerateEndpoint}>
                <div className={styles.generate}>
                    {isGenerating ? <span class={styles.loader}></span> : <p>Generate</p>}
                </div>
                </a>
            </div>
            {apiOutput && (
                <div className={styles.output}>
                    <div className={styles.outputHeaderContainer}>
                    <div className={styles.outputHeader}>
                        <h3>Output</h3>
                    </div>
                    </div>
                    <div className={styles.outputContent}>
                    <p>{apiOutput}</p>
                    </div>
                </div>
            )}

	    </>
    )
}

export default TextBox;