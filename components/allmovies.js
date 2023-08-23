// import Speech from 'react-speech';
import { useState } from 'react';
import Image from 'next/image';
export default function AllMovies({ items }) {
  const msg = new SpeechSynthesisUtterance();
  const [ourText, setOurText] = useState('');
  const speechHandler = (msg) => {
    const utterance = new window.SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    // utterance.lang = 'ka-IN'; //translates on the fly - soooo awesome (japanese is the funniest)
    utterance.volume = 0.5;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.voice = voices[4];
    utterance.lang = voices[4].lang;
    // utterance.voice = 'Hysterical'; // this seems to do nothing
    utterance.text = msg;
    console.log(utterance);
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div>
      {items &&
        items.map((item) => {
          return (
            <>
              <div className="font-bold">{item.title}</div>
              <div>
                {/* <Image
                  src={`../public/assets/images/${item.image}`}
                  width="200"
                  height="200"
                /> */}
              </div>
              <button onClick={() => speechHandler(item.title)}>SPEAK</button>
              {/* <Speech
                text={item.description}
                // stop={true}
                // pause={true}
                // resume={true}
                pitch="0.5"
                rate="0.5"
                volume="0.1"
                lang="en-GB"
                voice="Daniel"
              /> */}
              <div>{item.description}</div>
            </>
          );
        })}
    </div>
  );
}
