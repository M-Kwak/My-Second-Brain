import './Caroussel.scss';
import { Dispatch, ReactNode, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import Container from "../container/Container";
import { carousselDirection } from '../../types/types';
import { removeAllAnimationClasses } from '../../utils/genericFunctions';

interface CarousselSpecs {
  children: ReactNode[],
}

interface swapContentSpecs {
  previewRef: React.MutableRefObject<HTMLDivElement | null>,
  middleCarousselRef: RefObject<HTMLButtonElement>,
  currentContentIndex: number,
  setCurrentContentIndex: Dispatch<SetStateAction<number>>,
  totalContentLength: number,
  setIsBulletActive: Dispatch<SetStateAction<boolean>>,
}

interface handleBulletListClickSpecs {
  previewRef: React.MutableRefObject<HTMLDivElement | null>,
  middleCarousselRef: RefObject<HTMLButtonElement>,
  currentContentIndex: number,
  setCurrentContentIndex: Dispatch<SetStateAction<number>>,
  totalContentLength: number,
  setAutoSwapMod: Dispatch<SetStateAction<boolean>>,
  direction: carousselDirection,
  isBulletActive: boolean,
  setIsBulletActive: Dispatch<SetStateAction<boolean>>,
}

// cannot reuse function handleBulletListClick -> (too many changes)
const autoSwapContent = (props: swapContentSpecs) => {
  const {
    previewRef,
    middleCarousselRef,
    currentContentIndex,
    setCurrentContentIndex,
    totalContentLength,
    setIsBulletActive,
  } = props;

  return setInterval(() => {

    if (
      !previewRef ||
      !previewRef.current ||
      !middleCarousselRef ||
      !middleCarousselRef.current
    ) return;
    const currentPreview = previewRef.current;
    const currentMiddleCaroussel = middleCarousselRef.current;
    if (!currentPreview || !currentMiddleCaroussel) return;
    let newIndex: number = currentContentIndex;

    currentMiddleCaroussel.classList.add('loader');
    removeAllAnimationClasses(currentPreview);
    setIsBulletActive(false);
    newIndex = (newIndex + 1) > totalContentLength - 1 ? 0 : newIndex + 1;
    currentPreview.classList.add('pushToLeft');

    // after previous content has finished its slide-out animation
    setTimeout(() => {
      removeAllAnimationClasses(currentPreview);
      setCurrentContentIndex(newIndex);
      currentPreview.classList.add('popFromRight');

      // after new content has finished its slide-in animation
      setTimeout(() => {
        removeAllAnimationClasses(currentPreview);
        setIsBulletActive(true);
      }, 600);
    }, 520);
  }, 5000);
}

const handleBulletListClick = (props: handleBulletListClickSpecs) => {
  const {
    previewRef,
    middleCarousselRef,
    currentContentIndex,
    setCurrentContentIndex,
    totalContentLength,
    setAutoSwapMod,
    direction,
    isBulletActive,
    setIsBulletActive,
  } = props;

  if (
    !isBulletActive ||
    !previewRef ||
    !previewRef.current ||
    !middleCarousselRef ||
    !middleCarousselRef.current
  ) return;
  const currentPreview = previewRef.current;
  const currentMiddleCaroussel = middleCarousselRef.current;
  if (!currentPreview || !currentMiddleCaroussel) return;
  let newIndex: number = currentContentIndex;
  const animationClassName: string[] = direction === 'forward' ? ['pushToLeft', 'popFromRight'] : ['pushToRight', 'popFromLeft'];

  currentMiddleCaroussel.classList.remove('loader');
  setIsBulletActive(false);
  setAutoSwapMod(false);

  if (direction === 'forward') newIndex = (newIndex + 1) > totalContentLength - 1 ? 0 : newIndex + 1;
  else newIndex = (newIndex - 1) < 0 ? totalContentLength - 1 : newIndex - 1;
  currentPreview.classList.add(animationClassName[0]);

  // after previous content has finished its slide-out animation
  setTimeout(() => {
    removeAllAnimationClasses(currentPreview);
    setCurrentContentIndex(newIndex);
    currentPreview.classList.add(animationClassName[1]);

    // after new content has finished its slide-in animation
    setTimeout(() => {
      removeAllAnimationClasses(currentPreview);
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
  const middleCarousselRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!autoSwapMod) return;
    const intervalId = autoSwapContent({
      previewRef,
      middleCarousselRef,
      totalContentLength: children.length,
      currentContentIndex,
      setCurrentContentIndex,
      setIsBulletActive,
    });
    return () => clearInterval(intervalId);
  }, [children, autoSwapMod, currentContentIndex]);

  useEffect(() => {
    previewRef.current?.classList.add('popFromRight');
  }, []);

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
          middleCarousselRef,
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
          className="loader"
          style={{ backgroundColor: (autoSwapMod ? 'white' : 'rgb(138, 138, 138)') }}
          onClick={() => setAutoSwapMod(true)}
          ref={middleCarousselRef}
        ></button>
        <button onClick={() => handleBulletListClick({
          previewRef,
          middleCarousselRef,
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
