import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return(
        <Flex align="center">
            { showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Guilherme Dantas</Text>
                <Text color="gray.300" fontSize="small">
                    guilhermedantas788@gmail.com
                </Text>
            </Box>
            ) }
            <Avatar size="md" name="Guilherme Dantas" src="https://github.com/guidantas28.png" />
        </Flex>
    )
}