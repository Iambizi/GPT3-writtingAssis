
import React, { useState } from 'react';
import styles from '../styles/promptTextBox.module.scss';

interface promptBoxType {
  onUserChangedText: (event: any)=> void;
}

const PromptTextArea: React.FC<promptBoxType> = ({onUserChangedText}): JSX.Element => {
   
    return (
      <div className={styles.promptContainer}>
        <textarea 
          className={styles.promptTextbox}
          rows={10}
          cols={50}
          placeholder="Type a prompt here..."
          onChange={onUserChangedText}
        >
        </textarea>
      </div>
    );
  };

export default PromptTextArea;  