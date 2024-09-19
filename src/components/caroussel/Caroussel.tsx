import './Caroussel.scss';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Container from "../container/Container";
import { carousselDirection } from '../../types/types';

interface CarousselSpecs {
  children: ReactNode[],
}

interface swapContentSpecs {
  totalContentLength: number,
  setCurrentContentIndex: Dispatch<SetStateAction<number>>,
}

interface handleBulletListClickSpecs {
  currentContentIndex: number,
  setCurrentContentIndex: Dispatch<SetStateAction<number>>,
  totalContentLength: number,
  setManualMod: Dispatch<SetStateAction<boolean>>,
  direction: carousselDirection,
}


const swapContent = (props: swapContentSpecs) => {
  const { totalContentLength, setCurrentContentIndex } = props;

  return setInterval(() => {
    setCurrentContentIndex((index) => index === totalContentLength - 1 ? 0 : index + 1);
  }, 5000);
}

const handleBulletListClick = (props: handleBulletListClickSpecs) => {
  const { currentContentIndex, setCurrentContentIndex, totalContentLength, setManualMod, direction } = props;
  let newIndex: number = currentContentIndex;
  newIndex = direction === 'backward' ? newIndex - 1 : newIndex + 1;
  if (newIndex < 0) newIndex = totalContentLength - 1;
  if (newIndex > totalContentLength - 1) newIndex = 0;
  setCurrentContentIndex(newIndex);
  setManualMod(true);
}

function Caroussel(props: CarousselSpecs): JSX.Element {
  const { children } = props;
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const [manualMod, setManualMod] = useState<boolean>(false);

  useEffect(() => {
    if (manualMod) return;
    const intervalId = swapContent({ totalContentLength: children.length, setCurrentContentIndex });
    return () => clearInterval(intervalId);
  }, [children, manualMod]);

  return (
    <Container
      id="Caroussel"
      direction="column"
    >
      {children[currentContentIndex]}
      <Container direction="row">
        <button onClick={() => handleBulletListClick({
          currentContentIndex,
          setCurrentContentIndex,
          totalContentLength: children.length,
          setManualMod,
          direction: 'backward'
        })}
        ></button>

        <button onClick={() => setManualMod(false)}></button>
        <button onClick={() => handleBulletListClick({
          currentContentIndex,
          setCurrentContentIndex,
          totalContentLength: children.length,
          setManualMod,
          direction: 'forward'
        })}
        ></button>
      </Container>
    </Container>
  );
}

export default Caroussel;
