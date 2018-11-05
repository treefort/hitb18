import PresentationContent from 'data/presentation-content';

const Slide = ({
  classes,
  transitionCount,
}, slideNum) => ({
  title: `Slide ${slideNum}`,
  classes,
  transitionCount,
});

const PresentationSlides = PresentationContent.map(Slide);

export default PresentationSlides;