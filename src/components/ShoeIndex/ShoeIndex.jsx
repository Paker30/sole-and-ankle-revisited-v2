import React from 'react';
import styled from 'styled-components';

import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const StyledSelect = styled(Select)``;

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Container>
      <Wrapper>
        <MainColumn>
          <Header>
            <Title>Running</Title>
            <StyledSelect
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </StyledSelect>
          </Header>
          <Spacer size={32} />
          <ShoeGrid />
        </MainColumn>
        <LeftColumn>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">
              Shoes
            </Breadcrumbs.Crumb>
          </Breadcrumbs>
          <Spacer size={42} />
          <ShoeSidebar />
        </LeftColumn>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  container-type: inline-size;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @container ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @container ${QUERIES.tabletAndDown} {
    ${StyledSelect} {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
