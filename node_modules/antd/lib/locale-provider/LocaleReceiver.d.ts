import * as React from 'react';
import { Locale } from '.';
export interface LocaleReceiverProps<C extends keyof Locale = keyof Locale> {
    componentName: C;
    defaultLocale?: Locale[C] | (() => Locale[C]);
    children: (locale: Exclude<Locale[C], undefined>, localeCode?: string, fullLocale?: object) => React.ReactNode;
}
export default class LocaleReceiver<C extends keyof Locale = keyof Locale> extends React.Component<LocaleReceiverProps<C>> {
    static defaultProps: {
        componentName: string;
    };
    static contextType: React.Context<(Partial<Locale> & {
        exist?: boolean | undefined;
    }) | undefined>;
    getLocale(): Exclude<Locale[C], undefined>;
    getLocaleCode(): any;
    render(): React.ReactNode;
}
declare type LocaleComponent = keyof Locale;
export declare function useLocaleReceiver<T extends LocaleComponent>(componentName: T, defaultLocale?: Locale[T] | Function): [Locale[T]];
export {};
