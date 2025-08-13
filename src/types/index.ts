export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
}

export interface Job {
    id: string;
    title: string;
    description: string;
    requirements: string[];
    location: string;
}

export interface Application {
    id: string;
    userId: string;
    jobId: string;
    status: 'pending' | 'accepted' | 'rejected';
}