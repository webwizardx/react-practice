import { ReactNode } from "react"
import { Badge, Close, Flex, Text } from "theme-ui"

type Props = {
    /**
     * Text inside de badge
    */
    children: ReactNode
    /**
     * Action to perform on click
    */
    onClick?: (...args: any) => void
}

/**
 * Badge with close icon
*/
const ClosableBadge = ({ children, onClick }: Props) => {
    return (
        <Flex sx={{ alignItems: 'center' }}>
            <Badge as='span'
                sx={{ height: '24px', fontWeight: 1, borderRadius: 0, borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}
                variant='filter'>
                <Text color='success'>{children}</Text>
            </Badge>
            <Close sx={{
                height: '24px',
                borderRadius: 0,
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
                ':hover': {
                    backgroundColor: 'darkerText',
                    transition: 'background-color .2s'
                }
            }}
                backgroundColor="success"
                color="white"
                onClick={onClick}
            />
        </Flex >
    )
}

export default ClosableBadge