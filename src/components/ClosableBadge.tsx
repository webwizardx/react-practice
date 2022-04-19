import { ReactNode } from "react"
import { Badge, CloseButton, Flex, Text } from "@chakra-ui/react"

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
                height={'24px'}
                py={1}
                px={2}
                borderTopLeftRadius={'5px'}
                borderBottomLeftRadius={'5px'}
                bg='gray.200'>
                <Text as={'span'} color={'success'}>{children}</Text>
            </Badge>
            <CloseButton
                height={'24px'}
                borderRadius={0}
                borderTopRightRadius={'5px'}
                borderBottomRightRadius={'5px'}
                _hover={{
                    backgroundColor: 'dark',
                    transition: 'background-color .2s'
                }}
                bg={'success'}
                color={'white'}
                onClick={onClick}
            />
        </Flex >
    )
}

export default ClosableBadge