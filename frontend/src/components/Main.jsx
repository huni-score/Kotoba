import { Box, Heading, Input, Button, Center, Text } from '@chakra-ui/react';

function Main() {
	return (
		<>
			<Center>
				<Box display='flex' w='70%' p={8}>
					<Input placeholder='Input Youtube URL' type='url' />
					<Button>Transcribe</Button>
				</Box>
			</Center>
			<Center>
				<Box p={8} m={4} borderWidth='2px'>
					<Text>Data Placeholder</Text>
				</Box>
				<Box p={8} m={4} borderWidth='2px'>
					<Text>Data Placeholder</Text>
				</Box>
			</Center>
		</>
	);
}

export default Main;
