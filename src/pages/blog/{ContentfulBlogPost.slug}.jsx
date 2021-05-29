import React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import { GatsbyImage } from 'gatsby-plugin-image';

const BlogPost = ({ data: { contentfulBlogPost: post } }) => {
  return (
    <Layout>
      <Container className="pt-12">
        <section className="flex flex-col flex-nowrap py-8 px-8 bg-mp-grey rounded-tl-36 rounded-br-36 rounded-tr-12 rounded-bl-12 md:flex-row md:justify-center md:py-32 md:items-center">
          <div className="order-2 max-w-prose md:order-1 md:flex-1 md:mr-7">
            <time className="text-sm" dateTime={post.publishedDate}>
              {post.formattedPublishedDate}
            </time>
            <h1 className="font-bold text-xl md:text-2xl">{post.title}</h1>
            <p>{post.summary.text}</p>
          </div>

          <GatsbyImage
            image={post.backgroundImage.gatsbyImageData}
            alt=""
            className="order-1 mb-8 md:mb-0 md:w-96 md:h-96"
            imgClassName="rounded-tl-36 rounded-tr-12 md:rounded-br-36 md:rounded-bl-12"
          />
        </section>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      publishDate: createdAt
      formattedPublishedDate: createdAt(formatString: "MMMM do, YYYY")
      summary {
        text: summary
      }
      backgroundImage {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
  }
`;

export default BlogPost;