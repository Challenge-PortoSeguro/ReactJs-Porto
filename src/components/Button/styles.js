import styled, { css } from 'styled-components';

function getVariantStyle(variant, disabled) {
    const variantMap = {
        primary: css`
            height: 40px;
            font-weight: 600;
            font-size: 16px;
            background: ${({ theme }) => theme.colors.button.normal};
            border: none;
            &:hover {
                background: ${({ theme }) => theme.colors.button.hover};
            }
        `,
        secondary: css`
            height: 40px;
            font-weight: 600;
            font-size: 16px;
            background: transparent;
            border: 1px solid ${({ theme }) => theme.colors.border.field};
            color: ${({ theme }) => theme.colors.text.black};
            &:hover {
                color: ${({ theme }) => theme.colors.text.black};
                background: ${({ theme }) => theme.colors.button.secondary};

            }
        `,
        success: css`
            height: 40px;
            font-weight: 600;
            font-size: 16px;
            background: ${({ theme }) => theme.colors.status.success};
            border: 1px solid ${({ theme }) => theme.colors.border.transparent};
            color: ${({ theme }) => theme.colors.text.body};
            &:hover {
                color: ${({ theme }) => theme.colors.text.onFill};
                background: ${({ theme }) => theme.colors.status.successAlt};
            }
        `,
        danger: css`
            height: 40px;
            font-weight: 600;
            font-size: 16px;
            background: ${({ theme }) => theme.colors.status.danger};
            border: 1px solid ${({ theme }) => theme.colors.border.transparent};
            color: ${({ theme }) => theme.colors.text.body};
            &:hover {
                color: ${({ theme }) => theme.colors.text.onFill};
                background: ${({ theme }) => theme.colors.status.dangerAlt};
            }
        `,
        link: css`
            height: 40px;
            background: none;
            border: none;
            &:hover {
                background: ${({ theme }) => theme.colors.button.hover};
            }
        `,
        disabled: css`
            background: ${({ theme }) => theme.colors.button.disabled};
            border: none;
            cursor: not-allowed;
        `,
    }

    return variantMap[disabled ? 'disabled' : variant];
}



export const Button = styled.button`
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 6px;
    transition: background 0.3s;
    cursor: pointer;
    outline: none;
    font-family: 'Inter';
    min-width: 100px;
    color: ${({ color }) => color ? color : '#fff'};
    width: ${({ $full }) => $full ? '100%' : 'fit-content'};

    ${({ $variant, disabled }) => getVariantStyle($variant, disabled)}
`;

export const LinkButton = styled.a`
    padding: 8px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border-radius: 8px;
    transition: background 0.3s;
    cursor: pointer;
    outline: none;
    font-family: 'Inter';
    color: ${({ color }) => color ? color : '#fff'};
    width: ${({ $full }) => $full ? '100%' : 'fit-content'};
    text-decoration: none;

    ${({ $variant, disabled }) => getVariantStyle($variant, disabled)}
`;