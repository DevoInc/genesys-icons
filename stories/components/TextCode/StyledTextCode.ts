import styled from 'styled-components';

export const StyledTextCode = styled.span`
  align-items: center;
  display: flex;
  font-family: 'Mono font', monospace;
  font-size: 13px;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: #f5f8fa;

  .code--tag {
    color: #3b9a5b;
  }

  .code--common {
    color: #777;
  }

  .code--attr {
    color: #a82164;
  }

  .code--attr-value {
    color: #5aa2d6;
  }
`;
