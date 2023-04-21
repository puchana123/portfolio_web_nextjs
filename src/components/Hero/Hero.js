import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Porfolio
      </SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque quasi aut vitae qui laudantium est doloribus provident reiciendis tempore ad impedit quibusdam quam accusamus nulla quidem, exercitationem earum dignissimos?
      </SectionText>
      <Button onClick={()=>window.location='https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;