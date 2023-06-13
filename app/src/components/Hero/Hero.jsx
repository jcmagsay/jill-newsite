import './Hero.scss';

import React, { useEffect, useState } from 'react';

import ClassCatNode from '../ClassCatNode/ClassCatNode';
import Text from '../Text/Text';

// import {
//   uiActions,
//   uiSelectors,
// } from 'Ducks/ui';


const Hero = (props) => {
  const {
    animate,
    // animateHero,
    children,
    image,
    // pageLoaded,
    title,
    supportingText,
  } = props;
  const [pageLoaded, updatePageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => updatePageLoaded(true), 200);
  }, [updatePageLoaded]);


  return (
    <section className="hero">
      <div className="hero__avatar">
        <ClassCatNode
          as="img"
          className={[
            'hero__image',
            'fadeIn',
            {
              'fadingIn': pageLoaded,
            },
          ]}
          src={image}
        />
      </div>
      <div className="hero__details">
        <Text
          className={[
            'fadeLeft',
            {
              'fadingLeft': pageLoaded,
            },
          ]}
          tag="h2"
          type="display-xl"
        >
          {title}
        </Text>
        <Text
          tag="h3"
          type="display-sm"
        >
          {supportingText}
        </Text>
      </div>
      {children &&
        <div className="hero__body">
          {{ children }}
        </div>
      }
    </section>
  );
};

export default Hero;
