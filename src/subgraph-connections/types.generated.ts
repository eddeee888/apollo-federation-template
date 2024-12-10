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
export type EnumResolverSignature<T, AllowedValues = any> = {
  [key in keyof T]?: AllowedValues;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
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

export type Media = {
  __typename?: "Media";
  id: Scalars["ID"]["output"];
  ratings?: Maybe<Scalars["Float"]["output"]>;
};

export type PersonName = {
  __typename?: "PersonName";
  first: Scalars["String"]["output"];
  last: Scalars["String"]["output"];
};

export type PersonTitle = "DR" | "MR" | "MRS" | "MS" | "PROF";

export type Product = {
  __typename?: "Product";
  id: Scalars["ID"]["output"];
  tag: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  connectionsUser?: Maybe<User>;
  connectionsUserNestedFirstName?: Maybe<User>;
};

export type QueryconnectionsUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryconnectionsUserNestedFirstNameArgs = {
  id: Scalars["ID"]["input"];
};

export type User = {
  __typename?: "User";
  age: Scalars["Int"]["output"];
  birthYear: Scalars["Int"]["output"];
  firstName: Scalars["String"]["output"];
  friends: Array<User>;
  fullName: Scalars["String"]["output"];
  fullNameUsingPersonName: Scalars["String"]["output"];
  fullNameWithTitle: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  name: PersonName;
  title: PersonTitle;
  watchedProducts: Array<Product>;
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
  Media: ResolverTypeWrapper<Media>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  PersonName: ResolverTypeWrapper<PersonName>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  PersonTitle: ResolverTypeWrapper<"MR" | "MRS" | "MS" | "DR" | "PROF">;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<UserMapper>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Media: Media;
  ID: Scalars["ID"]["output"];
  Float: Scalars["Float"]["output"];
  PersonName: PersonName;
  String: Scalars["String"]["output"];
  Product: Product;
  Query: {};
  User: UserMapper;
  Int: Scalars["Int"]["output"];
  Boolean: Scalars["Boolean"]["output"];
};

export type MediaResolvers<
  ContextType = ServerContext,
  ParentType extends
    ResolversParentTypes["Media"] = ResolversParentTypes["Media"],
> = {
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes["Media"]>,
    { __typename: "Media" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  ratings?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonNameResolvers<
  ContextType = ServerContext,
  ParentType extends
    ResolversParentTypes["PersonName"] = ResolversParentTypes["PersonName"],
> = {
  first?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  last?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonTitleResolvers = EnumResolverSignature<
  { DR?: any; MR?: any; MRS?: any; MS?: any; PROF?: any },
  ResolversTypes["PersonTitle"]
>;

export type ProductResolvers<
  ContextType = ServerContext,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes["Product"]>,
    { __typename: "Product" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  tag?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ServerContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  connectionsUser?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryconnectionsUserArgs, "id">
  >;
  connectionsUserNestedFirstName?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryconnectionsUserNestedFirstNameArgs, "id">
  >;
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
  age?: Resolver<
    ResolversTypes["Int"],
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }> &
      GraphQLRecursivePick<ParentType, { birthYear: true }>,
    ContextType
  >;

  friends?: Resolver<
    Array<ResolversTypes["User"]>,
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  fullName?: Resolver<
    ResolversTypes["String"],
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }> &
      GraphQLRecursivePick<ParentType, { firstName: true; lastName: true }>,
    ContextType
  >;
  fullNameUsingPersonName?: Resolver<
    ResolversTypes["String"],
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }> &
      GraphQLRecursivePick<ParentType, { name: { first: true; last: true } }>,
    ContextType
  >;
  fullNameWithTitle?: Resolver<
    ResolversTypes["String"],
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }> &
      GraphQLRecursivePick<
        ParentType,
        { firstName: true; lastName: true; title: true }
      >,
    ContextType
  >;
  id?: Resolver<
    ResolversTypes["ID"],
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;

  name?: Resolver<
    ResolversTypes["PersonName"],
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  title?: Resolver<
    ResolversTypes["PersonTitle"],
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  watchedProducts?: Resolver<
    Array<ResolversTypes["Product"]>,
    { __typename: "User" } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ServerContext> = {
  Media?: MediaResolvers<ContextType>;
  PersonName?: PersonNameResolvers<ContextType>;
  PersonTitle?: PersonTitleResolvers;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
