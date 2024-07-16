export class Task {
  constructor(
    public task: string,
    public description: string,
    public status: boolean = false,
    public id?: number,
  ) { }
}