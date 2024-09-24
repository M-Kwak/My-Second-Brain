export const removeAllAnimationClasses = (currentElementRef: HTMLDivElement) => {
    if (!currentElementRef) return;
    currentElementRef.classList.remove('fadeIn');
    currentElementRef.classList.remove('fadeOut');
    currentElementRef.classList.remove('pushToLeft');
    currentElementRef.classList.remove('pushToRight');
    currentElementRef.classList.remove('popFromLeft');
    currentElementRef.classList.remove('popFromRight');
  }