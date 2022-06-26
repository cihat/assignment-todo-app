import React from "react";
import FilterLink from "../../containers/FilterLink";
import { FiltersActionTypes as FilterTypes } from "../../stores/actions/types";
import styled from "styled-components";

const FooterLinkFilterWrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;

const FooterLinkFilterWrapper = () => {
  return (
    <FooterLinkFilterWrapperStyle>
      <span>Show: </span>&nbsp;&nbsp;
      <FilterLink filter={FilterTypes.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={FilterTypes.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={FilterTypes.SHOW_COMPLETED}>Completed</FilterLink>
    </FooterLinkFilterWrapperStyle>
  );
};

export default FooterLinkFilterWrapper;
