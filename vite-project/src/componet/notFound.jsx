import { Box, Heading, Text } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';

export default function notFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <WarningTwoIcon boxSize={'300px'} color={'red'} />
      <Heading as="h2"  color={'black'} mt={6} mb={2}>
      Page not found
      </Heading>
      <Text color={'black'}>
        you are enter the wrong page !!!
      </Text>
    </Box>
  )
}

