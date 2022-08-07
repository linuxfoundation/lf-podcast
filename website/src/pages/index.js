import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { podcasts } from "../components/podcasts";
import FeaturePodcast from "../components/featurePodcast";

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={classnames('hero--subtitle')}>{siteConfig.customFields.ctaHeader}</p>
        </div>
      </header>
      <main>
      {console.log(podcasts)}
      {podcasts && Object.keys(podcasts).length && (
          <section className={styles.podcasts}>
            <div className="container">
              <div className="row">
              {Object.keys(podcasts).map((key, idx) => (
                    <FeaturePodcast key={idx} {...podcasts[key]} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;