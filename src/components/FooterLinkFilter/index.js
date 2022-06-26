import React from "react";
import FilterLink from "../../containers/FilterLink";
import { FiltersActionTypes as FilterTypes } from "../../stores/actions/types";
import styled from "styled-components";

const FooterLinkFilterWrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const FooterLinkFilterWrapper = () => {
  return (
    <FooterLinkFilterWrapperStyle className="not_select">
      <span>Show: </span>&nbsp;&nbsp;
      <FilterLink filter={FilterTypes.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={FilterTypes.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={FilterTypes.SHOW_COMPLETED}>Completed</FilterLink>
    </FooterLinkFilterWrapperStyle>
  );
};

export default FooterLinkFilterWrapper;
