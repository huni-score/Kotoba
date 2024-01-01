import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Box, Heading, IconButton, Center } from '@chakra-ui/react';

function Header() {
	return (
		<Flex bg='#003262' p={4}>
			<Box as='span' w='30x' textAlign='left'>
				<IconButton colorScheme='white' icon={<HamburgerIcon />} />
			</Box>
			<Center>
				<Heading as='h2' color='white'>
					Kotoba
				</Heading>
			</Center>
		</Flex>
	);
}

export default Header;
