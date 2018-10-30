const Slide = (
  title,
  template,
  bits
) => ({
  title,
  template,
  bits,
});

/* 
TextBit {
  contentId
}
*/
const TextBit = (contentId, tx) => ({ type: 'text', contentId, tx });

const PresentationSlides = [
  Slide('Slide 1', 'title', [
    TextBit(`title`),
  ]),
  Slide('Slide 2', 'title-subtitle', [
    TextBit('slide2text'),
  ]),
  Slide('Slide 3', 'title', [
    TextBit('slide3text'),
  ]),
];

const getTransitionCount = bits => bits.filter(
  ({ tx }) => typeof tx !== 'undefined').length;

const normalize = slides => slides.map(
  slide => ({
    ...slide,
    transitionCount: getTransitionCount(slide.bits),
  })
);

export default normalize(PresentationSlides);