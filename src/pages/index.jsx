import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Container from '../components/container';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Container>
      <section className="pt-32 text-center min-w-full">
        <h1 className="text-2xl leading-none font-bold mb-8">On-demand paediatric care</h1>

        <p className="text-xl tracking-wide mb-28 max-w-3xl mx-auto leading-tight">
          Improving the accessibility to paediatric opinion in primary care
        </p>

        <button
          type="button"
          className="font-semibold text-lg py-6 px-20 bg-mp-light-blue rounded-full text-white disabled:bg-mp-grey disabled:text-mp-disabled disabled:cursor-not-allowed mb-4"
          disabled
        >
          Coming Soon
        </button>

        <p className="text-sm mb-48">
          Reach out to{' '}
          <a href="mailto:info@mypaediatrician.co.uk" className="underline font-semibold">
            info@mypaediatrician.co.uk
          </a>
        </p>

        <StaticImage
          src="../assets/images/10.svg"
          alt=""
          className="block h-144 md:h-full max-w-4xl mx-auto border-14 border-mp-dark-blue rounded-tl-36 rounded-br-36 rounded-tr-12 rounded-bl-12 md:flex-1"
          objectFit="cover"
        />
      </section>
    </Container>
  </Layout>
);

export default IndexPage;
