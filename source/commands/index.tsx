import React from 'react';
import Gradient from 'ink-gradient';

import { Text } from 'ink';

export default function Index() {
	return (
		<>
			<Gradient
				colors={[
					'#405DE6',
					'#5B51D8',
					'#833AB4',
					'#C13584',
					'#E1306C',
					'#FD1D1D',
					'#F56040',
				]}
			>
				<Text>
					{`
 █████                     █████                           █████████  █████       █████
░░███                     ░░███                           ███░░░░░███░░███       ░░███ 
 ░███  ████████    █████  ███████    ██████              ███     ░░░  ░███        ░███ 
 ░███ ░░███░░███  ███░░  ░░░███░    ░░░░░███  ██████████░███          ░███        ░███ 
 ░███  ░███ ░███ ░░█████   ░███      ███████ ░░░░░░░░░░ ░███          ░███        ░███ 
 ░███  ░███ ░███  ░░░░███  ░███ ███ ███░░███            ░░███     ███ ░███      █ ░███ 
 █████ ████ █████ ██████   ░░█████ ░░████████            ░░█████████  ███████████ █████
░░░░░ ░░░░ ░░░░░ ░░░░░░     ░░░░░   ░░░░░░░░              ░░░░░░░░░  ░░░░░░░░░░░ ░░░░░ 
`}
				</Text>
			</Gradient>
			<Text color="green">The end of brainrot and doomscrolling is here.</Text>
			<Text color="blue">
				Type &#39;insta-cli --help&#39; to see available commands.
			</Text>
			<Text color="yellow">
				Pro Tip: Use vim-motion (&#39;k&#39;, &#39;j&#39;) to navigate chats and
				messages.
			</Text>
		</>
	);
}
