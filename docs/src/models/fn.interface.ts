export enum ArgType {
	Array = 'Array'
}

export interface IFnDescription {
	spec: string;
	description: string;
	args: {
		name: string;
		type: ArgType;
		description: string;
	}[];
	example: string;
}
