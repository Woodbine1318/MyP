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
      <section className="px-10 py-64 md:px-16 md:grid md:grid-cols-2 md:gap-16 md:items-center">
        <div className="mb-32 md:mb-0 md:px-16">
          <h1 className="text-2xl leading-none font-bold mb-8">On-demand paediatric care</h1>

          <p className="text-lg tracking-wide mb-24">
            Improving the accessibility to paediatric opinion in primary care
          </p>

          <a
            href="tel:"
            className="flex items-center max-w-max px-6 py-5 bg-whatsapp text-white rounded-12 font-bold mb-4 mr-8"
          >
            <FaWhatsapp className="w-10 h-10 mr-4" />
            Contact us
          </a>

          <a
            href="mailto:info@mypaediatrician.co.uk"
            className="flex items-center max-w-max px-6 py-5 bg-mp-light-blue text-white rounded-12 font-bold"
          >
            <FiMail className="w-10 h-10 mr-4" />
            info@mypaediatrician.co.uk
          </a>
        </div>

        <StaticImage
          src="../assets/images/10.svg"
          alt=""
          className="block h-144 md:h-full border-12 border-mp-light-blue rounded-tl-36 rounded-br-36 rounded-tr-12 rounded-bl-12 md:flex-1"
          objectFit="cover"
        />
      </section>
    </Container>
  </Layout>
);

export default IndexPage;
