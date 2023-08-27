import styled from 'styled-components'

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & label {
		color: ${({ theme, labelColor }) => labelColor ? labelColor : theme.colors.text.black};
	}
`;

export const Select = styled.select`
	border-radius: 4px;
	width: 100%;
	box-sizing: border-box;
	padding: 7px 16px;
	outline: none;
	border: 1px solid ${({ theme }) => theme.colors.border.field};
	background: ${({ theme }) => theme.colors.background.secondary};
	color: ${({ theme }) => theme.colors.text.black};

	cursor: ${({ readOnly }) => readOnly ? 'not-allowed' : 'text'}
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 8px;
`;

export const Error = styled.p`
	margin-top: 8px;
	margin-bottom: 8px;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.status.danger};
`;