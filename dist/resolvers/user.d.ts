declare const _default: {
    Query: {
        getUsers: () => Promise<import("mongoose").Document[]>;
        getUserById: (_: any, { id }: {
            id: string;
        }) => Promise<import("mongoose").Document | null>;
    };
};
export default _default;
