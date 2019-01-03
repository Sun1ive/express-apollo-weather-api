export declare const resolvers: {
    Query: {
        getUsers: () => Promise<import("mongoose").Document[]>;
        getUserById: (_: any, { id }: {
            id: string;
        }) => Promise<import("mongoose").Document | null>;
        city: (_: any, { name }: {
            name: string;
        }) => Promise<any>;
        cities: () => Promise<any>;
        hottestCity: () => Promise<any>;
        coldestCity: () => Promise<any>;
    };
};
