import type { ProjectStore } from '@/types';

export const InitialStore: ProjectStore = {
	nodes: [
		{
			value: 'new node a754e...',
			id: 'a754e999-d323-4057-b40d-1e382dc34996',
			parent: null,
			children: [
				'7ff0f02a-b13a-403c-995e-cf2837141472',
				'894ad2a4-7a61-43b2-be92-59e5fbe1faf5',
			],
			position: {
				x: 35,
				y: 113,
			},
		},
		{
			value: 'new node 1ef41...',
			id: '7ff0f02a-b13a-403c-995e-cf2837141472',
			parent: 'a754e999-d323-4057-b40d-1e382dc34996',
			children: [],
			position: {
				x: 37,
				y: 340,
			},
		},
		{
			value: 'new node 1f504...',
			id: '1f504272-4f9c-4215-99ff-e977758a76d4',
			parent: null,
			children: [],
			position: {
				x: 38,
				y: 581,
			},
		},
		{
			value: 'new node 6ba36...',
			id: 'afd1cf58-0d76-4dcf-87cf-a9b6e1673e3b',
			parent: '894ad2a4-7a61-43b2-be92-59e5fbe1faf5',
			children: ['07aec5be-be9e-40c4-b410-33dff91b0cfd'],
			position: {
				x: 650,
				y: 110,
			},
		},
		{
			value: 'new node c0c01...',
			id: '894ad2a4-7a61-43b2-be92-59e5fbe1faf5',
			parent: 'a754e999-d323-4057-b40d-1e382dc34996',
			children: ['afd1cf58-0d76-4dcf-87cf-a9b6e1673e3b'],
			position: {
				x: 384,
				y: 60,
			},
		},
		{
			value: 'new node f9085...',
			id: 'f9085b85-6865-46c5-8dbe-49240e6646f3',
			parent: null,
			children: ['35ae85a0-8274-4d2c-b821-c6482cc8bfa3'],
			position: {
				x: 386,
				y: 317,
			},
		},
		{
			value: 'new node c3ab8...',
			id: '35ae85a0-8274-4d2c-b821-c6482cc8bfa3',
			parent: 'f9085b85-6865-46c5-8dbe-49240e6646f3',
			children: [],
			position: {
				x: 386,
				y: 607,
			},
		},
		{
			value: 'new node f6650...',
			id: '07aec5be-be9e-40c4-b410-33dff91b0cfd',
			parent: 'afd1cf58-0d76-4dcf-87cf-a9b6e1673e3b',
			children: [],
			position: {
				x: 650,
				y: 300,
			},
		},
	],
	edges: {
		newEdgeSource: null,
		edges: [
			{
				id: 'f51ebf30-66fc-43fe-977d-5d41ddabb7d8',
				relation: [
					'f9085b85-6865-46c5-8dbe-49240e6646f3',
					'894ad2a4-7a61-43b2-be92-59e5fbe1faf5',
				],
			},
			{
				id: 'a5fae126-2392-4b2b-bafa-e825d3a6b7c8',
				relation: [
					'f9085b85-6865-46c5-8dbe-49240e6646f3',
					'7ff0f02a-b13a-403c-995e-cf2837141472',
				],
			},
			{
				id: 'bf643753-d587-4080-ae32-c78ff13ae21e',
				relation: [
					'1f504272-4f9c-4215-99ff-e977758a76d4',
					'7ff0f02a-b13a-403c-995e-cf2837141472',
				],
			},
			{
				id: '9c9ac1c0-6500-420d-86fa-29fbb5bd7524',
				relation: [
					'1f504272-4f9c-4215-99ff-e977758a76d4',
					'35ae85a0-8274-4d2c-b821-c6482cc8bfa3',
				],
			},
		],
	},
};
