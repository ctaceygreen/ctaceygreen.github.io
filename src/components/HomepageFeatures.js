import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'What is this?',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        A blog of technical chitter chatter. Mostly taking on (interesting) 
        challenges within software engineering and developing cloud solutions. It's named 
      </>
    ),
  },
  {
    title: 'Who am I?',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chris Tacey-Green. A software architect and engineer from the UK. When I'm not being lame and techy, 
        I'm actually a sporty guy with two cute dogs and a cuter wife.
      </>
    ),
  },
  {
    title: 'Why am I doing this?',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I told myself to start a blog when I was 16. It's taken me over a decade to do it, 
        but I've recently made too many promises to people to let them down. The aim is purely 
        to try to educate on any and all topics that I can help with, hopefully with enough examples to aid with ctrl-c ctrl-v.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
