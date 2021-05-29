import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import Container from '../components/container';
import { GatsbyImage } from 'gatsby-plugin-image';

const BlogPage = ({ data }) => {
  const {
    allContentfulBlogPost: { edges: posts },
  } = data;
  console.log(posts);

  return (
    <Layout>
      <Container className="pt-12">
        <section className="flex flex-col flex-nowrap py-8 px-8 bg-mp-grey rounded-tl-36 rounded-br-36 rounded-tr-12 rounded-bl-12 md:py-32 md:items-center">
          <h1 className="font-bold text-xl md:text-2xl">Welcome to our Blog</h1>
          <p className="text-lg">On-demand paediatric care</p>
        </section>

        <section className="grid grid-cols-1 py-24 gap-10 items-stretch md:grid-cols-3 lg:grid-cols-4">
          {posts.map(({ node: post }) => (
            <article className="w-full flex flex-col flex-nowrap max-w-xl mx-auto md:max-w-full" key={post.id}>
              <Link to={post.slug} className="block w-full">
                <GatsbyImage
                  image={post.backgroundImage.gatsbyImageData}
                  alt=""
                  className="block w-full"
                  imgClassName="rounded-tl-36 rounded-tr-12"
                />
              </Link>

              <div className="flex flex-col flex-nowrap justify-between h-full px-5 py-7 border-2 border-mp-grey  rounded-br-36 rounded-bl-12">
                <h2 className="font-bold text-lg mb-7 leading-none">{post.title}</h2>

                <Link to={post.slug} className="text-mp-dark-blue font-semibold">
                  Read full article
                </Link>
              </div>
            </article>
          ))}
        </section>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query BlogPage {
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
          title
          summary {
            text: summary
          }
          backgroundImage {
            gatsbyImageData(layout: CONSTRAINED, width: 300)
          }
        }
      }
    }
  }
`;

export default BlogPage;
