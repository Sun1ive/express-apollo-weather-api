declare type cityQuery = {
    name: string;
};
declare const _default: {
    Query: {
        city: (_: any, { name }: cityQuery) => Promise<any>;
        cities: () => Promise<any>;
        hottestCity: () => Promise<any>;
        coldestCity: () => Promise<any>;
    };
};
export default _default;
