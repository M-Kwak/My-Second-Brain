import './Caroussel.scss';
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Container from "../container/Container";

interface CarousselSpecs {
  children: ReactNode[],
}

interface swapContentSpecs {
  length: number,
  setCurrentContentIndex: Dispatch<SetStateAction<number>>,
}

interface handleBulletListClickSpecs {
  index: number,
  setCurrentContentIndex: Dispatch<SetStateAction<number>>,
  setManualMod: Dispatch<SetStateAction<boolean>>,
}


const swapContent = (props: swapContentSpecs) => {
  const { length, setCurrentContentIndex } = props;

  return setInterval(() => {
    setCurrentContentIndex((index) => index === length - 1 ? 0 : index + 1);
  }, 2000);
}

const handleBulletListClick = (props: handleBulletListClickSpecs) => {
  const { index, setCurrentContentIndex, setManualMod } = props;

  setCurrentContentIndex(index);
  setManualMod(true);
}

function Caroussel(props: CarousselSpecs): JSX.Element {
  const { children } = props;
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const [manualMod, setManualMod] = useState<boolean>(false);

  useEffect(() => {
    if (manualMod) return;
    const intervalId = swapContent({ length: children.length, setCurrentContentIndex });
    return () => clearInterval(intervalId);
  }, [children, manualMod]);

  return (
    <Container
      id="Caroussel"
      direction="column"
    >
      {children[currentContentIndex]}
      <ul>
        {children.map((content, index) => (
          <li key={index} onClick={() => handleBulletListClick({ index, setCurrentContentIndex, setManualMod })}></li>
        ))}
      </ul>
    </Container>
  );
}

export default Caroussel;
