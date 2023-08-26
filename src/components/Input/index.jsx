import PropTypes from 'prop-types'
import * as S from './styles'
import { Label } from 'reactstrap'

export function Input({ name, register, placeholder, error, readonly, type = 'text', labelColor }) {

	return (
		<S.InputContainer labelColor={labelColor}>
			<Label>{name}</Label>
			<S.Input
				type={type}
				placeholder={placeholder ?? ''}
				readOnly={readonly}
				{...register}
			/>
			{error && <S.Error>{error.message}</S.Error>}
		</S.InputContainer>
	)
}

Input.propTypes = {
	name: PropTypes.string,
	register: PropTypes.object,
	placeholder: PropTypes.string,
	error: PropTypes.object,
	readonly: PropTypes.bool,
	type: PropTypes.string,
	labelColor: PropTypes.string
}