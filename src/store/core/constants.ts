import type { ProjectStore } from '@/types';

export const InitialStore: ProjectStore = {
	nodes: [
		{
			value: '1st node',
			id: '9bb34399-a031-4a1d-9592-061c3c69153c',
			parent: null,
			children: ['0d63ada5-df4e-4131-a0b8-cce5aa577dec'],
			position: {
				x: 45,
				y: 59,
			},
		},
		{
			value: '2nd node',
			id: '0d63ada5-df4e-4131-a0b8-cce5aa577dec',
			parent: '9bb34399-a031-4a1d-9592-061c3c69153c',
			children: [
				'1b8a2db0-8dca-4ff9-b374-69be3adf8d89',
				'144ebe19-8dd5-4d65-b6c9-4e5c7c3e1f89',
			],
			position: {
				x: 46,
				y: 359,
			},
		},
		{
			value: 'dependent node',
			id: '144ebe19-8dd5-4d65-b6c9-4e5c7c3e1f89',
			parent: '0d63ada5-df4e-4131-a0b8-cce5aa577dec',
			children: [],
			position: {
				x: 44,
				y: 635,
			},
		},
		{
			value: '123',
			id: '1b014eb6-c3c8-4ee8-aec4-6f759ef39730',
			parent: null,
			children: [],
			position: {
				x: 384,
				y: 50,
			},
		},
		{
			value: '',
			id: '349813e4-f049-4108-9a20-c0f07c5969bb',
			parent: '1b8a2db0-8dca-4ff9-b374-69be3adf8d89',
			children: [],
			position: {
				x: 427,
				y: 664,
			},
		},
		{
			value: '',
			id: '1b8a2db0-8dca-4ff9-b374-69be3adf8d89',
			parent: '0d63ada5-df4e-4131-a0b8-cce5aa577dec',
			children: ['349813e4-f049-4108-9a20-c0f07c5969bb'],
			position: {
				x: 465,
				y: 365,
			},
		},
	],
	edges: {
		newEdgeSource: null,
		edges: [
			{
				id: '7bc9412d-10db-4d00-be13-7a62fdb229ee',
				relation: [
					'1b8a2db0-8dca-4ff9-b374-69be3adf8d89',
					'144ebe19-8dd5-4d65-b6c9-4e5c7c3e1f89',
				],
			},
			{
				id: '255eac7f-0a88-471c-8860-d2c9a2b82d05',
				relation: [
					'1b8a2db0-8dca-4ff9-b374-69be3adf8d89',
					'9bb34399-a031-4a1d-9592-061c3c69153c',
				],
			},
			{
				id: '8c704eeb-f311-4401-a798-975092c1a1a7',
				relation: [
					'1b014eb6-c3c8-4ee8-aec4-6f759ef39730',
					'1b8a2db0-8dca-4ff9-b374-69be3adf8d89',
				],
			},
		],
	},
};
