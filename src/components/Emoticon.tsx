import { useContext, useRef } from 'react';
import { IEmoticon, TVersion } from 'interfaces';
import { S_Button, S_Emoticon, S_Image } from './_Emoticon';
import { CtxGender } from 'context/GenderContext';

export default function Emoticon({
  name,
  sounds,
  img,
  number,
  animation,
}: IEmoticon) {
  const { gender } = useContext(CtxGender);

  const imageRef = useRef<HTMLImageElement>(null);

  function playAudio(version: TVersion) {
    new Audio(sounds[version][gender]).play();

    const emoticonImage = imageRef.current;

    emoticonImage?.classList.remove('active');
    emoticonImage?.offsetHeight;
    emoticonImage?.classList.add('active');
  }

  return (
    <S_Emoticon>
      <S_Image
        ref={imageRef}
        src={img}
        loading="lazy"
        alt={`Emoticon ${name}`}
        animation={animation}
        width="160"
        height="160"
      />
      <p>{name}</p>
      <div className="buttons-wrapper">
        <S_Button
          id={`${name}_old`}
          gradientDirection="right"
          onClick={() => playAudio('old')}
        ></S_Button>
        <S_Button
          id={`${name}_new`}
          gradientDirection="left"
          onClick={() => playAudio('new')}
        ></S_Button>
      </div>
      <div className="keyboard-wrapper">
        <span className="keyboard-button">Alt</span>
        <span> + </span>
        <span className="keyboard-button">{number}</span>
      </div>
    </S_Emoticon>
  );
}
