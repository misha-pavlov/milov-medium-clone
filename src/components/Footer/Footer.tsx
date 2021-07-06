import React from 'react';

import { FooterBlock, FooterText } from './Footer.styles';
import { messages } from '../../config/messages';

const Footer = () => {
  return (
    <FooterBlock>
      <FooterText>
        {messages.footer.mediumClone}
        <br />
        {messages.footer.milov}
      </FooterText>
    </FooterBlock>
  );
};

export default Footer;
