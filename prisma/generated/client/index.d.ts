
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Board
 * 
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemCategory
 * 
 */
export type ItemCategory = $Result.DefaultSelection<Prisma.$ItemCategoryPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model MyProject
 * 
 */
export type MyProject = $Result.DefaultSelection<Prisma.$MyProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ItemStatus: {
  TODO: 'TODO',
  ONPROGRESS: 'ONPROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ItemStatus = (typeof ItemStatus)[keyof typeof ItemStatus]


export const ProjectScope: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type ProjectScope = (typeof ProjectScope)[keyof typeof ProjectScope]


export const ProjectRole: {
  LEADER: 'LEADER',
  MEMBER: 'MEMBER',
  GUEST: 'GUEST'
};

export type ProjectRole = (typeof ProjectRole)[keyof typeof ProjectRole]

}

export type ItemStatus = $Enums.ItemStatus

export const ItemStatus: typeof $Enums.ItemStatus

export type ProjectScope = $Enums.ProjectScope

export const ProjectScope: typeof $Enums.ProjectScope

export type ProjectRole = $Enums.ProjectRole

export const ProjectRole: typeof $Enums.ProjectRole

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<ExtArgs>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.itemCategory`: Exposes CRUD operations for the **ItemCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemCategories
    * const itemCategories = await prisma.itemCategory.findMany()
    * ```
    */
  get itemCategory(): Prisma.ItemCategoryDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.myProject`: Exposes CRUD operations for the **MyProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MyProjects
    * const myProjects = await prisma.myProject.findMany()
    * ```
    */
  get myProject(): Prisma.MyProjectDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.0
   * Query Engine version: 5fe21811a6ba0b952a3bc71400666511fe3b902f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Board: 'Board',
    Item: 'Item',
    ItemCategory: 'ItemCategory',
    Project: 'Project',
    MyProject: 'MyProject'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "board" | "item" | "itemCategory" | "project" | "myProject"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>
        fields: Prisma.BoardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[]
          }
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>
          }
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoard>
          }
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>
            result: $Utils.Optional<BoardCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemCategory: {
        payload: Prisma.$ItemCategoryPayload<ExtArgs>
        fields: Prisma.ItemCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          findFirst: {
            args: Prisma.ItemCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          findMany: {
            args: Prisma.ItemCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[]
          }
          create: {
            args: Prisma.ItemCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          createMany: {
            args: Prisma.ItemCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>[]
          }
          delete: {
            args: Prisma.ItemCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          update: {
            args: Prisma.ItemCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ItemCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ItemCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemCategoryPayload>
          }
          aggregate: {
            args: Prisma.ItemCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemCategory>
          }
          groupBy: {
            args: Prisma.ItemCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCategoryCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      MyProject: {
        payload: Prisma.$MyProjectPayload<ExtArgs>
        fields: Prisma.MyProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MyProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MyProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload>
          }
          findFirst: {
            args: Prisma.MyProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MyProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload>
          }
          findMany: {
            args: Prisma.MyProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload>[]
          }
          create: {
            args: Prisma.MyProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload>
          }
          createMany: {
            args: Prisma.MyProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MyProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload>[]
          }
          delete: {
            args: Prisma.MyProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload>
          }
          update: {
            args: Prisma.MyProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload>
          }
          deleteMany: {
            args: Prisma.MyProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MyProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MyProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MyProjectPayload>
          }
          aggregate: {
            args: Prisma.MyProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMyProject>
          }
          groupBy: {
            args: Prisma.MyProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<MyProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.MyProjectCountArgs<ExtArgs>
            result: $Utils.Optional<MyProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Project: number
    Item: number
    MyProject: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | UserCountOutputTypeCountProjectArgs
    Item?: boolean | UserCountOutputTypeCountItemArgs
    MyProject?: boolean | UserCountOutputTypeCountMyProjectArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMyProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyProjectWhereInput
  }


  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    Item: number
  }

  export type BoardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | BoardCountOutputTypeCountItemArgs
  }

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type ItemCategoryCountOutputType
   */

  export type ItemCategoryCountOutputType = {
    Item: number
  }

  export type ItemCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Item?: boolean | ItemCategoryCountOutputTypeCountItemArgs
  }

  // Custom InputTypes
  /**
   * ItemCategoryCountOutputType without action
   */
  export type ItemCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategoryCountOutputType
     */
    select?: ItemCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCategoryCountOutputType without action
   */
  export type ItemCategoryCountOutputTypeCountItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    ItemCategory: number
    MyProject: number
    Board: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ItemCategory?: boolean | ProjectCountOutputTypeCountItemCategoryArgs
    MyProject?: boolean | ProjectCountOutputTypeCountMyProjectArgs
    Board?: boolean | ProjectCountOutputTypeCountBoardArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountItemCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCategoryWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMyProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyProjectWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountBoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Project?: boolean | User$ProjectArgs<ExtArgs>
    Item?: boolean | User$ItemArgs<ExtArgs>
    MyProject?: boolean | User$MyProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Project?: boolean | User$ProjectArgs<ExtArgs>
    Item?: boolean | User$ItemArgs<ExtArgs>
    MyProject?: boolean | User$MyProjectArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Project: Prisma.$ProjectPayload<ExtArgs>[]
      Item: Prisma.$ItemPayload<ExtArgs>[]
      MyProject: Prisma.$MyProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Project<T extends User$ProjectArgs<ExtArgs> = {}>(args?: Subset<T, User$ProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    Item<T extends User$ItemArgs<ExtArgs> = {}>(args?: Subset<T, User$ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany"> | Null>
    MyProject<T extends User$MyProjectArgs<ExtArgs> = {}>(args?: Subset<T, User$MyProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Project
   */
  export type User$ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.Item
   */
  export type User$ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * User.MyProject
   */
  export type User$MyProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    where?: MyProjectWhereInput
    orderBy?: MyProjectOrderByWithRelationInput | MyProjectOrderByWithRelationInput[]
    cursor?: MyProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyProjectScalarFieldEnum | MyProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    title: string | null
    projectId: number | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    title: string | null
    projectId: number | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    title: number
    projectId: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    title?: true
    projectId?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    title?: true
    projectId?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    title?: true
    projectId?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithAggregationInput | BoardOrderByWithAggregationInput[]
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }

  export type BoardGroupByOutputType = {
    id: number
    title: string
    projectId: number
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    projectId?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    Item?: boolean | Board$ItemArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    projectId?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["board"]>

  export type BoardSelectScalar = {
    id?: boolean
    title?: boolean
    projectId?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    Item?: boolean | Board$ItemArgs<ExtArgs>
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $BoardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Board"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      Item: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      projectId: number
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["board"]>
    composites: {}
  }

  type BoardGetPayload<S extends boolean | null | undefined | BoardDefaultArgs> = $Result.GetResult<Prisma.$BoardPayload, S>

  type BoardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoardCountAggregateInputType | true
    }

  export interface BoardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Board'], meta: { name: 'Board' } }
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardFindManyArgs>(args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
     */
    create<T extends BoardCreateArgs>(args: SelectSubset<T, BoardCreateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardCreateManyArgs>(args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
     */
    delete<T extends BoardDeleteArgs>(args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardUpdateArgs>(args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDeleteManyArgs>(args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardUpdateManyArgs>(args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): Prisma.PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Board model
   */
  readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Item<T extends Board$ItemArgs<ExtArgs> = {}>(args?: Subset<T, Board$ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Board model
   */ 
  interface BoardFieldRefs {
    readonly id: FieldRef<"Board", 'Int'>
    readonly title: FieldRef<"Board", 'String'>
    readonly projectId: FieldRef<"Board", 'Int'>
    readonly color: FieldRef<"Board", 'String'>
    readonly createdAt: FieldRef<"Board", 'DateTime'>
    readonly updatedAt: FieldRef<"Board", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     */
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Board create
   */
  export type BoardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Board createManyAndReturn
   */
  export type BoardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Board update
   */
  export type BoardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput
  }

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }

  /**
   * Board delete
   */
  export type BoardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput
  }

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput
  }

  /**
   * Board.Item
   */
  export type Board$ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Board without action
   */
  export type BoardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    boardId: number | null
    userId: number | null
    itemCategoryId: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    boardId: number | null
    userId: number | null
    itemCategoryId: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    content: string | null
    description: string | null
    status: $Enums.ItemStatus | null
    boardId: number | null
    userId: number | null
    itemCategoryId: number | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    content: string | null
    description: string | null
    status: $Enums.ItemStatus | null
    boardId: number | null
    userId: number | null
    itemCategoryId: number | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    content: number
    description: number
    status: number
    boardId: number
    userId: number
    itemCategoryId: number
    start: number
    end: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    boardId?: true
    userId?: true
    itemCategoryId?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    boardId?: true
    userId?: true
    itemCategoryId?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    content?: true
    description?: true
    status?: true
    boardId?: true
    userId?: true
    itemCategoryId?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    content?: true
    description?: true
    status?: true
    boardId?: true
    userId?: true
    itemCategoryId?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    content?: true
    description?: true
    status?: true
    boardId?: true
    userId?: true
    itemCategoryId?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    content: string
    description: string | null
    status: $Enums.ItemStatus
    boardId: number | null
    userId: number | null
    itemCategoryId: number | null
    start: Date | null
    end: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    description?: boolean
    status?: boolean
    boardId?: boolean
    userId?: boolean
    itemCategoryId?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | Item$boardArgs<ExtArgs>
    user?: boolean | Item$userArgs<ExtArgs>
    itemCategory?: boolean | Item$itemCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    description?: boolean
    status?: boolean
    boardId?: boolean
    userId?: boolean
    itemCategoryId?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    board?: boolean | Item$boardArgs<ExtArgs>
    user?: boolean | Item$userArgs<ExtArgs>
    itemCategory?: boolean | Item$itemCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    content?: boolean
    description?: boolean
    status?: boolean
    boardId?: boolean
    userId?: boolean
    itemCategoryId?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | Item$boardArgs<ExtArgs>
    user?: boolean | Item$userArgs<ExtArgs>
    itemCategory?: boolean | Item$itemCategoryArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    board?: boolean | Item$boardArgs<ExtArgs>
    user?: boolean | Item$userArgs<ExtArgs>
    itemCategory?: boolean | Item$itemCategoryArgs<ExtArgs>
  }

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      board: Prisma.$BoardPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      itemCategory: Prisma.$ItemCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      description: string | null
      status: $Enums.ItemStatus
      boardId: number | null
      userId: number | null
      itemCategoryId: number | null
      start: Date | null
      end: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    board<T extends Item$boardArgs<ExtArgs> = {}>(args?: Subset<T, Item$boardArgs<ExtArgs>>): Prisma__BoardClient<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends Item$userArgs<ExtArgs> = {}>(args?: Subset<T, Item$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    itemCategory<T extends Item$itemCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Item$itemCategoryArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly content: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly status: FieldRef<"Item", 'ItemStatus'>
    readonly boardId: FieldRef<"Item", 'Int'>
    readonly userId: FieldRef<"Item", 'Int'>
    readonly itemCategoryId: FieldRef<"Item", 'Int'>
    readonly start: FieldRef<"Item", 'DateTime'>
    readonly end: FieldRef<"Item", 'DateTime'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }

  /**
   * Item.board
   */
  export type Item$boardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
  }

  /**
   * Item.user
   */
  export type Item$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Item.itemCategory
   */
  export type Item$itemCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    where?: ItemCategoryWhereInput
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model ItemCategory
   */

  export type AggregateItemCategory = {
    _count: ItemCategoryCountAggregateOutputType | null
    _avg: ItemCategoryAvgAggregateOutputType | null
    _sum: ItemCategorySumAggregateOutputType | null
    _min: ItemCategoryMinAggregateOutputType | null
    _max: ItemCategoryMaxAggregateOutputType | null
  }

  export type ItemCategoryAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ItemCategorySumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type ItemCategoryMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    category: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCategoryMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    category: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCategoryCountAggregateOutputType = {
    id: number
    projectId: number
    category: number
    color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemCategoryAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ItemCategorySumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type ItemCategoryMinAggregateInputType = {
    id?: true
    projectId?: true
    category?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCategoryMaxAggregateInputType = {
    id?: true
    projectId?: true
    category?: true
    color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCategoryCountAggregateInputType = {
    id?: true
    projectId?: true
    category?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCategory to aggregate.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemCategories
    **/
    _count?: true | ItemCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemCategoryMaxAggregateInputType
  }

  export type GetItemCategoryAggregateType<T extends ItemCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateItemCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemCategory[P]>
      : GetScalarType<T[P], AggregateItemCategory[P]>
  }




  export type ItemCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemCategoryWhereInput
    orderBy?: ItemCategoryOrderByWithAggregationInput | ItemCategoryOrderByWithAggregationInput[]
    by: ItemCategoryScalarFieldEnum[] | ItemCategoryScalarFieldEnum
    having?: ItemCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCategoryCountAggregateInputType | true
    _avg?: ItemCategoryAvgAggregateInputType
    _sum?: ItemCategorySumAggregateInputType
    _min?: ItemCategoryMinAggregateInputType
    _max?: ItemCategoryMaxAggregateInputType
  }

  export type ItemCategoryGroupByOutputType = {
    id: number
    projectId: number
    category: string
    color: string | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCategoryCountAggregateOutputType | null
    _avg: ItemCategoryAvgAggregateOutputType | null
    _sum: ItemCategorySumAggregateOutputType | null
    _min: ItemCategoryMinAggregateOutputType | null
    _max: ItemCategoryMaxAggregateOutputType | null
  }

  type GetItemCategoryGroupByPayload<T extends ItemCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ItemCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ItemCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    category?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    Item?: boolean | ItemCategory$ItemArgs<ExtArgs>
    _count?: boolean | ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCategory"]>

  export type ItemCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    category?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemCategory"]>

  export type ItemCategorySelectScalar = {
    id?: boolean
    projectId?: boolean
    category?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    Item?: boolean | ItemCategory$ItemArgs<ExtArgs>
    _count?: boolean | ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ItemCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemCategory"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      Item: Prisma.$ItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      category: string
      color: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["itemCategory"]>
    composites: {}
  }

  type ItemCategoryGetPayload<S extends boolean | null | undefined | ItemCategoryDefaultArgs> = $Result.GetResult<Prisma.$ItemCategoryPayload, S>

  type ItemCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCategoryCountAggregateInputType | true
    }

  export interface ItemCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemCategory'], meta: { name: 'ItemCategory' } }
    /**
     * Find zero or one ItemCategory that matches the filter.
     * @param {ItemCategoryFindUniqueArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemCategoryFindUniqueArgs>(args: SelectSubset<T, ItemCategoryFindUniqueArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ItemCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemCategoryFindUniqueOrThrowArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ItemCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindFirstArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemCategoryFindFirstArgs>(args?: SelectSubset<T, ItemCategoryFindFirstArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ItemCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindFirstOrThrowArgs} args - Arguments to find a ItemCategory
     * @example
     * // Get one ItemCategory
     * const itemCategory = await prisma.itemCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ItemCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemCategories
     * const itemCategories = await prisma.itemCategory.findMany()
     * 
     * // Get first 10 ItemCategories
     * const itemCategories = await prisma.itemCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemCategoryWithIdOnly = await prisma.itemCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemCategoryFindManyArgs>(args?: SelectSubset<T, ItemCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ItemCategory.
     * @param {ItemCategoryCreateArgs} args - Arguments to create a ItemCategory.
     * @example
     * // Create one ItemCategory
     * const ItemCategory = await prisma.itemCategory.create({
     *   data: {
     *     // ... data to create a ItemCategory
     *   }
     * })
     * 
     */
    create<T extends ItemCategoryCreateArgs>(args: SelectSubset<T, ItemCategoryCreateArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ItemCategories.
     * @param {ItemCategoryCreateManyArgs} args - Arguments to create many ItemCategories.
     * @example
     * // Create many ItemCategories
     * const itemCategory = await prisma.itemCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCategoryCreateManyArgs>(args?: SelectSubset<T, ItemCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ItemCategories and returns the data saved in the database.
     * @param {ItemCategoryCreateManyAndReturnArgs} args - Arguments to create many ItemCategories.
     * @example
     * // Create many ItemCategories
     * const itemCategory = await prisma.itemCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ItemCategories and only return the `id`
     * const itemCategoryWithIdOnly = await prisma.itemCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ItemCategory.
     * @param {ItemCategoryDeleteArgs} args - Arguments to delete one ItemCategory.
     * @example
     * // Delete one ItemCategory
     * const ItemCategory = await prisma.itemCategory.delete({
     *   where: {
     *     // ... filter to delete one ItemCategory
     *   }
     * })
     * 
     */
    delete<T extends ItemCategoryDeleteArgs>(args: SelectSubset<T, ItemCategoryDeleteArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ItemCategory.
     * @param {ItemCategoryUpdateArgs} args - Arguments to update one ItemCategory.
     * @example
     * // Update one ItemCategory
     * const itemCategory = await prisma.itemCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemCategoryUpdateArgs>(args: SelectSubset<T, ItemCategoryUpdateArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ItemCategories.
     * @param {ItemCategoryDeleteManyArgs} args - Arguments to filter ItemCategories to delete.
     * @example
     * // Delete a few ItemCategories
     * const { count } = await prisma.itemCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemCategoryDeleteManyArgs>(args?: SelectSubset<T, ItemCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemCategories
     * const itemCategory = await prisma.itemCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemCategoryUpdateManyArgs>(args: SelectSubset<T, ItemCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemCategory.
     * @param {ItemCategoryUpsertArgs} args - Arguments to update or create a ItemCategory.
     * @example
     * // Update or create a ItemCategory
     * const itemCategory = await prisma.itemCategory.upsert({
     *   create: {
     *     // ... data to create a ItemCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemCategory we want to update
     *   }
     * })
     */
    upsert<T extends ItemCategoryUpsertArgs>(args: SelectSubset<T, ItemCategoryUpsertArgs<ExtArgs>>): Prisma__ItemCategoryClient<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ItemCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryCountArgs} args - Arguments to filter ItemCategories to count.
     * @example
     * // Count the number of ItemCategories
     * const count = await prisma.itemCategory.count({
     *   where: {
     *     // ... the filter for the ItemCategories we want to count
     *   }
     * })
    **/
    count<T extends ItemCategoryCountArgs>(
      args?: Subset<T, ItemCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemCategoryAggregateArgs>(args: Subset<T, ItemCategoryAggregateArgs>): Prisma.PrismaPromise<GetItemCategoryAggregateType<T>>

    /**
     * Group by ItemCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ItemCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemCategory model
   */
  readonly fields: ItemCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Item<T extends ItemCategory$ItemArgs<ExtArgs> = {}>(args?: Subset<T, ItemCategory$ItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ItemCategory model
   */ 
  interface ItemCategoryFieldRefs {
    readonly id: FieldRef<"ItemCategory", 'Int'>
    readonly projectId: FieldRef<"ItemCategory", 'Int'>
    readonly category: FieldRef<"ItemCategory", 'String'>
    readonly color: FieldRef<"ItemCategory", 'String'>
    readonly createdAt: FieldRef<"ItemCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ItemCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ItemCategory findUnique
   */
  export type ItemCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory findUniqueOrThrow
   */
  export type ItemCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory findFirst
   */
  export type ItemCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCategories.
     */
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory findFirstOrThrow
   */
  export type ItemCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategory to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemCategories.
     */
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory findMany
   */
  export type ItemCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemCategories to fetch.
     */
    where?: ItemCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemCategories to fetch.
     */
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemCategories.
     */
    cursor?: ItemCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemCategories.
     */
    skip?: number
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * ItemCategory create
   */
  export type ItemCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemCategory.
     */
    data: XOR<ItemCategoryCreateInput, ItemCategoryUncheckedCreateInput>
  }

  /**
   * ItemCategory createMany
   */
  export type ItemCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemCategories.
     */
    data: ItemCategoryCreateManyInput | ItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ItemCategory createManyAndReturn
   */
  export type ItemCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ItemCategories.
     */
    data: ItemCategoryCreateManyInput | ItemCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ItemCategory update
   */
  export type ItemCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemCategory.
     */
    data: XOR<ItemCategoryUpdateInput, ItemCategoryUncheckedUpdateInput>
    /**
     * Choose, which ItemCategory to update.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory updateMany
   */
  export type ItemCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemCategories.
     */
    data: XOR<ItemCategoryUpdateManyMutationInput, ItemCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemCategories to update
     */
    where?: ItemCategoryWhereInput
  }

  /**
   * ItemCategory upsert
   */
  export type ItemCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemCategory to update in case it exists.
     */
    where: ItemCategoryWhereUniqueInput
    /**
     * In case the ItemCategory found by the `where` argument doesn't exist, create a new ItemCategory with this data.
     */
    create: XOR<ItemCategoryCreateInput, ItemCategoryUncheckedCreateInput>
    /**
     * In case the ItemCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemCategoryUpdateInput, ItemCategoryUncheckedUpdateInput>
  }

  /**
   * ItemCategory delete
   */
  export type ItemCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    /**
     * Filter which ItemCategory to delete.
     */
    where: ItemCategoryWhereUniqueInput
  }

  /**
   * ItemCategory deleteMany
   */
  export type ItemCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemCategories to delete
     */
    where?: ItemCategoryWhereInput
  }

  /**
   * ItemCategory.Item
   */
  export type ItemCategory$ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    cursor?: ItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * ItemCategory without action
   */
  export type ItemCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    authorId: number | null
    projectScope: $Enums.ProjectScope | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    authorId: number | null
    projectScope: $Enums.ProjectScope | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    authorId: number
    projectScope: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    authorId?: true
    projectScope?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    authorId?: true
    projectScope?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    authorId?: true
    projectScope?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    title: string
    description: string
    authorId: number
    projectScope: $Enums.ProjectScope
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    authorId?: boolean
    projectScope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ItemCategory?: boolean | Project$ItemCategoryArgs<ExtArgs>
    MyProject?: boolean | Project$MyProjectArgs<ExtArgs>
    Board?: boolean | Project$BoardArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    authorId?: boolean
    projectScope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    authorId?: boolean
    projectScope?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ItemCategory?: boolean | Project$ItemCategoryArgs<ExtArgs>
    MyProject?: boolean | Project$MyProjectArgs<ExtArgs>
    Board?: boolean | Project$BoardArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ItemCategory: Prisma.$ItemCategoryPayload<ExtArgs>[]
      MyProject: Prisma.$MyProjectPayload<ExtArgs>[]
      Board: Prisma.$BoardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      authorId: number
      projectScope: $Enums.ProjectScope
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    ItemCategory<T extends Project$ItemCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Project$ItemCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemCategoryPayload<ExtArgs>, T, "findMany"> | Null>
    MyProject<T extends Project$MyProjectArgs<ExtArgs> = {}>(args?: Subset<T, Project$MyProjectArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "findMany"> | Null>
    Board<T extends Project$BoardArgs<ExtArgs> = {}>(args?: Subset<T, Project$BoardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly authorId: FieldRef<"Project", 'Int'>
    readonly projectScope: FieldRef<"Project", 'ProjectScope'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.ItemCategory
   */
  export type Project$ItemCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCategory
     */
    select?: ItemCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemCategoryInclude<ExtArgs> | null
    where?: ItemCategoryWhereInput
    orderBy?: ItemCategoryOrderByWithRelationInput | ItemCategoryOrderByWithRelationInput[]
    cursor?: ItemCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemCategoryScalarFieldEnum | ItemCategoryScalarFieldEnum[]
  }

  /**
   * Project.MyProject
   */
  export type Project$MyProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    where?: MyProjectWhereInput
    orderBy?: MyProjectOrderByWithRelationInput | MyProjectOrderByWithRelationInput[]
    cursor?: MyProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MyProjectScalarFieldEnum | MyProjectScalarFieldEnum[]
  }

  /**
   * Project.Board
   */
  export type Project$BoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null
    where?: BoardWhereInput
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[]
    cursor?: BoardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model MyProject
   */

  export type AggregateMyProject = {
    _count: MyProjectCountAggregateOutputType | null
    _avg: MyProjectAvgAggregateOutputType | null
    _sum: MyProjectSumAggregateOutputType | null
    _min: MyProjectMinAggregateOutputType | null
    _max: MyProjectMaxAggregateOutputType | null
  }

  export type MyProjectAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
  }

  export type MyProjectSumAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
  }

  export type MyProjectMinAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
    role: $Enums.ProjectRole | null
    isFavorite: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MyProjectMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    projectId: number | null
    role: $Enums.ProjectRole | null
    isFavorite: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MyProjectCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    role: number
    isFavorite: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MyProjectAvgAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
  }

  export type MyProjectSumAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
  }

  export type MyProjectMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    role?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MyProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    role?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MyProjectCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    role?: true
    isFavorite?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MyProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyProject to aggregate.
     */
    where?: MyProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyProjects to fetch.
     */
    orderBy?: MyProjectOrderByWithRelationInput | MyProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MyProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MyProjects
    **/
    _count?: true | MyProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MyProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MyProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MyProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MyProjectMaxAggregateInputType
  }

  export type GetMyProjectAggregateType<T extends MyProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateMyProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMyProject[P]>
      : GetScalarType<T[P], AggregateMyProject[P]>
  }




  export type MyProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MyProjectWhereInput
    orderBy?: MyProjectOrderByWithAggregationInput | MyProjectOrderByWithAggregationInput[]
    by: MyProjectScalarFieldEnum[] | MyProjectScalarFieldEnum
    having?: MyProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MyProjectCountAggregateInputType | true
    _avg?: MyProjectAvgAggregateInputType
    _sum?: MyProjectSumAggregateInputType
    _min?: MyProjectMinAggregateInputType
    _max?: MyProjectMaxAggregateInputType
  }

  export type MyProjectGroupByOutputType = {
    id: number
    userId: number
    projectId: number
    role: $Enums.ProjectRole
    isFavorite: boolean
    createdAt: Date
    updatedAt: Date
    _count: MyProjectCountAggregateOutputType | null
    _avg: MyProjectAvgAggregateOutputType | null
    _sum: MyProjectSumAggregateOutputType | null
    _min: MyProjectMinAggregateOutputType | null
    _max: MyProjectMaxAggregateOutputType | null
  }

  type GetMyProjectGroupByPayload<T extends MyProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MyProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MyProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MyProjectGroupByOutputType[P]>
            : GetScalarType<T[P], MyProjectGroupByOutputType[P]>
        }
      >
    >


  export type MyProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myProject"]>

  export type MyProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["myProject"]>

  export type MyProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
    role?: boolean
    isFavorite?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MyProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MyProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MyProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MyProject"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      projectId: number
      role: $Enums.ProjectRole
      isFavorite: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["myProject"]>
    composites: {}
  }

  type MyProjectGetPayload<S extends boolean | null | undefined | MyProjectDefaultArgs> = $Result.GetResult<Prisma.$MyProjectPayload, S>

  type MyProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MyProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MyProjectCountAggregateInputType | true
    }

  export interface MyProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MyProject'], meta: { name: 'MyProject' } }
    /**
     * Find zero or one MyProject that matches the filter.
     * @param {MyProjectFindUniqueArgs} args - Arguments to find a MyProject
     * @example
     * // Get one MyProject
     * const myProject = await prisma.myProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MyProjectFindUniqueArgs>(args: SelectSubset<T, MyProjectFindUniqueArgs<ExtArgs>>): Prisma__MyProjectClient<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MyProject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MyProjectFindUniqueOrThrowArgs} args - Arguments to find a MyProject
     * @example
     * // Get one MyProject
     * const myProject = await prisma.myProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MyProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, MyProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MyProjectClient<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MyProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyProjectFindFirstArgs} args - Arguments to find a MyProject
     * @example
     * // Get one MyProject
     * const myProject = await prisma.myProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MyProjectFindFirstArgs>(args?: SelectSubset<T, MyProjectFindFirstArgs<ExtArgs>>): Prisma__MyProjectClient<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MyProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyProjectFindFirstOrThrowArgs} args - Arguments to find a MyProject
     * @example
     * // Get one MyProject
     * const myProject = await prisma.myProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MyProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, MyProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__MyProjectClient<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MyProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MyProjects
     * const myProjects = await prisma.myProject.findMany()
     * 
     * // Get first 10 MyProjects
     * const myProjects = await prisma.myProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const myProjectWithIdOnly = await prisma.myProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MyProjectFindManyArgs>(args?: SelectSubset<T, MyProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MyProject.
     * @param {MyProjectCreateArgs} args - Arguments to create a MyProject.
     * @example
     * // Create one MyProject
     * const MyProject = await prisma.myProject.create({
     *   data: {
     *     // ... data to create a MyProject
     *   }
     * })
     * 
     */
    create<T extends MyProjectCreateArgs>(args: SelectSubset<T, MyProjectCreateArgs<ExtArgs>>): Prisma__MyProjectClient<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MyProjects.
     * @param {MyProjectCreateManyArgs} args - Arguments to create many MyProjects.
     * @example
     * // Create many MyProjects
     * const myProject = await prisma.myProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MyProjectCreateManyArgs>(args?: SelectSubset<T, MyProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MyProjects and returns the data saved in the database.
     * @param {MyProjectCreateManyAndReturnArgs} args - Arguments to create many MyProjects.
     * @example
     * // Create many MyProjects
     * const myProject = await prisma.myProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MyProjects and only return the `id`
     * const myProjectWithIdOnly = await prisma.myProject.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MyProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, MyProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MyProject.
     * @param {MyProjectDeleteArgs} args - Arguments to delete one MyProject.
     * @example
     * // Delete one MyProject
     * const MyProject = await prisma.myProject.delete({
     *   where: {
     *     // ... filter to delete one MyProject
     *   }
     * })
     * 
     */
    delete<T extends MyProjectDeleteArgs>(args: SelectSubset<T, MyProjectDeleteArgs<ExtArgs>>): Prisma__MyProjectClient<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MyProject.
     * @param {MyProjectUpdateArgs} args - Arguments to update one MyProject.
     * @example
     * // Update one MyProject
     * const myProject = await prisma.myProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MyProjectUpdateArgs>(args: SelectSubset<T, MyProjectUpdateArgs<ExtArgs>>): Prisma__MyProjectClient<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MyProjects.
     * @param {MyProjectDeleteManyArgs} args - Arguments to filter MyProjects to delete.
     * @example
     * // Delete a few MyProjects
     * const { count } = await prisma.myProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MyProjectDeleteManyArgs>(args?: SelectSubset<T, MyProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MyProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MyProjects
     * const myProject = await prisma.myProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MyProjectUpdateManyArgs>(args: SelectSubset<T, MyProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MyProject.
     * @param {MyProjectUpsertArgs} args - Arguments to update or create a MyProject.
     * @example
     * // Update or create a MyProject
     * const myProject = await prisma.myProject.upsert({
     *   create: {
     *     // ... data to create a MyProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MyProject we want to update
     *   }
     * })
     */
    upsert<T extends MyProjectUpsertArgs>(args: SelectSubset<T, MyProjectUpsertArgs<ExtArgs>>): Prisma__MyProjectClient<$Result.GetResult<Prisma.$MyProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MyProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyProjectCountArgs} args - Arguments to filter MyProjects to count.
     * @example
     * // Count the number of MyProjects
     * const count = await prisma.myProject.count({
     *   where: {
     *     // ... the filter for the MyProjects we want to count
     *   }
     * })
    **/
    count<T extends MyProjectCountArgs>(
      args?: Subset<T, MyProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MyProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MyProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MyProjectAggregateArgs>(args: Subset<T, MyProjectAggregateArgs>): Prisma.PrismaPromise<GetMyProjectAggregateType<T>>

    /**
     * Group by MyProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MyProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MyProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MyProjectGroupByArgs['orderBy'] }
        : { orderBy?: MyProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MyProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMyProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MyProject model
   */
  readonly fields: MyProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MyProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MyProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MyProject model
   */ 
  interface MyProjectFieldRefs {
    readonly id: FieldRef<"MyProject", 'Int'>
    readonly userId: FieldRef<"MyProject", 'Int'>
    readonly projectId: FieldRef<"MyProject", 'Int'>
    readonly role: FieldRef<"MyProject", 'ProjectRole'>
    readonly isFavorite: FieldRef<"MyProject", 'Boolean'>
    readonly createdAt: FieldRef<"MyProject", 'DateTime'>
    readonly updatedAt: FieldRef<"MyProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MyProject findUnique
   */
  export type MyProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * Filter, which MyProject to fetch.
     */
    where: MyProjectWhereUniqueInput
  }

  /**
   * MyProject findUniqueOrThrow
   */
  export type MyProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * Filter, which MyProject to fetch.
     */
    where: MyProjectWhereUniqueInput
  }

  /**
   * MyProject findFirst
   */
  export type MyProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * Filter, which MyProject to fetch.
     */
    where?: MyProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyProjects to fetch.
     */
    orderBy?: MyProjectOrderByWithRelationInput | MyProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyProjects.
     */
    cursor?: MyProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyProjects.
     */
    distinct?: MyProjectScalarFieldEnum | MyProjectScalarFieldEnum[]
  }

  /**
   * MyProject findFirstOrThrow
   */
  export type MyProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * Filter, which MyProject to fetch.
     */
    where?: MyProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyProjects to fetch.
     */
    orderBy?: MyProjectOrderByWithRelationInput | MyProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MyProjects.
     */
    cursor?: MyProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MyProjects.
     */
    distinct?: MyProjectScalarFieldEnum | MyProjectScalarFieldEnum[]
  }

  /**
   * MyProject findMany
   */
  export type MyProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * Filter, which MyProjects to fetch.
     */
    where?: MyProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MyProjects to fetch.
     */
    orderBy?: MyProjectOrderByWithRelationInput | MyProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MyProjects.
     */
    cursor?: MyProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MyProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MyProjects.
     */
    skip?: number
    distinct?: MyProjectScalarFieldEnum | MyProjectScalarFieldEnum[]
  }

  /**
   * MyProject create
   */
  export type MyProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a MyProject.
     */
    data: XOR<MyProjectCreateInput, MyProjectUncheckedCreateInput>
  }

  /**
   * MyProject createMany
   */
  export type MyProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MyProjects.
     */
    data: MyProjectCreateManyInput | MyProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MyProject createManyAndReturn
   */
  export type MyProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MyProjects.
     */
    data: MyProjectCreateManyInput | MyProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MyProject update
   */
  export type MyProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a MyProject.
     */
    data: XOR<MyProjectUpdateInput, MyProjectUncheckedUpdateInput>
    /**
     * Choose, which MyProject to update.
     */
    where: MyProjectWhereUniqueInput
  }

  /**
   * MyProject updateMany
   */
  export type MyProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MyProjects.
     */
    data: XOR<MyProjectUpdateManyMutationInput, MyProjectUncheckedUpdateManyInput>
    /**
     * Filter which MyProjects to update
     */
    where?: MyProjectWhereInput
  }

  /**
   * MyProject upsert
   */
  export type MyProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the MyProject to update in case it exists.
     */
    where: MyProjectWhereUniqueInput
    /**
     * In case the MyProject found by the `where` argument doesn't exist, create a new MyProject with this data.
     */
    create: XOR<MyProjectCreateInput, MyProjectUncheckedCreateInput>
    /**
     * In case the MyProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MyProjectUpdateInput, MyProjectUncheckedUpdateInput>
  }

  /**
   * MyProject delete
   */
  export type MyProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
    /**
     * Filter which MyProject to delete.
     */
    where: MyProjectWhereUniqueInput
  }

  /**
   * MyProject deleteMany
   */
  export type MyProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MyProjects to delete
     */
    where?: MyProjectWhereInput
  }

  /**
   * MyProject without action
   */
  export type MyProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MyProject
     */
    select?: MyProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MyProjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    projectId: 'projectId',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    content: 'content',
    description: 'description',
    status: 'status',
    boardId: 'boardId',
    userId: 'userId',
    itemCategoryId: 'itemCategoryId',
    start: 'start',
    end: 'end',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemCategoryScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    category: 'category',
    color: 'color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemCategoryScalarFieldEnum = (typeof ItemCategoryScalarFieldEnum)[keyof typeof ItemCategoryScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    authorId: 'authorId',
    projectScope: 'projectScope',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const MyProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    role: 'role',
    isFavorite: 'isFavorite',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MyProjectScalarFieldEnum = (typeof MyProjectScalarFieldEnum)[keyof typeof MyProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ItemStatus'
   */
  export type EnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus'>
    


  /**
   * Reference to a field of type 'ItemStatus[]'
   */
  export type ListEnumItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemStatus[]'>
    


  /**
   * Reference to a field of type 'ProjectScope'
   */
  export type EnumProjectScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectScope'>
    


  /**
   * Reference to a field of type 'ProjectScope[]'
   */
  export type ListEnumProjectScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectScope[]'>
    


  /**
   * Reference to a field of type 'ProjectRole'
   */
  export type EnumProjectRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRole'>
    


  /**
   * Reference to a field of type 'ProjectRole[]'
   */
  export type ListEnumProjectRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Project?: ProjectListRelationFilter
    Item?: ItemListRelationFilter
    MyProject?: MyProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Project?: ProjectOrderByRelationAggregateInput
    Item?: ItemOrderByRelationAggregateInput
    MyProject?: MyProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Project?: ProjectListRelationFilter
    Item?: ItemListRelationFilter
    MyProject?: MyProjectListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    id?: IntFilter<"Board"> | number
    title?: StringFilter<"Board"> | string
    projectId?: IntFilter<"Board"> | number
    color?: StringNullableFilter<"Board"> | string | null
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    Item?: ItemListRelationFilter
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    projectId?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    Item?: ItemOrderByRelationAggregateInput
  }

  export type BoardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoardWhereInput | BoardWhereInput[]
    OR?: BoardWhereInput[]
    NOT?: BoardWhereInput | BoardWhereInput[]
    title?: StringFilter<"Board"> | string
    projectId?: IntFilter<"Board"> | number
    color?: StringNullableFilter<"Board"> | string | null
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    Item?: ItemListRelationFilter
  }, "id">

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    projectId?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    OR?: BoardScalarWhereWithAggregatesInput[]
    NOT?: BoardScalarWhereWithAggregatesInput | BoardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Board"> | number
    title?: StringWithAggregatesFilter<"Board"> | string
    projectId?: IntWithAggregatesFilter<"Board"> | number
    color?: StringNullableWithAggregatesFilter<"Board"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Board"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    content?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    boardId?: IntNullableFilter<"Item"> | number | null
    userId?: IntNullableFilter<"Item"> | number | null
    itemCategoryId?: IntNullableFilter<"Item"> | number | null
    start?: DateTimeNullableFilter<"Item"> | Date | string | null
    end?: DateTimeNullableFilter<"Item"> | Date | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    board?: XOR<BoardNullableRelationFilter, BoardWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    itemCategory?: XOR<ItemCategoryNullableRelationFilter, ItemCategoryWhereInput> | null
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    boardId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    itemCategoryId?: SortOrderInput | SortOrder
    start?: SortOrderInput | SortOrder
    end?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    board?: BoardOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    itemCategory?: ItemCategoryOrderByWithRelationInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    content?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    boardId?: IntNullableFilter<"Item"> | number | null
    userId?: IntNullableFilter<"Item"> | number | null
    itemCategoryId?: IntNullableFilter<"Item"> | number | null
    start?: DateTimeNullableFilter<"Item"> | Date | string | null
    end?: DateTimeNullableFilter<"Item"> | Date | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    board?: XOR<BoardNullableRelationFilter, BoardWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    itemCategory?: XOR<ItemCategoryNullableRelationFilter, ItemCategoryWhereInput> | null
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    boardId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    itemCategoryId?: SortOrderInput | SortOrder
    start?: SortOrderInput | SortOrder
    end?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    content?: StringWithAggregatesFilter<"Item"> | string
    description?: StringNullableWithAggregatesFilter<"Item"> | string | null
    status?: EnumItemStatusWithAggregatesFilter<"Item"> | $Enums.ItemStatus
    boardId?: IntNullableWithAggregatesFilter<"Item"> | number | null
    userId?: IntNullableWithAggregatesFilter<"Item"> | number | null
    itemCategoryId?: IntNullableWithAggregatesFilter<"Item"> | number | null
    start?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    end?: DateTimeNullableWithAggregatesFilter<"Item"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type ItemCategoryWhereInput = {
    AND?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    OR?: ItemCategoryWhereInput[]
    NOT?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    id?: IntFilter<"ItemCategory"> | number
    projectId?: IntFilter<"ItemCategory"> | number
    category?: StringFilter<"ItemCategory"> | string
    color?: StringNullableFilter<"ItemCategory"> | string | null
    createdAt?: DateTimeFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ItemCategory"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    Item?: ItemListRelationFilter
  }

  export type ItemCategoryOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    Item?: ItemOrderByRelationAggregateInput
  }

  export type ItemCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    OR?: ItemCategoryWhereInput[]
    NOT?: ItemCategoryWhereInput | ItemCategoryWhereInput[]
    projectId?: IntFilter<"ItemCategory"> | number
    category?: StringFilter<"ItemCategory"> | string
    color?: StringNullableFilter<"ItemCategory"> | string | null
    createdAt?: DateTimeFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ItemCategory"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    Item?: ItemListRelationFilter
  }, "id">

  export type ItemCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCategoryCountOrderByAggregateInput
    _avg?: ItemCategoryAvgOrderByAggregateInput
    _max?: ItemCategoryMaxOrderByAggregateInput
    _min?: ItemCategoryMinOrderByAggregateInput
    _sum?: ItemCategorySumOrderByAggregateInput
  }

  export type ItemCategoryScalarWhereWithAggregatesInput = {
    AND?: ItemCategoryScalarWhereWithAggregatesInput | ItemCategoryScalarWhereWithAggregatesInput[]
    OR?: ItemCategoryScalarWhereWithAggregatesInput[]
    NOT?: ItemCategoryScalarWhereWithAggregatesInput | ItemCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemCategory"> | number
    projectId?: IntWithAggregatesFilter<"ItemCategory"> | number
    category?: StringWithAggregatesFilter<"ItemCategory"> | string
    color?: StringNullableWithAggregatesFilter<"ItemCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ItemCategory"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    authorId?: IntFilter<"Project"> | number
    projectScope?: EnumProjectScopeFilter<"Project"> | $Enums.ProjectScope
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    ItemCategory?: ItemCategoryListRelationFilter
    MyProject?: MyProjectListRelationFilter
    Board?: BoardListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    projectScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    ItemCategory?: ItemCategoryOrderByRelationAggregateInput
    MyProject?: MyProjectOrderByRelationAggregateInput
    Board?: BoardOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    authorId?: IntFilter<"Project"> | number
    projectScope?: EnumProjectScopeFilter<"Project"> | $Enums.ProjectScope
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    ItemCategory?: ItemCategoryListRelationFilter
    MyProject?: MyProjectListRelationFilter
    Board?: BoardListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    projectScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    authorId?: IntWithAggregatesFilter<"Project"> | number
    projectScope?: EnumProjectScopeWithAggregatesFilter<"Project"> | $Enums.ProjectScope
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type MyProjectWhereInput = {
    AND?: MyProjectWhereInput | MyProjectWhereInput[]
    OR?: MyProjectWhereInput[]
    NOT?: MyProjectWhereInput | MyProjectWhereInput[]
    id?: IntFilter<"MyProject"> | number
    userId?: IntFilter<"MyProject"> | number
    projectId?: IntFilter<"MyProject"> | number
    role?: EnumProjectRoleFilter<"MyProject"> | $Enums.ProjectRole
    isFavorite?: BoolFilter<"MyProject"> | boolean
    createdAt?: DateTimeFilter<"MyProject"> | Date | string
    updatedAt?: DateTimeFilter<"MyProject"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type MyProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type MyProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MyProjectWhereInput | MyProjectWhereInput[]
    OR?: MyProjectWhereInput[]
    NOT?: MyProjectWhereInput | MyProjectWhereInput[]
    userId?: IntFilter<"MyProject"> | number
    projectId?: IntFilter<"MyProject"> | number
    role?: EnumProjectRoleFilter<"MyProject"> | $Enums.ProjectRole
    isFavorite?: BoolFilter<"MyProject"> | boolean
    createdAt?: DateTimeFilter<"MyProject"> | Date | string
    updatedAt?: DateTimeFilter<"MyProject"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id">

  export type MyProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MyProjectCountOrderByAggregateInput
    _avg?: MyProjectAvgOrderByAggregateInput
    _max?: MyProjectMaxOrderByAggregateInput
    _min?: MyProjectMinOrderByAggregateInput
    _sum?: MyProjectSumOrderByAggregateInput
  }

  export type MyProjectScalarWhereWithAggregatesInput = {
    AND?: MyProjectScalarWhereWithAggregatesInput | MyProjectScalarWhereWithAggregatesInput[]
    OR?: MyProjectScalarWhereWithAggregatesInput[]
    NOT?: MyProjectScalarWhereWithAggregatesInput | MyProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MyProject"> | number
    userId?: IntWithAggregatesFilter<"MyProject"> | number
    projectId?: IntWithAggregatesFilter<"MyProject"> | number
    role?: EnumProjectRoleWithAggregatesFilter<"MyProject"> | $Enums.ProjectRole
    isFavorite?: BoolWithAggregatesFilter<"MyProject"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MyProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MyProject"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectCreateNestedManyWithoutUserInput
    Item?: ItemCreateNestedManyWithoutUserInput
    MyProject?: MyProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    Item?: ItemUncheckedCreateNestedManyWithoutUserInput
    MyProject?: MyProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateManyWithoutUserNestedInput
    Item?: ItemUpdateManyWithoutUserNestedInput
    MyProject?: MyProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    Item?: ItemUncheckedUpdateManyWithoutUserNestedInput
    MyProject?: MyProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardCreateInput = {
    title: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBoardInput
    Item?: ItemCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    title: string
    projectId: number
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBoardNestedInput
    Item?: ItemUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardCreateManyInput = {
    id?: number
    title: string
    projectId: number
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    board?: BoardCreateNestedOneWithoutItemInput
    user?: UserCreateNestedOneWithoutItemInput
    itemCategory?: ItemCategoryCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    boardId?: number | null
    userId?: number | null
    itemCategoryId?: number | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneWithoutItemNestedInput
    user?: UserUpdateOneWithoutItemNestedInput
    itemCategory?: ItemCategoryUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    boardId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyInput = {
    id?: number
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    boardId?: number | null
    userId?: number | null
    itemCategoryId?: number | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    boardId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryCreateInput = {
    category: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutItemCategoryInput
    Item?: ItemCreateNestedManyWithoutItemCategoryInput
  }

  export type ItemCategoryUncheckedCreateInput = {
    id?: number
    projectId: number
    category: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutItemCategoryInput
  }

  export type ItemCategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutItemCategoryNestedInput
    Item?: ItemUpdateManyWithoutItemCategoryNestedInput
  }

  export type ItemCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutItemCategoryNestedInput
  }

  export type ItemCategoryCreateManyInput = {
    id?: number
    projectId: number
    category: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    title: string
    description: string
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectInput
    ItemCategory?: ItemCategoryCreateNestedManyWithoutProjectInput
    MyProject?: MyProjectCreateNestedManyWithoutProjectInput
    Board?: BoardCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    authorId: number
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    ItemCategory?: ItemCategoryUncheckedCreateNestedManyWithoutProjectInput
    MyProject?: MyProjectUncheckedCreateNestedManyWithoutProjectInput
    Board?: BoardUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectNestedInput
    ItemCategory?: ItemCategoryUpdateManyWithoutProjectNestedInput
    MyProject?: MyProjectUpdateManyWithoutProjectNestedInput
    Board?: BoardUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemCategory?: ItemCategoryUncheckedUpdateManyWithoutProjectNestedInput
    MyProject?: MyProjectUncheckedUpdateManyWithoutProjectNestedInput
    Board?: BoardUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    title: string
    description: string
    authorId: number
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyProjectCreateInput = {
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMyProjectInput
    project: ProjectCreateNestedOneWithoutMyProjectInput
  }

  export type MyProjectUncheckedCreateInput = {
    id?: number
    userId: number
    projectId: number
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyProjectUpdateInput = {
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMyProjectNestedInput
    project?: ProjectUpdateOneRequiredWithoutMyProjectNestedInput
  }

  export type MyProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyProjectCreateManyInput = {
    id?: number
    userId: number
    projectId: number
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyProjectUpdateManyMutationInput = {
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ItemListRelationFilter = {
    every?: ItemWhereInput
    some?: ItemWhereInput
    none?: ItemWhereInput
  }

  export type MyProjectListRelationFilter = {
    every?: MyProjectWhereInput
    some?: MyProjectWhereInput
    none?: MyProjectWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MyProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    projectId?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    projectId?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    projectId?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoardNullableRelationFilter = {
    is?: BoardWhereInput | null
    isNot?: BoardWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ItemCategoryNullableRelationFilter = {
    is?: ItemCategoryWhereInput | null
    isNot?: ItemCategoryWhereInput | null
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    description?: SortOrder
    status?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    itemCategoryId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    itemCategoryId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    description?: SortOrder
    status?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    itemCategoryId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    description?: SortOrder
    status?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    itemCategoryId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    boardId?: SortOrder
    userId?: SortOrder
    itemCategoryId?: SortOrder
  }

  export type EnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ItemCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type ItemCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    category?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCategorySumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type EnumProjectScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectScope | EnumProjectScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectScope[] | ListEnumProjectScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectScope[] | ListEnumProjectScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectScopeFilter<$PrismaModel> | $Enums.ProjectScope
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ItemCategoryListRelationFilter = {
    every?: ItemCategoryWhereInput
    some?: ItemCategoryWhereInput
    none?: ItemCategoryWhereInput
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type ItemCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    projectScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    projectScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    authorId?: SortOrder
    projectScope?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type EnumProjectScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectScope | EnumProjectScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectScope[] | ListEnumProjectScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectScope[] | ListEnumProjectScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectScopeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectScopeFilter<$PrismaModel>
    _max?: NestedEnumProjectScopeFilter<$PrismaModel>
  }

  export type EnumProjectRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleFilter<$PrismaModel> | $Enums.ProjectRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MyProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MyProjectAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type MyProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MyProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    role?: SortOrder
    isFavorite?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MyProjectSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type EnumProjectRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRoleFilter<$PrismaModel>
    _max?: NestedEnumProjectRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ItemCreateNestedManyWithoutUserInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type MyProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<MyProjectCreateWithoutUserInput, MyProjectUncheckedCreateWithoutUserInput> | MyProjectCreateWithoutUserInput[] | MyProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyProjectCreateOrConnectWithoutUserInput | MyProjectCreateOrConnectWithoutUserInput[]
    createMany?: MyProjectCreateManyUserInputEnvelope
    connect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type MyProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MyProjectCreateWithoutUserInput, MyProjectUncheckedCreateWithoutUserInput> | MyProjectCreateWithoutUserInput[] | MyProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyProjectCreateOrConnectWithoutUserInput | MyProjectCreateOrConnectWithoutUserInput[]
    createMany?: MyProjectCreateManyUserInputEnvelope
    connect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUserInput | ItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUserInput | ItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUserInput | ItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type MyProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<MyProjectCreateWithoutUserInput, MyProjectUncheckedCreateWithoutUserInput> | MyProjectCreateWithoutUserInput[] | MyProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyProjectCreateOrConnectWithoutUserInput | MyProjectCreateOrConnectWithoutUserInput[]
    upsert?: MyProjectUpsertWithWhereUniqueWithoutUserInput | MyProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MyProjectCreateManyUserInputEnvelope
    set?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    disconnect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    delete?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    connect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    update?: MyProjectUpdateWithWhereUniqueWithoutUserInput | MyProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MyProjectUpdateManyWithWhereWithoutUserInput | MyProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MyProjectScalarWhereInput | MyProjectScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput> | ItemCreateWithoutUserInput[] | ItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutUserInput | ItemCreateOrConnectWithoutUserInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutUserInput | ItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ItemCreateManyUserInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutUserInput | ItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutUserInput | ItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type MyProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MyProjectCreateWithoutUserInput, MyProjectUncheckedCreateWithoutUserInput> | MyProjectCreateWithoutUserInput[] | MyProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MyProjectCreateOrConnectWithoutUserInput | MyProjectCreateOrConnectWithoutUserInput[]
    upsert?: MyProjectUpsertWithWhereUniqueWithoutUserInput | MyProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MyProjectCreateManyUserInputEnvelope
    set?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    disconnect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    delete?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    connect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    update?: MyProjectUpdateWithWhereUniqueWithoutUserInput | MyProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MyProjectUpdateManyWithWhereWithoutUserInput | MyProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MyProjectScalarWhereInput | MyProjectScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutBoardInput = {
    create?: XOR<ProjectCreateWithoutBoardInput, ProjectUncheckedCreateWithoutBoardInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBoardInput
    connect?: ProjectWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutBoardInput = {
    create?: XOR<ItemCreateWithoutBoardInput, ItemUncheckedCreateWithoutBoardInput> | ItemCreateWithoutBoardInput[] | ItemUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBoardInput | ItemCreateOrConnectWithoutBoardInput[]
    createMany?: ItemCreateManyBoardInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<ItemCreateWithoutBoardInput, ItemUncheckedCreateWithoutBoardInput> | ItemCreateWithoutBoardInput[] | ItemUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBoardInput | ItemCreateOrConnectWithoutBoardInput[]
    createMany?: ItemCreateManyBoardInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProjectUpdateOneRequiredWithoutBoardNestedInput = {
    create?: XOR<ProjectCreateWithoutBoardInput, ProjectUncheckedCreateWithoutBoardInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBoardInput
    upsert?: ProjectUpsertWithoutBoardInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBoardInput, ProjectUpdateWithoutBoardInput>, ProjectUncheckedUpdateWithoutBoardInput>
  }

  export type ItemUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ItemCreateWithoutBoardInput, ItemUncheckedCreateWithoutBoardInput> | ItemCreateWithoutBoardInput[] | ItemUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBoardInput | ItemCreateOrConnectWithoutBoardInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutBoardInput | ItemUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ItemCreateManyBoardInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutBoardInput | ItemUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutBoardInput | ItemUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutBoardNestedInput = {
    create?: XOR<ItemCreateWithoutBoardInput, ItemUncheckedCreateWithoutBoardInput> | ItemCreateWithoutBoardInput[] | ItemUncheckedCreateWithoutBoardInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutBoardInput | ItemCreateOrConnectWithoutBoardInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutBoardInput | ItemUpsertWithWhereUniqueWithoutBoardInput[]
    createMany?: ItemCreateManyBoardInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutBoardInput | ItemUpdateWithWhereUniqueWithoutBoardInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutBoardInput | ItemUpdateManyWithWhereWithoutBoardInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type BoardCreateNestedOneWithoutItemInput = {
    create?: XOR<BoardCreateWithoutItemInput, BoardUncheckedCreateWithoutItemInput>
    connectOrCreate?: BoardCreateOrConnectWithoutItemInput
    connect?: BoardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutItemInput = {
    create?: XOR<UserCreateWithoutItemInput, UserUncheckedCreateWithoutItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCategoryCreateNestedOneWithoutItemInput = {
    create?: XOR<ItemCategoryCreateWithoutItemInput, ItemCategoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutItemInput
    connect?: ItemCategoryWhereUniqueInput
  }

  export type EnumItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.ItemStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoardUpdateOneWithoutItemNestedInput = {
    create?: XOR<BoardCreateWithoutItemInput, BoardUncheckedCreateWithoutItemInput>
    connectOrCreate?: BoardCreateOrConnectWithoutItemInput
    upsert?: BoardUpsertWithoutItemInput
    disconnect?: BoardWhereInput | boolean
    delete?: BoardWhereInput | boolean
    connect?: BoardWhereUniqueInput
    update?: XOR<XOR<BoardUpdateToOneWithWhereWithoutItemInput, BoardUpdateWithoutItemInput>, BoardUncheckedUpdateWithoutItemInput>
  }

  export type UserUpdateOneWithoutItemNestedInput = {
    create?: XOR<UserCreateWithoutItemInput, UserUncheckedCreateWithoutItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemInput
    upsert?: UserUpsertWithoutItemInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemInput, UserUpdateWithoutItemInput>, UserUncheckedUpdateWithoutItemInput>
  }

  export type ItemCategoryUpdateOneWithoutItemNestedInput = {
    create?: XOR<ItemCategoryCreateWithoutItemInput, ItemCategoryUncheckedCreateWithoutItemInput>
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutItemInput
    upsert?: ItemCategoryUpsertWithoutItemInput
    disconnect?: ItemCategoryWhereInput | boolean
    delete?: ItemCategoryWhereInput | boolean
    connect?: ItemCategoryWhereUniqueInput
    update?: XOR<XOR<ItemCategoryUpdateToOneWithWhereWithoutItemInput, ItemCategoryUpdateWithoutItemInput>, ItemCategoryUncheckedUpdateWithoutItemInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectCreateNestedOneWithoutItemCategoryInput = {
    create?: XOR<ProjectCreateWithoutItemCategoryInput, ProjectUncheckedCreateWithoutItemCategoryInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemCategoryInput
    connect?: ProjectWhereUniqueInput
  }

  export type ItemCreateNestedManyWithoutItemCategoryInput = {
    create?: XOR<ItemCreateWithoutItemCategoryInput, ItemUncheckedCreateWithoutItemCategoryInput> | ItemCreateWithoutItemCategoryInput[] | ItemUncheckedCreateWithoutItemCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutItemCategoryInput | ItemCreateOrConnectWithoutItemCategoryInput[]
    createMany?: ItemCreateManyItemCategoryInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ItemUncheckedCreateNestedManyWithoutItemCategoryInput = {
    create?: XOR<ItemCreateWithoutItemCategoryInput, ItemUncheckedCreateWithoutItemCategoryInput> | ItemCreateWithoutItemCategoryInput[] | ItemUncheckedCreateWithoutItemCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutItemCategoryInput | ItemCreateOrConnectWithoutItemCategoryInput[]
    createMany?: ItemCreateManyItemCategoryInputEnvelope
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutItemCategoryNestedInput = {
    create?: XOR<ProjectCreateWithoutItemCategoryInput, ProjectUncheckedCreateWithoutItemCategoryInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutItemCategoryInput
    upsert?: ProjectUpsertWithoutItemCategoryInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutItemCategoryInput, ProjectUpdateWithoutItemCategoryInput>, ProjectUncheckedUpdateWithoutItemCategoryInput>
  }

  export type ItemUpdateManyWithoutItemCategoryNestedInput = {
    create?: XOR<ItemCreateWithoutItemCategoryInput, ItemUncheckedCreateWithoutItemCategoryInput> | ItemCreateWithoutItemCategoryInput[] | ItemUncheckedCreateWithoutItemCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutItemCategoryInput | ItemCreateOrConnectWithoutItemCategoryInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutItemCategoryInput | ItemUpsertWithWhereUniqueWithoutItemCategoryInput[]
    createMany?: ItemCreateManyItemCategoryInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutItemCategoryInput | ItemUpdateWithWhereUniqueWithoutItemCategoryInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutItemCategoryInput | ItemUpdateManyWithWhereWithoutItemCategoryInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type ItemUncheckedUpdateManyWithoutItemCategoryNestedInput = {
    create?: XOR<ItemCreateWithoutItemCategoryInput, ItemUncheckedCreateWithoutItemCategoryInput> | ItemCreateWithoutItemCategoryInput[] | ItemUncheckedCreateWithoutItemCategoryInput[]
    connectOrCreate?: ItemCreateOrConnectWithoutItemCategoryInput | ItemCreateOrConnectWithoutItemCategoryInput[]
    upsert?: ItemUpsertWithWhereUniqueWithoutItemCategoryInput | ItemUpsertWithWhereUniqueWithoutItemCategoryInput[]
    createMany?: ItemCreateManyItemCategoryInputEnvelope
    set?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    disconnect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    delete?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    connect?: ItemWhereUniqueInput | ItemWhereUniqueInput[]
    update?: ItemUpdateWithWhereUniqueWithoutItemCategoryInput | ItemUpdateWithWhereUniqueWithoutItemCategoryInput[]
    updateMany?: ItemUpdateManyWithWhereWithoutItemCategoryInput | ItemUpdateManyWithWhereWithoutItemCategoryInput[]
    deleteMany?: ItemScalarWhereInput | ItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCategoryCreateNestedManyWithoutProjectInput = {
    create?: XOR<ItemCategoryCreateWithoutProjectInput, ItemCategoryUncheckedCreateWithoutProjectInput> | ItemCategoryCreateWithoutProjectInput[] | ItemCategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutProjectInput | ItemCategoryCreateOrConnectWithoutProjectInput[]
    createMany?: ItemCategoryCreateManyProjectInputEnvelope
    connect?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
  }

  export type MyProjectCreateNestedManyWithoutProjectInput = {
    create?: XOR<MyProjectCreateWithoutProjectInput, MyProjectUncheckedCreateWithoutProjectInput> | MyProjectCreateWithoutProjectInput[] | MyProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MyProjectCreateOrConnectWithoutProjectInput | MyProjectCreateOrConnectWithoutProjectInput[]
    createMany?: MyProjectCreateManyProjectInputEnvelope
    connect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
  }

  export type BoardCreateNestedManyWithoutProjectInput = {
    create?: XOR<BoardCreateWithoutProjectInput, BoardUncheckedCreateWithoutProjectInput> | BoardCreateWithoutProjectInput[] | BoardUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutProjectInput | BoardCreateOrConnectWithoutProjectInput[]
    createMany?: BoardCreateManyProjectInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type ItemCategoryUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ItemCategoryCreateWithoutProjectInput, ItemCategoryUncheckedCreateWithoutProjectInput> | ItemCategoryCreateWithoutProjectInput[] | ItemCategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutProjectInput | ItemCategoryCreateOrConnectWithoutProjectInput[]
    createMany?: ItemCategoryCreateManyProjectInputEnvelope
    connect?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
  }

  export type MyProjectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MyProjectCreateWithoutProjectInput, MyProjectUncheckedCreateWithoutProjectInput> | MyProjectCreateWithoutProjectInput[] | MyProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MyProjectCreateOrConnectWithoutProjectInput | MyProjectCreateOrConnectWithoutProjectInput[]
    createMany?: MyProjectCreateManyProjectInputEnvelope
    connect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
  }

  export type BoardUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<BoardCreateWithoutProjectInput, BoardUncheckedCreateWithoutProjectInput> | BoardCreateWithoutProjectInput[] | BoardUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutProjectInput | BoardCreateOrConnectWithoutProjectInput[]
    createMany?: BoardCreateManyProjectInputEnvelope
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
  }

  export type EnumProjectScopeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectScope
  }

  export type UserUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectInput
    upsert?: UserUpsertWithoutProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectInput, UserUpdateWithoutProjectInput>, UserUncheckedUpdateWithoutProjectInput>
  }

  export type ItemCategoryUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ItemCategoryCreateWithoutProjectInput, ItemCategoryUncheckedCreateWithoutProjectInput> | ItemCategoryCreateWithoutProjectInput[] | ItemCategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutProjectInput | ItemCategoryCreateOrConnectWithoutProjectInput[]
    upsert?: ItemCategoryUpsertWithWhereUniqueWithoutProjectInput | ItemCategoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ItemCategoryCreateManyProjectInputEnvelope
    set?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
    disconnect?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
    delete?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
    connect?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
    update?: ItemCategoryUpdateWithWhereUniqueWithoutProjectInput | ItemCategoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ItemCategoryUpdateManyWithWhereWithoutProjectInput | ItemCategoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ItemCategoryScalarWhereInput | ItemCategoryScalarWhereInput[]
  }

  export type MyProjectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MyProjectCreateWithoutProjectInput, MyProjectUncheckedCreateWithoutProjectInput> | MyProjectCreateWithoutProjectInput[] | MyProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MyProjectCreateOrConnectWithoutProjectInput | MyProjectCreateOrConnectWithoutProjectInput[]
    upsert?: MyProjectUpsertWithWhereUniqueWithoutProjectInput | MyProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MyProjectCreateManyProjectInputEnvelope
    set?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    disconnect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    delete?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    connect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    update?: MyProjectUpdateWithWhereUniqueWithoutProjectInput | MyProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MyProjectUpdateManyWithWhereWithoutProjectInput | MyProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MyProjectScalarWhereInput | MyProjectScalarWhereInput[]
  }

  export type BoardUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BoardCreateWithoutProjectInput, BoardUncheckedCreateWithoutProjectInput> | BoardCreateWithoutProjectInput[] | BoardUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutProjectInput | BoardCreateOrConnectWithoutProjectInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutProjectInput | BoardUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BoardCreateManyProjectInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutProjectInput | BoardUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutProjectInput | BoardUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type ItemCategoryUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ItemCategoryCreateWithoutProjectInput, ItemCategoryUncheckedCreateWithoutProjectInput> | ItemCategoryCreateWithoutProjectInput[] | ItemCategoryUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ItemCategoryCreateOrConnectWithoutProjectInput | ItemCategoryCreateOrConnectWithoutProjectInput[]
    upsert?: ItemCategoryUpsertWithWhereUniqueWithoutProjectInput | ItemCategoryUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ItemCategoryCreateManyProjectInputEnvelope
    set?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
    disconnect?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
    delete?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
    connect?: ItemCategoryWhereUniqueInput | ItemCategoryWhereUniqueInput[]
    update?: ItemCategoryUpdateWithWhereUniqueWithoutProjectInput | ItemCategoryUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ItemCategoryUpdateManyWithWhereWithoutProjectInput | ItemCategoryUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ItemCategoryScalarWhereInput | ItemCategoryScalarWhereInput[]
  }

  export type MyProjectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MyProjectCreateWithoutProjectInput, MyProjectUncheckedCreateWithoutProjectInput> | MyProjectCreateWithoutProjectInput[] | MyProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MyProjectCreateOrConnectWithoutProjectInput | MyProjectCreateOrConnectWithoutProjectInput[]
    upsert?: MyProjectUpsertWithWhereUniqueWithoutProjectInput | MyProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MyProjectCreateManyProjectInputEnvelope
    set?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    disconnect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    delete?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    connect?: MyProjectWhereUniqueInput | MyProjectWhereUniqueInput[]
    update?: MyProjectUpdateWithWhereUniqueWithoutProjectInput | MyProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MyProjectUpdateManyWithWhereWithoutProjectInput | MyProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MyProjectScalarWhereInput | MyProjectScalarWhereInput[]
  }

  export type BoardUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<BoardCreateWithoutProjectInput, BoardUncheckedCreateWithoutProjectInput> | BoardCreateWithoutProjectInput[] | BoardUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: BoardCreateOrConnectWithoutProjectInput | BoardCreateOrConnectWithoutProjectInput[]
    upsert?: BoardUpsertWithWhereUniqueWithoutProjectInput | BoardUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: BoardCreateManyProjectInputEnvelope
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[]
    update?: BoardUpdateWithWhereUniqueWithoutProjectInput | BoardUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: BoardUpdateManyWithWhereWithoutProjectInput | BoardUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMyProjectInput = {
    create?: XOR<UserCreateWithoutMyProjectInput, UserUncheckedCreateWithoutMyProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyProjectInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutMyProjectInput = {
    create?: XOR<ProjectCreateWithoutMyProjectInput, ProjectUncheckedCreateWithoutMyProjectInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMyProjectInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumProjectRoleFieldUpdateOperationsInput = {
    set?: $Enums.ProjectRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMyProjectNestedInput = {
    create?: XOR<UserCreateWithoutMyProjectInput, UserUncheckedCreateWithoutMyProjectInput>
    connectOrCreate?: UserCreateOrConnectWithoutMyProjectInput
    upsert?: UserUpsertWithoutMyProjectInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMyProjectInput, UserUpdateWithoutMyProjectInput>, UserUncheckedUpdateWithoutMyProjectInput>
  }

  export type ProjectUpdateOneRequiredWithoutMyProjectNestedInput = {
    create?: XOR<ProjectCreateWithoutMyProjectInput, ProjectUncheckedCreateWithoutMyProjectInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMyProjectInput
    upsert?: ProjectUpsertWithoutMyProjectInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMyProjectInput, ProjectUpdateWithoutMyProjectInput>, ProjectUncheckedUpdateWithoutMyProjectInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusFilter<$PrismaModel> | $Enums.ItemStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemStatus | EnumItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemStatus[] | ListEnumItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.ItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemStatusFilter<$PrismaModel>
    _max?: NestedEnumItemStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumProjectScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectScope | EnumProjectScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectScope[] | ListEnumProjectScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectScope[] | ListEnumProjectScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectScopeFilter<$PrismaModel> | $Enums.ProjectScope
  }

  export type NestedEnumProjectScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectScope | EnumProjectScopeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectScope[] | ListEnumProjectScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectScope[] | ListEnumProjectScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectScopeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectScopeFilter<$PrismaModel>
    _max?: NestedEnumProjectScopeFilter<$PrismaModel>
  }

  export type NestedEnumProjectRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleFilter<$PrismaModel> | $Enums.ProjectRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectRole | EnumProjectRoleFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectRole[] | ListEnumProjectRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectRoleWithAggregatesFilter<$PrismaModel> | $Enums.ProjectRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectRoleFilter<$PrismaModel>
    _max?: NestedEnumProjectRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutUserInput = {
    title: string
    description: string
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    ItemCategory?: ItemCategoryCreateNestedManyWithoutProjectInput
    MyProject?: MyProjectCreateNestedManyWithoutProjectInput
    Board?: BoardCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    ItemCategory?: ItemCategoryUncheckedCreateNestedManyWithoutProjectInput
    MyProject?: MyProjectUncheckedCreateNestedManyWithoutProjectInput
    Board?: BoardUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ItemCreateWithoutUserInput = {
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    board?: BoardCreateNestedOneWithoutItemInput
    itemCategory?: ItemCategoryCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    boardId?: number | null
    itemCategoryId?: number | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutUserInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput>
  }

  export type ItemCreateManyUserInputEnvelope = {
    data: ItemCreateManyUserInput | ItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MyProjectCreateWithoutUserInput = {
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutMyProjectInput
  }

  export type MyProjectUncheckedCreateWithoutUserInput = {
    id?: number
    projectId: number
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyProjectCreateOrConnectWithoutUserInput = {
    where: MyProjectWhereUniqueInput
    create: XOR<MyProjectCreateWithoutUserInput, MyProjectUncheckedCreateWithoutUserInput>
  }

  export type MyProjectCreateManyUserInputEnvelope = {
    data: MyProjectCreateManyUserInput | MyProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    authorId?: IntFilter<"Project"> | number
    projectScope?: EnumProjectScopeFilter<"Project"> | $Enums.ProjectScope
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ItemUpsertWithWhereUniqueWithoutUserInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutUserInput, ItemUncheckedUpdateWithoutUserInput>
    create: XOR<ItemCreateWithoutUserInput, ItemUncheckedCreateWithoutUserInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutUserInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutUserInput, ItemUncheckedUpdateWithoutUserInput>
  }

  export type ItemUpdateManyWithWhereWithoutUserInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutUserInput>
  }

  export type ItemScalarWhereInput = {
    AND?: ItemScalarWhereInput | ItemScalarWhereInput[]
    OR?: ItemScalarWhereInput[]
    NOT?: ItemScalarWhereInput | ItemScalarWhereInput[]
    id?: IntFilter<"Item"> | number
    content?: StringFilter<"Item"> | string
    description?: StringNullableFilter<"Item"> | string | null
    status?: EnumItemStatusFilter<"Item"> | $Enums.ItemStatus
    boardId?: IntNullableFilter<"Item"> | number | null
    userId?: IntNullableFilter<"Item"> | number | null
    itemCategoryId?: IntNullableFilter<"Item"> | number | null
    start?: DateTimeNullableFilter<"Item"> | Date | string | null
    end?: DateTimeNullableFilter<"Item"> | Date | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
  }

  export type MyProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: MyProjectWhereUniqueInput
    update: XOR<MyProjectUpdateWithoutUserInput, MyProjectUncheckedUpdateWithoutUserInput>
    create: XOR<MyProjectCreateWithoutUserInput, MyProjectUncheckedCreateWithoutUserInput>
  }

  export type MyProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: MyProjectWhereUniqueInput
    data: XOR<MyProjectUpdateWithoutUserInput, MyProjectUncheckedUpdateWithoutUserInput>
  }

  export type MyProjectUpdateManyWithWhereWithoutUserInput = {
    where: MyProjectScalarWhereInput
    data: XOR<MyProjectUpdateManyMutationInput, MyProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type MyProjectScalarWhereInput = {
    AND?: MyProjectScalarWhereInput | MyProjectScalarWhereInput[]
    OR?: MyProjectScalarWhereInput[]
    NOT?: MyProjectScalarWhereInput | MyProjectScalarWhereInput[]
    id?: IntFilter<"MyProject"> | number
    userId?: IntFilter<"MyProject"> | number
    projectId?: IntFilter<"MyProject"> | number
    role?: EnumProjectRoleFilter<"MyProject"> | $Enums.ProjectRole
    isFavorite?: BoolFilter<"MyProject"> | boolean
    createdAt?: DateTimeFilter<"MyProject"> | Date | string
    updatedAt?: DateTimeFilter<"MyProject"> | Date | string
  }

  export type ProjectCreateWithoutBoardInput = {
    title: string
    description: string
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectInput
    ItemCategory?: ItemCategoryCreateNestedManyWithoutProjectInput
    MyProject?: MyProjectCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBoardInput = {
    id?: number
    title: string
    description: string
    authorId: number
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    ItemCategory?: ItemCategoryUncheckedCreateNestedManyWithoutProjectInput
    MyProject?: MyProjectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBoardInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBoardInput, ProjectUncheckedCreateWithoutBoardInput>
  }

  export type ItemCreateWithoutBoardInput = {
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutItemInput
    itemCategory?: ItemCategoryCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutBoardInput = {
    id?: number
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    userId?: number | null
    itemCategoryId?: number | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutBoardInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutBoardInput, ItemUncheckedCreateWithoutBoardInput>
  }

  export type ItemCreateManyBoardInputEnvelope = {
    data: ItemCreateManyBoardInput | ItemCreateManyBoardInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutBoardInput = {
    update: XOR<ProjectUpdateWithoutBoardInput, ProjectUncheckedUpdateWithoutBoardInput>
    create: XOR<ProjectCreateWithoutBoardInput, ProjectUncheckedCreateWithoutBoardInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBoardInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBoardInput, ProjectUncheckedUpdateWithoutBoardInput>
  }

  export type ProjectUpdateWithoutBoardInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectNestedInput
    ItemCategory?: ItemCategoryUpdateManyWithoutProjectNestedInput
    MyProject?: MyProjectUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemCategory?: ItemCategoryUncheckedUpdateManyWithoutProjectNestedInput
    MyProject?: MyProjectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ItemUpsertWithWhereUniqueWithoutBoardInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutBoardInput, ItemUncheckedUpdateWithoutBoardInput>
    create: XOR<ItemCreateWithoutBoardInput, ItemUncheckedCreateWithoutBoardInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutBoardInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutBoardInput, ItemUncheckedUpdateWithoutBoardInput>
  }

  export type ItemUpdateManyWithWhereWithoutBoardInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutBoardInput>
  }

  export type BoardCreateWithoutItemInput = {
    title: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutItemInput = {
    id?: number
    title: string
    projectId: number
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardCreateOrConnectWithoutItemInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutItemInput, BoardUncheckedCreateWithoutItemInput>
  }

  export type UserCreateWithoutItemInput = {
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectCreateNestedManyWithoutUserInput
    MyProject?: MyProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemInput = {
    id?: number
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    MyProject?: MyProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemInput, UserUncheckedCreateWithoutItemInput>
  }

  export type ItemCategoryCreateWithoutItemInput = {
    category: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutItemCategoryInput
  }

  export type ItemCategoryUncheckedCreateWithoutItemInput = {
    id?: number
    projectId: number
    category: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCategoryCreateOrConnectWithoutItemInput = {
    where: ItemCategoryWhereUniqueInput
    create: XOR<ItemCategoryCreateWithoutItemInput, ItemCategoryUncheckedCreateWithoutItemInput>
  }

  export type BoardUpsertWithoutItemInput = {
    update: XOR<BoardUpdateWithoutItemInput, BoardUncheckedUpdateWithoutItemInput>
    create: XOR<BoardCreateWithoutItemInput, BoardUncheckedCreateWithoutItemInput>
    where?: BoardWhereInput
  }

  export type BoardUpdateToOneWithWhereWithoutItemInput = {
    where?: BoardWhereInput
    data: XOR<BoardUpdateWithoutItemInput, BoardUncheckedUpdateWithoutItemInput>
  }

  export type BoardUpdateWithoutItemInput = {
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    projectId?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutItemInput = {
    update: XOR<UserUpdateWithoutItemInput, UserUncheckedUpdateWithoutItemInput>
    create: XOR<UserCreateWithoutItemInput, UserUncheckedCreateWithoutItemInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemInput, UserUncheckedUpdateWithoutItemInput>
  }

  export type UserUpdateWithoutItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateManyWithoutUserNestedInput
    MyProject?: MyProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    MyProject?: MyProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemCategoryUpsertWithoutItemInput = {
    update: XOR<ItemCategoryUpdateWithoutItemInput, ItemCategoryUncheckedUpdateWithoutItemInput>
    create: XOR<ItemCategoryCreateWithoutItemInput, ItemCategoryUncheckedCreateWithoutItemInput>
    where?: ItemCategoryWhereInput
  }

  export type ItemCategoryUpdateToOneWithWhereWithoutItemInput = {
    where?: ItemCategoryWhereInput
    data: XOR<ItemCategoryUpdateWithoutItemInput, ItemCategoryUncheckedUpdateWithoutItemInput>
  }

  export type ItemCategoryUpdateWithoutItemInput = {
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutItemCategoryNestedInput
  }

  export type ItemCategoryUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateWithoutItemCategoryInput = {
    title: string
    description: string
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectInput
    MyProject?: MyProjectCreateNestedManyWithoutProjectInput
    Board?: BoardCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutItemCategoryInput = {
    id?: number
    title: string
    description: string
    authorId: number
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    MyProject?: MyProjectUncheckedCreateNestedManyWithoutProjectInput
    Board?: BoardUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutItemCategoryInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutItemCategoryInput, ProjectUncheckedCreateWithoutItemCategoryInput>
  }

  export type ItemCreateWithoutItemCategoryInput = {
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    board?: BoardCreateNestedOneWithoutItemInput
    user?: UserCreateNestedOneWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutItemCategoryInput = {
    id?: number
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    boardId?: number | null
    userId?: number | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutItemCategoryInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutItemCategoryInput, ItemUncheckedCreateWithoutItemCategoryInput>
  }

  export type ItemCreateManyItemCategoryInputEnvelope = {
    data: ItemCreateManyItemCategoryInput | ItemCreateManyItemCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutItemCategoryInput = {
    update: XOR<ProjectUpdateWithoutItemCategoryInput, ProjectUncheckedUpdateWithoutItemCategoryInput>
    create: XOR<ProjectCreateWithoutItemCategoryInput, ProjectUncheckedCreateWithoutItemCategoryInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutItemCategoryInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutItemCategoryInput, ProjectUncheckedUpdateWithoutItemCategoryInput>
  }

  export type ProjectUpdateWithoutItemCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectNestedInput
    MyProject?: MyProjectUpdateManyWithoutProjectNestedInput
    Board?: BoardUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutItemCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MyProject?: MyProjectUncheckedUpdateManyWithoutProjectNestedInput
    Board?: BoardUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ItemUpsertWithWhereUniqueWithoutItemCategoryInput = {
    where: ItemWhereUniqueInput
    update: XOR<ItemUpdateWithoutItemCategoryInput, ItemUncheckedUpdateWithoutItemCategoryInput>
    create: XOR<ItemCreateWithoutItemCategoryInput, ItemUncheckedCreateWithoutItemCategoryInput>
  }

  export type ItemUpdateWithWhereUniqueWithoutItemCategoryInput = {
    where: ItemWhereUniqueInput
    data: XOR<ItemUpdateWithoutItemCategoryInput, ItemUncheckedUpdateWithoutItemCategoryInput>
  }

  export type ItemUpdateManyWithWhereWithoutItemCategoryInput = {
    where: ItemScalarWhereInput
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyWithoutItemCategoryInput>
  }

  export type UserCreateWithoutProjectInput = {
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemCreateNestedManyWithoutUserInput
    MyProject?: MyProjectCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectInput = {
    id?: number
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutUserInput
    MyProject?: MyProjectUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
  }

  export type ItemCategoryCreateWithoutProjectInput = {
    category: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemCreateNestedManyWithoutItemCategoryInput
  }

  export type ItemCategoryUncheckedCreateWithoutProjectInput = {
    id?: number
    category: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutItemCategoryInput
  }

  export type ItemCategoryCreateOrConnectWithoutProjectInput = {
    where: ItemCategoryWhereUniqueInput
    create: XOR<ItemCategoryCreateWithoutProjectInput, ItemCategoryUncheckedCreateWithoutProjectInput>
  }

  export type ItemCategoryCreateManyProjectInputEnvelope = {
    data: ItemCategoryCreateManyProjectInput | ItemCategoryCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type MyProjectCreateWithoutProjectInput = {
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMyProjectInput
  }

  export type MyProjectUncheckedCreateWithoutProjectInput = {
    id?: number
    userId: number
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyProjectCreateOrConnectWithoutProjectInput = {
    where: MyProjectWhereUniqueInput
    create: XOR<MyProjectCreateWithoutProjectInput, MyProjectUncheckedCreateWithoutProjectInput>
  }

  export type MyProjectCreateManyProjectInputEnvelope = {
    data: MyProjectCreateManyProjectInput | MyProjectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type BoardCreateWithoutProjectInput = {
    title: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemCreateNestedManyWithoutBoardInput
  }

  export type BoardUncheckedCreateWithoutProjectInput = {
    id?: number
    title: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Item?: ItemUncheckedCreateNestedManyWithoutBoardInput
  }

  export type BoardCreateOrConnectWithoutProjectInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutProjectInput, BoardUncheckedCreateWithoutProjectInput>
  }

  export type BoardCreateManyProjectInputEnvelope = {
    data: BoardCreateManyProjectInput | BoardCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectInput = {
    update: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
    create: XOR<UserCreateWithoutProjectInput, UserUncheckedCreateWithoutProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectInput, UserUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateWithoutProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUpdateManyWithoutUserNestedInput
    MyProject?: MyProjectUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutUserNestedInput
    MyProject?: MyProjectUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemCategoryUpsertWithWhereUniqueWithoutProjectInput = {
    where: ItemCategoryWhereUniqueInput
    update: XOR<ItemCategoryUpdateWithoutProjectInput, ItemCategoryUncheckedUpdateWithoutProjectInput>
    create: XOR<ItemCategoryCreateWithoutProjectInput, ItemCategoryUncheckedCreateWithoutProjectInput>
  }

  export type ItemCategoryUpdateWithWhereUniqueWithoutProjectInput = {
    where: ItemCategoryWhereUniqueInput
    data: XOR<ItemCategoryUpdateWithoutProjectInput, ItemCategoryUncheckedUpdateWithoutProjectInput>
  }

  export type ItemCategoryUpdateManyWithWhereWithoutProjectInput = {
    where: ItemCategoryScalarWhereInput
    data: XOR<ItemCategoryUpdateManyMutationInput, ItemCategoryUncheckedUpdateManyWithoutProjectInput>
  }

  export type ItemCategoryScalarWhereInput = {
    AND?: ItemCategoryScalarWhereInput | ItemCategoryScalarWhereInput[]
    OR?: ItemCategoryScalarWhereInput[]
    NOT?: ItemCategoryScalarWhereInput | ItemCategoryScalarWhereInput[]
    id?: IntFilter<"ItemCategory"> | number
    projectId?: IntFilter<"ItemCategory"> | number
    category?: StringFilter<"ItemCategory"> | string
    color?: StringNullableFilter<"ItemCategory"> | string | null
    createdAt?: DateTimeFilter<"ItemCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ItemCategory"> | Date | string
  }

  export type MyProjectUpsertWithWhereUniqueWithoutProjectInput = {
    where: MyProjectWhereUniqueInput
    update: XOR<MyProjectUpdateWithoutProjectInput, MyProjectUncheckedUpdateWithoutProjectInput>
    create: XOR<MyProjectCreateWithoutProjectInput, MyProjectUncheckedCreateWithoutProjectInput>
  }

  export type MyProjectUpdateWithWhereUniqueWithoutProjectInput = {
    where: MyProjectWhereUniqueInput
    data: XOR<MyProjectUpdateWithoutProjectInput, MyProjectUncheckedUpdateWithoutProjectInput>
  }

  export type MyProjectUpdateManyWithWhereWithoutProjectInput = {
    where: MyProjectScalarWhereInput
    data: XOR<MyProjectUpdateManyMutationInput, MyProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type BoardUpsertWithWhereUniqueWithoutProjectInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutProjectInput, BoardUncheckedUpdateWithoutProjectInput>
    create: XOR<BoardCreateWithoutProjectInput, BoardUncheckedCreateWithoutProjectInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutProjectInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutProjectInput, BoardUncheckedUpdateWithoutProjectInput>
  }

  export type BoardUpdateManyWithWhereWithoutProjectInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutProjectInput>
  }

  export type BoardScalarWhereInput = {
    AND?: BoardScalarWhereInput | BoardScalarWhereInput[]
    OR?: BoardScalarWhereInput[]
    NOT?: BoardScalarWhereInput | BoardScalarWhereInput[]
    id?: IntFilter<"Board"> | number
    title?: StringFilter<"Board"> | string
    projectId?: IntFilter<"Board"> | number
    color?: StringNullableFilter<"Board"> | string | null
    createdAt?: DateTimeFilter<"Board"> | Date | string
    updatedAt?: DateTimeFilter<"Board"> | Date | string
  }

  export type UserCreateWithoutMyProjectInput = {
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectCreateNestedManyWithoutUserInput
    Item?: ItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMyProjectInput = {
    id?: number
    name: string
    email: string
    password: string
    image?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Project?: ProjectUncheckedCreateNestedManyWithoutUserInput
    Item?: ItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMyProjectInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMyProjectInput, UserUncheckedCreateWithoutMyProjectInput>
  }

  export type ProjectCreateWithoutMyProjectInput = {
    title: string
    description: string
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProjectInput
    ItemCategory?: ItemCategoryCreateNestedManyWithoutProjectInput
    Board?: BoardCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMyProjectInput = {
    id?: number
    title: string
    description: string
    authorId: number
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
    ItemCategory?: ItemCategoryUncheckedCreateNestedManyWithoutProjectInput
    Board?: BoardUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMyProjectInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMyProjectInput, ProjectUncheckedCreateWithoutMyProjectInput>
  }

  export type UserUpsertWithoutMyProjectInput = {
    update: XOR<UserUpdateWithoutMyProjectInput, UserUncheckedUpdateWithoutMyProjectInput>
    create: XOR<UserCreateWithoutMyProjectInput, UserUncheckedCreateWithoutMyProjectInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMyProjectInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMyProjectInput, UserUncheckedUpdateWithoutMyProjectInput>
  }

  export type UserUpdateWithoutMyProjectInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUpdateManyWithoutUserNestedInput
    Item?: ItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMyProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Project?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    Item?: ItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutMyProjectInput = {
    update: XOR<ProjectUpdateWithoutMyProjectInput, ProjectUncheckedUpdateWithoutMyProjectInput>
    create: XOR<ProjectCreateWithoutMyProjectInput, ProjectUncheckedCreateWithoutMyProjectInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMyProjectInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMyProjectInput, ProjectUncheckedUpdateWithoutMyProjectInput>
  }

  export type ProjectUpdateWithoutMyProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectNestedInput
    ItemCategory?: ItemCategoryUpdateManyWithoutProjectNestedInput
    Board?: BoardUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMyProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemCategory?: ItemCategoryUncheckedUpdateManyWithoutProjectNestedInput
    Board?: BoardUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyUserInput = {
    id?: number
    title: string
    description: string
    projectScope?: $Enums.ProjectScope
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateManyUserInput = {
    id?: number
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    boardId?: number | null
    itemCategoryId?: number | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyProjectCreateManyUserInput = {
    id?: number
    projectId: number
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemCategory?: ItemCategoryUpdateManyWithoutProjectNestedInput
    MyProject?: MyProjectUpdateManyWithoutProjectNestedInput
    Board?: BoardUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ItemCategory?: ItemCategoryUncheckedUpdateManyWithoutProjectNestedInput
    MyProject?: MyProjectUncheckedUpdateManyWithoutProjectNestedInput
    Board?: BoardUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    projectScope?: EnumProjectScopeFieldUpdateOperationsInput | $Enums.ProjectScope
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneWithoutItemNestedInput
    itemCategory?: ItemCategoryUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    boardId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    boardId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyProjectUpdateWithoutUserInput = {
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMyProjectNestedInput
  }

  export type MyProjectUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyProjectUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyBoardInput = {
    id?: number
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    userId?: number | null
    itemCategoryId?: number | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutBoardInput = {
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutItemNestedInput
    itemCategory?: ItemCategoryUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    itemCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateManyItemCategoryInput = {
    id?: number
    content: string
    description?: string | null
    status?: $Enums.ItemStatus
    boardId?: number | null
    userId?: number | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateWithoutItemCategoryInput = {
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    board?: BoardUpdateOneWithoutItemNestedInput
    user?: UserUpdateOneWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutItemCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    boardId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyWithoutItemCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumItemStatusFieldUpdateOperationsInput | $Enums.ItemStatus
    boardId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCategoryCreateManyProjectInput = {
    id?: number
    category: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MyProjectCreateManyProjectInput = {
    id?: number
    userId: number
    role?: $Enums.ProjectRole
    isFavorite: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoardCreateManyProjectInput = {
    id?: number
    title: string
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCategoryUpdateWithoutProjectInput = {
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUpdateManyWithoutItemCategoryNestedInput
  }

  export type ItemCategoryUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutItemCategoryNestedInput
  }

  export type ItemCategoryUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyProjectUpdateWithoutProjectInput = {
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMyProjectNestedInput
  }

  export type MyProjectUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MyProjectUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    role?: EnumProjectRoleFieldUpdateOperationsInput | $Enums.ProjectRole
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoardUpdateWithoutProjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Item?: ItemUncheckedUpdateManyWithoutBoardNestedInput
  }

  export type BoardUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardCountOutputTypeDefaultArgs instead
     */
    export type BoardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCategoryCountOutputTypeDefaultArgs instead
     */
    export type ItemCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardDefaultArgs instead
     */
    export type BoardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemCategoryDefaultArgs instead
     */
    export type ItemCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MyProjectDefaultArgs instead
     */
    export type MyProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MyProjectDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}