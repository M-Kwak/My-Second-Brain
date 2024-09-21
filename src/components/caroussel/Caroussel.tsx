import './Caroussel.scss';
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import Container from "../container/Container";
import { carousselDirection } from '../../types/types';

interface CarousselSpecs {
  children: ReactNode[],
}

interface swapContentSpecs {
  previewRef: React.MutableRefObject<HTMLDivElement | null>,
  currentContentIndex: number,
  setCurrentContentIndex: Dispatch<SetStateAction<number>>,
  totalContentLength: number,
  setIsBulletActive: Dispatch<SetStateAction<boolean>>,
}

interface handleBulletListClickSpecs {
  previewRef: React.MutableRefObject<HTMLDivElement | null>,
  currentContentIndex: number,
  setCurrentContentIndex: Dispatch<SetStateAction<number>>,
  totalContentLength: number,
  setAutoSwapMod: Dispatch<SetStateAction<boolean>>,
  direction: carousselDirection,
  isBulletActive: boolean,
  setIsBulletActive: Dispatch<SetStateAction<boolean>>,
}

const removeAllClasses = (currentPreviewRef: HTMLDivElement) => {
  if (!currentPreviewRef) return;
  currentPreviewRef.classList.remove('fadeIn');
  currentPreviewRef.classList.remove('fadeOut');
  currentPreviewRef.classList.remove('pushToLeft');
  currentPreviewRef.classList.remove('pushToRight');
  currentPreviewRef.classList.remove('popFromLeft');
  currentPreviewRef.classList.remove('popFromRight');
}

// cannot reuse function handleBulletListClick -> (too many changes)
const autoSwapContent = (props: swapContentSpecs) => {
  const {
    previewRef,
    currentContentIndex,
    setCurrentContentIndex,
    totalContentLength,
    setIsBulletActive,
  } = props;

  return setInterval(() => {

    if (!previewRef || !previewRef.current) return;
    const currentPreview = previewRef.current;
    if (!currentPreview) return;
    let newIndex: number = currentContentIndex;

    removeAllClasses(currentPreview);
    setIsBulletActive(false);
    newIndex = (newIndex + 1) > totalContentLength - 1 ? 0 : newIndex + 1;
    currentPreview.classList.add('pushToLeft');

    // after previous content has finished its slide-out animation
    setTimeout(() => {
      removeAllClasses(currentPreview);
      setCurrentContentIndex(newIndex);
      currentPreview.classList.add('popFromRight');

      // after new content has finished its slide-in animation
      setTimeout(() => {
        removeAllClasses(currentPreview);
        setIsBulletActive(true);
      }, 600);
    }, 520);
  }, 5000);
}

const handleBulletListClick = (props: handleBulletListClickSpecs) => {
  const {
    previewRef,
    currentContentIndex,
    setCurrentContentIndex,
    totalContentLength,
    setAutoSwapMod,
    direction,
    isBulletActive,
    setIsBulletActive,
  } = props;

  if (!isBulletActive) return;
  if (!previewRef || !previewRef.current) return;
  const currentPreview = previewRef.current;
  if (!currentPreview) return;
  let newIndex: number = currentContentIndex;

  setIsBulletActive(false);
  setAutoSwapMod(false);

  if (direction === 'backward') {
    newIndex = (newIndex - 1) < 0 ? totalContentLength - 1 : newIndex - 1;
    currentPreview.classList.add('pushToRight');
  }
  else {
    newIndex = (newIndex + 1) > totalContentLength - 1 ? 0 : newIndex + 1;
    currentPreview.classList.add('pushToLeft');
  }

  // after previous content has finished its slide-out animation
  setTimeout(() => {
    removeAllClasses(currentPreview);
    setCurrentContentIndex(newIndex);

    if (direction === 'backward') currentPreview.classList.add('popFromLeft');
    else currentPreview.classList.add('popFromRight');

    // after new content has finished its slide-in animation
    setTimeout(() => {
      removeAllClasses(currentPreview);
      setIsBulletActive(true);
    }, 600);
  }, 520);

}

function Caroussel(props: CarousselSpecs): JSX.Element {
  const { children } = props;
  const [currentContentIndex, setCurrentContentIndex] = useState<number>(0);
  const [autoSwapMod, setAutoSwapMod] = useState<boolean>(true);
  const [isBulletActive, setIsBulletActive] = useState<boolean>(true);
  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!autoSwapMod) return;
    const intervalId = autoSwapContent({
      previewRef,
      totalContentLength: children.length,
      currentContentIndex,
      setCurrentContentIndex,
      setIsBulletActive,
    });
    return () => clearInterval(intervalId);
  }, [children, autoSwapMod, currentContentIndex]);

  return (
    <Container
      id="Caroussel"
      direction="column"
    >
      <div
        style={{ height: '80%' }}
        ref={previewRef}
      >
        {children[currentContentIndex]}
      </div>
      <Container direction="row">
        <button onClick={() => handleBulletListClick({
          previewRef,
          currentContentIndex,
          setCurrentContentIndex,
          totalContentLength: children.length,
          setAutoSwapMod,
          direction: 'backward',
          isBulletActive,
          setIsBulletActive,
        })}
        ></button>

        <button
          style={{ backgroundColor: (autoSwapMod ? 'white' : 'rgb(138, 138, 138)') }}
          onClick={() => setAutoSwapMod(true)}
        ></button>
        <button onClick={() => handleBulletListClick({
          previewRef,
          currentContentIndex,
          setCurrentContentIndex,
          totalContentLength: children.length,
          setAutoSwapMod,
          direction: 'forward',
          isBulletActive,
          setIsBulletActive,
        })}
        ></button>
      </Container>
    </Container>
  );
}

export default Caroussel;
