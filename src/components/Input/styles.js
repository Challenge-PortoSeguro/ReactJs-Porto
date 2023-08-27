import styled from 'styled-components'

export const InputContainer = styled.div`
	& label {
		color: ${({ theme, labelColor }) => labelColor ? labelColor : theme.colors.text.black};
	}
`;

export const Input = styled.input`
	border-radius: 4px;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px;
	outline: none;
	border: 1px solid ${({ theme }) => theme.colors.border.field};
	background: ${({ theme }) => theme.colors.background.secondary};
	color: ${({ theme }) => theme.colors.text.black};

	::placeholder {
		color: ${({ theme }) => theme.colors.text.placeholder}
	}

	cursor: ${({ readOnly }) => readOnly ? 'not-allowed' : 'text'}
`;

export const Error = styled.p`
	margin-top: 8px;
	margin-bottom: 8px;
	font-size: 14px;
	color: ${({ theme }) => theme.colors.status.danger};
`;
