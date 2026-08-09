export interface Project {
    id: number;
    name: string;
    status: 'active' | 'archived' | 'pending';
    progress: number;
}