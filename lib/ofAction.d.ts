import { ActionCreator, Action, AnyAction } from 'typescript-fsa';
import { OperatorFunction } from 'rxjs';
export declare function ofAction<A>(ac1: ActionCreator<A>): OperatorFunction<AnyAction, Action<A>>;
export declare function ofAction<A, B>(ac1: ActionCreator<A>, ac2: ActionCreator<B>): OperatorFunction<AnyAction, Action<A | B>>;
export declare function ofAction<A, B, C>(ac1: ActionCreator<A>, ac2: ActionCreator<B>, ac3: ActionCreator<C>): OperatorFunction<AnyAction, Action<A | B | C>>;
export declare function ofAction<A, B, C, D>(ac1: ActionCreator<A>, ac2: ActionCreator<B>, ac3: ActionCreator<C>, ac4: ActionCreator<D>): OperatorFunction<AnyAction, Action<A | B | C | D>>;
export declare function ofAction<A, B, C, D, E>(ac1: ActionCreator<A>, ac2: ActionCreator<B>, ac3: ActionCreator<C>, ac4: ActionCreator<D>, ac5: ActionCreator<E>): OperatorFunction<AnyAction, Action<A | B | C | D | E>>;
export declare function ofAction<A, B, C, D, E, F>(ac1: ActionCreator<A>, ac2: ActionCreator<B>, ac3: ActionCreator<C>, ac4: ActionCreator<D>, ac5: ActionCreator<E>, ac6: ActionCreator<F>): OperatorFunction<AnyAction, Action<A | B | C | D | E | F>>;
export declare function ofAction<A, B, C, D, E, F, G>(ac1: ActionCreator<A>, ac2: ActionCreator<B>, ac3: ActionCreator<C>, ac4: ActionCreator<D>, ac5: ActionCreator<E>, ac6: ActionCreator<F>, ac7: ActionCreator<G>): OperatorFunction<AnyAction, Action<A | B | C | D | E | F | G>>;
export declare function ofAction<A, B, C, D, E, F, G, H>(ac1: ActionCreator<A>, ac2: ActionCreator<B>, ac3: ActionCreator<C>, ac4: ActionCreator<D>, ac5: ActionCreator<E>, ac6: ActionCreator<F>, ac7: ActionCreator<G>, ac8: ActionCreator<H>): OperatorFunction<AnyAction, Action<A | B | C | D | E | F | G | H>>;
export declare function ofAction<A, B, C, D, E, F, G, H, I>(ac1: ActionCreator<A>, ac2: ActionCreator<B>, ac3: ActionCreator<C>, ac4: ActionCreator<D>, ac5: ActionCreator<E>, ac6: ActionCreator<F>, ac7: ActionCreator<G>, ac8: ActionCreator<H>, ac9: ActionCreator<I>): OperatorFunction<AnyAction, Action<A | B | C | D | E | F | G | H | I>>;
export declare function ofAction<P>(...acs: ActionCreator<P>[]): OperatorFunction<AnyAction, Action<P>>;
