import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const getContentTypeSection = (section) => {
  if (section.__typename === 'ContentfulTextSection')
    return (
      <div key={section.id}>
        {section.title ? <h2 className="font-bold text-xl">{section.title}</h2> : null}

        <div dangerouslySetInnerHTML={{ __html: section.body.childMarkdownRemark.html }} />
      </div>
    );

  if (section.__typename === 'ContentfulFigureSection')
    return (
      <div className="flex flex-col flex-nowrap md:flex-row md:items-center" key={section.id}>
        <div className={`order-2 ${section.alignment === 'Left' ? 'md:order-1 md:mr-12' : 'md:order-3 md:ml-12'}`}>
          {section.title ? <h2 className="font-bold text-xl">{section.title}</h2> : null}

          <div dangerouslySetInnerHTML={{ __html: section.body.childMarkdownRemark.html }} />
        </div>

        <GatsbyImage
          image={section.image.gatsbyImageData}
          alt=""
          className="order-1 mb-14 md:order-2 md:mb-0 md:max-w-xl"
          imgClassName="rounded-tl-36 rounded-tr-12 rounded-br-36 rounded-bl-12"
        />
      </div>
    );
};

const ContentRenderer = ({ sections }) => {
  return (
    <div className="content-renderer grid grid-cols-1 gap-32 px-8 py-16 max-w-screen-lg mx-auto md:px-32 md:pb-48">
      {sections.map(getContentTypeSection)}
    </div>
  );
};

ContentRenderer.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      __typename: PropTypes.oneOf(['ContentfulTextSection', 'ContentfulFigureSection', 'ContentfulImageGallery'])
        .isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      body: PropTypes.shape({
        childMarkdownRemark: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }).isRequired,
      }),
      alignment: PropTypes.oneOf(['Left', 'Right']),
      image: PropTypes.shape({
        gatsbyImageData: PropTypes.object.isRequired,
      }),
    }),
  ),
};

export default ContentRenderer;
