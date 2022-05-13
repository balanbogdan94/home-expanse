export default interface Expanse {
	id: string;
	description: string;
	amount: number;
	date: Date;
	label: string[];
	provider?: string;
}
