interface EventListener<T = unknown> {
    (data: T): void;
}

declare type EventListenerData<T> = {
    listener: EventListener<T>,
    context?: Object
};

export class SimpleEventEmitter<E extends string | number | symbol> {
    private events: Map<E, Array<EventListenerData<any>>> = new Map();

    constructor() { }

    public getListeners(name: E): Array<EventListenerData<any>> {
        return this.events.get(name) ?? [];
    }

    public clear(name?: E): void {
        if (name) {
            this.events.delete(name);
        } else {
            this.events.clear();
        }
    }

    public on<T>(name: E, listener: EventListener<T>, context?: Object): EventListener<T> {
        const listenerData = { listener: listener, context: context } as EventListenerData<T>;
        const list = this.getListeners(name);
        list.push(listenerData);
        this.events.set(name, list);
        return listener;
    }

    public off<T>(name: E, listener: EventListener<T>) {
        const list = this.getListeners(name);

        const index = list.findIndex(function (item) {
            return listener === item.listener;
        }, this);

        if (index < 0) return;

        list.splice(index, 1);

        if (!list.length) this.events.delete(name);
    }

    public emit<T>(name: E, data: T) {
        const list = this.getListeners(name);

        list.slice(0).forEach(function (item: EventListenerData<T>) {
            item.listener.apply(item.context ?? null, [data]);
        });
    }

    public once<T>(name: E, listener: EventListener<T>, context?: Object): EventListener<T> {
        const callback = (data: T) => {
            this.off(name, callback);
            listener.apply(context ?? null, [data]);
        };
        this.on(name, callback);
        return listener;
    }
}

