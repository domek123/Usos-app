import 'react-i18next';
import type { Resources } from './i18n/resources';

declare module 'react-i18next' {
    interface CustomTypeOptions {
        resources: Resources['pl'];
        defaultNS: 'main';
    }
}