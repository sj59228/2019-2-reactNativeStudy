import { Config } from '@react-native-community/cli';
interface ConfigCommandTask {
    (argv: string[], config: Config, args: Record<string, any>): Promise<void>;
}
export declare const trackTask: (pageName: string, task: ConfigCommandTask) => (argv: string[], config: Config, args: Record<string, any>) => Promise<void>;
export {};
