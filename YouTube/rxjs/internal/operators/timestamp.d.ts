import { OperatorFunction, SchedulerLike, Timestamp as TimestampInterface } from '../types';
/**
 * Attaches a timestamp to each item emitted by an observable indicating when it was emitted
 *
 * The `timestamp` operator maps the *source* observable stream to an object of type
 * `{value: T, timestamp: R}`. The properties are generically typed. The `value` property contains the value
 * and type of the *source* observable. The `timestamp` is generated by the schedulers `now` function. By
 * default it uses the *async* scheduler which simply returns `Date.now()` (milliseconds since 1970/01/01
 * 00:00:00:000) and therefore is of type `number`.
 *
 * ![](timestamp.png)
 *
 * ## Example
 *
 * In this example there is a timestamp attached to the documents click event.
 *
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { timestamp } from 'rxjs/operators';
 *
 * const clickWithTimestamp = fromEvent(document, 'click').pipe(
 *   timestamp()
 * );
 *
 * // Emits data of type {value: MouseEvent, timestamp: number}
 * clickWithTimestamp.subscribe(data => {
 *   console.log(data);
 * });
 * ```
 *
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
export declare function timestamp<T>(scheduler?: SchedulerLike): OperatorFunction<T, Timestamp<T>>;
export declare class Timestamp<T> implements TimestampInterface<T> {
    value: T;
    timestamp: number;
    constructor(value: T, timestamp: number);
}
