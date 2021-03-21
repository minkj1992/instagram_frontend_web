import styled from 'styled-components';

const BaseBox = styled.div`
    background-color: white;
    border: 1px solid ${(props) => props.theme.borderColor};
    width: 100%;
`;

export default BaseBox;
