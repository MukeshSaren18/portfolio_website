import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi This is Mukesh , I'm an Front end web developer!
      </SectionText>
      <Button onClick={() => window.location = 'mailto:mukeshsaren018@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;