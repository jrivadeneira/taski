export class Task{
  constructor(
    public id: number,
    public title: string,
    public createdBy: string,
    public assignedTo: string,
    public description: string,
    public status: string,
    public createdDate: string,
    public dueDate: string,
    public category: string,
    public archived: boolean
  ) {}
}

export class CreateTaskRequest{
  constructor(
    public title: string,
    public createdBy: string,
    public assignedTo: string,
    public description: string,
    public status: string,
    public createdDate: string,
    public dueDate: string,
    public category: string,
    public archived: boolean
  ) {}
}
