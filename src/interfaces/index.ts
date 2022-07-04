import { Keyframes } from 'styled-components';

type TSound = {
  male: string;
  female: string;
};

interface ISounds {
  old: TSound;
  new: TSound;
}

export interface IEmoticon {
  name: string;
  img: string;
  sounds: ISounds;
  number: number;
  animation: Keyframes;
}

export interface IContextComponent {
  children: JSX.Element;
}

export type TVersion = 'old' | 'new';

export type TGender = 'male' | 'female';
