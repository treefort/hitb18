import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { isArray } from 'lodash';

const langContentPreflight = content => 
  isArray(content) ? content.map(item => `- ${item}`).join('\n') : content;

const translations = (contentId, content) => Object.keys(content).map(
  lang => (
    <li key={`text_${contentId}_${lang}`}>
      <ReactMarkdown
        className={lang} 
        source={ langContentPreflight(content[lang]) } />
    </li>
  )
);

const TextContent = ({ className, content, contentId }) => {
  const textTranslations = translations(contentId, content);
  return (
    <div className={className}>
      <ul className='translations'>
        { textTranslations }
      </ul>
    </div>
  );
};

export default TextContent;