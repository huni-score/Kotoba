import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<Box>
				<Main />
			</Box>
		</>
	);
}

export default App;
