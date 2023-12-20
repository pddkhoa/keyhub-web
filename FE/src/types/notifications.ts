interface Sender {
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
    descriptions: string;
    school: string;
}

interface TargetBlog {
    id: number;
    title: string;
    content: string;
    description: string;
    views: number;
    create_date: string;
    avatar: string;
    status_id: number;
    likes: number;
    categories: {
        id: number;
        name: string;
    };
    tags: Array<{
        id: number;
        name: string;
    }>;
    users: Sender;
    series: null | any; // replace 'any' with the actual type if possible
    isLike: boolean;
    isSave: boolean;
    sumComment: number;
}

export interface NotificationType {
    id: number;
    sender: Sender;
    targetBlog: TargetBlog;
    type: string;
    isRead: boolean;
    create_date: string;
}
