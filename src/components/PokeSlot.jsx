import React from 'react';
import styled from 'styled-components';

import AspRatioBox from 'components/styles/AspRatioBox';
import { colors } from './styles/styledVars';

const StyledSlot = styled.div`
  flex: 0 0 12.5%;
  padding: 0.25rem;
`;

const EmptySlot = styled.div`
  border-radius: 8px;
  border: 2px dashed ${colors.lite_02};
`;

const PokeSlot = () => {
  return (
    <StyledSlot>
      <AspRatioBox>
        <EmptySlot />
      </AspRatioBox>
    </StyledSlot>
  );
};

export default PokeSlot;
