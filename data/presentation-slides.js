import PresentationContent from 'data/presentation-content';

const Slide = ({
  classes,
}, slideNum) => ({
  title: `Slide ${slideNum}`,
  classes,
});

const PresentationSlides = PresentationContent.map(Slide);

export default PresentationSlides;