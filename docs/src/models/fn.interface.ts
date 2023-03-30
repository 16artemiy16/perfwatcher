export enum ArgType {
	Function = 'Function',
	Number = 'Number',
	String = 'String'
}

export interface IFnDescription {
	name: string;
	spec: string;
	description: string;
	args: {
		name: string;
		type: ArgType;
		description: string;
	}[];
	example: string;
}
