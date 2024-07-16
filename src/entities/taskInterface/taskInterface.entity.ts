export interface TaskInterface {
  readonly task: string;
  readonly description: string;
  readonly status: boolean;
  readonly id?: number;
}