import { LoadingButton } from '@mui/lab'
import { FormattedMessage } from 'react-intl'

interface Props {
    id: string,
    onClick?: () => void
}

const LoadingButtonCustom = (props: Props) => {
    const { id, onClick } = props
    return (
        <LoadingButton
            sx={{
                fontWeight: 400,
                lineHeight: 1.71429,
                textTransform: 'capitalize',
                borderRadius: '6px',
                color: 'rgb(251, 253, 255)',
                backgroundColor: 'rgb(0, 145, 255)',
                height: '48px',
                fontSize: '16px',
                letterSpacing: '-0.01em',
                "&:hover": {
                    boxShadow: 'none',
                    textDecoration: 'none',
                    backgroundColor: 'rgb(0, 129, 241)'
                }
            }}
            variant='contained'
            size='large'
            disableElevation
            fullWidth
            onClick={onClick}
        >
            <FormattedMessage id={id} />
        </LoadingButton>
    )
}

export default LoadingButtonCustom