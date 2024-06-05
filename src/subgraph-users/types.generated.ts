import { GraphQLResolveInfo } from "graphql";
import { UserMapper } from "./schema.mappers";
import { ServerContext } from "./index";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _FieldSet: { input: any; output: any };
};

export type Product = {
  __typename?: "Product";
  compositeId: ProductCompositeID;
  id: Scalars["ID"]["output"];
  pId: Scalars["ID"]["output"];
  productName: Scalars["String"]["output"];
  productNameBeta: Scalars["String"]["output"];
};

export type ProductCompositeID = {
  __typename?: "ProductCompositeID";
  one: Scalars["ID"]["output"];
  three: Scalars["ID"]["output"];
  two: Scalars["ID"]["output"];
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<User>;
};

export type User = {
  __typename?: "User";
  favouriteProducts: Array<Product>;
  id: Scalars["ID"]["output"];
  username: Scalars["String"]["output"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
  reference: TReference,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
type NullableCheck<T, S> =
  Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
type ListCheck<T, S> = T extends (infer U)[]
  ? NullableCheck<U, S>[]
  : GraphQLRecursivePick<T, S>;
export type GraphQLRecursivePick<T, S> = {
  [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]>;
};

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Product: ResolverTypeWrapper<Product>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  ProductCompositeID: ResolverTypeWrapper<ProductCompositeID>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<UserMapper>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Product: Product;
  ID: Scalars["ID"]["output"];
  String: Scalars["String"]["output"];
  ProductCompositeID: ProductCompositeID;
  Query: {};
  User: UserMapper;
  Boolean: Scalars["Boolean"]["output"];
};

export type ProductResolvers<
  ContextType = ServerContext,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes["Product"]>,
    { __typename: "Product" } & (
      | GraphQLRecursivePick<
          ParentType,
          { compositeId: { one: true; two: true } }
        >
      | GraphQLRecursivePick<
          ParentType,
          { id: true; compositeId: { two: true; three: true } }
        >
      | GraphQLRecursivePick<ParentType, { pId: true }>
      | GraphQLRecursivePick<ParentType, { id: true }>
    ),
    ContextType
  >;
  compositeId?: Resolver<
    ResolversTypes["ProductCompositeID"],
    { __typename: "Product" } & (
      | GraphQLRecursivePick<
          ParentType,
          { compositeId: { one: true; two: true } }
        >
      | GraphQLRecursivePick<
          ParentType,
          { id: true; compositeId: { two: true; three: true } }
        >
      | GraphQLRecursivePick<ParentType, { pId: true }>
      | GraphQLRecursivePick<ParentType, { id: true }>
    ),
    ContextType
  >;
  id?: Resolver<
    ResolversTypes["ID"],
    { __typename: "Product" } & (
      | GraphQLRecursivePick<
          ParentType,
          { compositeId: { one: true; two: true } }
        >
      | GraphQLRecursivePick<
          ParentType,
          { id: true; compositeId: { two: true; three: true } }
        >
      | GraphQLRecursivePick<ParentType, { pId: true }>
      | GraphQLRecursivePick<ParentType, { id: true }>
    ),
    ContextType
  >;
  pId?: Resolver<
    ResolversTypes["ID"],
    { __typename: "Product" } & (
      | GraphQLRecursivePick<
          ParentType,
          { compositeId: { one: true; two: true } }
        >
      | GraphQLRecursivePick<
          ParentType,
          { id: true; compositeId: { two: true; three: true } }
        >
      | GraphQLRecursivePick<ParentType, { pId: true }>
      | GraphQLRecursivePick<ParentType, { id: true }>
    ),
    ContextType
  >;

  productNameBeta?: Resolver<
    ResolversTypes["String"],
    { __typename: "Product" } & (
      | GraphQLRecursivePick<
          ParentType,
          { compositeId: { one: true; two: true } }
        >
      | GraphQLRecursivePick<
          ParentType,
          { id: true; compositeId: { two: true; three: true } }
        >
      | GraphQLRecursivePick<ParentType, { pId: true }>
      | GraphQLRecursivePick<ParentType, { id: true }>
    ) &
      GraphQLRecursivePick<ParentType, { productName: true }>,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCompositeIDResolvers<
  ContextType = ServerContext,
  ParentType extends
    ResolversParentTypes["ProductCompositeID"] = ResolversParentTypes["ProductCompositeID"],
> = {
  one?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  three?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  two?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ServerContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = ServerContext,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes["User"]>,
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  favouriteProducts?: Resolver<
    Array<ResolversTypes["Product"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ServerContext> = {
  Product?: ProductResolvers<ContextType>;
  ProductCompositeID?: ProductCompositeIDResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
