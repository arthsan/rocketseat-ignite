import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Arthur Durant</Text>
          <Text color="gray.300" fontSize="small">
            arthur_sbd@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Arthur Durant"
        src="https://github.com/arthsan.png"
      />
    </Flex>
  );
}
