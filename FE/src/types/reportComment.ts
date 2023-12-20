interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    createDate: string;
    updateDate: string;
    avatar: string;
    second_name: string;
    status: number;
    gender: string;
    address: string | null;
    company: string | null;
    country: string | null;
    sumBLog: number;
    checkStatusFollow: boolean;
    checkFollowCategory: boolean;
    checkReportUser: boolean;
    banner_url: string;
    totalFollowers: number;
    totalFollowing: number;
    role: string;
    school: string | null;
    descriptions: string;
}

interface CommentId {
    id: number;
    content: string;
    users: User;
    createdAt: string;
}

interface UserReported {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    createDate: string;
    updateDate: string;
    avatar: string;
    second_name: string;
    status: number;
    gender: string;
    address: string;
    company: string;
    country: string;
    sumBLog: number;
    checkStatusFollow: boolean;
    checkFollowCategory: boolean;
    checkReportUser: boolean;
    banner_url: string;
    totalFollowers: number;
    totalFollowing: number;
    role: string;
    school: string;
    descriptions: string;
}

export interface ReportComment {
    id: number;
    comment_id: CommentId;
    user_reported: UserReported;
    reason: string;
    create_at: string;
}
