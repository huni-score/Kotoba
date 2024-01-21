import {
	Box,
	Heading,
	Input,
	Button,
	Center,
	Text,
	Spinner,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

function Main() {
	const [transcription, setTranscription] = useState();
	const [translation, setTranslation] = useState();
	const [loading, setLoading] = useState(true);

	function CallServer() {
		Promise.all([
			fetch('http://localhost:4000/transcribe'),
			fetch('http://localhost:4000/translate'),
		])
			.then(([transcript, translate]) =>
				Promise.all([transcript.json(), translate.json()])
			)
			.then(([dataTranscript, dataTranslate]) => {
				setTranscription(dataTranscript.results);
				setTranslation(dataTranslate.results);
				setLoading(false);
			});
	}

	function Translation() {
		if (!loading) {
			return translation.map((trans) => (
				<Box w='100%'>
					<br />
					<ul key={trans}>{trans}</ul>
				</Box>
			));
		} else {
			return (
				<Center>
					<Spinner />
				</Center>
			);
		}
	}
	function Transcription() {
		if (!loading) {
			return transcription.map((trans) => (
				<Box w='100%'>
					<br />
					<ul key={trans}>{trans}</ul>
				</Box>
			));
		} else {
			return (
				<Center>
					<Spinner />
				</Center>
			);
		}
	}

	return (
		<>
			<Center>
				<Box display='flex' w='70%' p={8}>
					<Input placeholder='Input Youtube URL' type='url' />
					<Button onClick={CallServer}>Transcribe</Button>
				</Box>
			</Center>
			<Box display='flex' justifyContent='center'>
				<Box p={4} m={4} borderWidth='2px' w='40%'>
					<Transcription />
				</Box>
				<Box p={4} m={4} borderWidth='2px' w='40%'>
					<Translation />
				</Box>
			</Box>
		</>
	);
}

export default Main;
