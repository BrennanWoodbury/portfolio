import React, {useEffect, useState} from 'react';

type TerminalTypewriterProps = {
  text: string | string[];
  speed?: number;
  cursor?: string;
  onComplete?: () => void;
  delay?: number;
}

const TerminalTypewriter = ({
                              text,
                              speed = 50,
                              cursor = "_",
                              onComplete,
                              delay = 0
                            }: TerminalTypewriterProps): React.ReactNode => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const textArray = Array.isArray(text) ? text : [text];
  const fullText = textArray.join('\n')


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (currentIndex < fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, Math.random() * (speed * .5) + speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= fullText.length && onComplete) {
      onComplete();
    }
  }, [currentIndex, isTyping, fullText, speed, onComplete]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);


  return (
    <div>
      {displayText.split('\n').map((line, i) => (
        <div key={i}>
          <span>{line}</span>
          {i === displayText.split('\n').length - 1 && (
            <span className="ml-1">{showCursor ? cursor : ' '}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default TerminalTypewriter;


