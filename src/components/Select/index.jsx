import PropTypes from 'prop-types'
import * as S from './styles'
import { Label } from 'reactstrap'

export function Select({ name, id, values, selected, error, readonly, noneOption, onChange }) {
	return (
		<S.SelectContainer>
			<Label>{name}</Label>
			<S.Select id={id} readOnly={readonly} onChange={onChange} value={selected}>
				<option style={({ color: "#545454" })} disabled hidden>{noneOption}</option>
				{values &&
					Object.entries(values).map(([key, value]) => (
						<option style={({color: "#000"})} key={key} value={value}>
							{value}
						</option>
					))}
			</S.Select>
			{error && <S.Error>{error.message}</S.Error>}
		</S.SelectContainer>
	)
}

Select.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	values: PropTypes.object,
	selected: PropTypes.string,
	error: PropTypes.object,
	readonly: PropTypes.bool,
	onChange: PropTypes.func,
	noneOption: PropTypes.string
}