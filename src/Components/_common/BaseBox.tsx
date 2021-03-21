import styled from 'styled-components';

const BaseBox = styled.div`
    background-color: white;
    border: ${(props) => props.theme.boxBorder};
    width: 100%;
`;

export default BaseBox;
