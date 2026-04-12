import type{IH1Props,IH2Props,IH3Props} from "./PageTitle.contract";
// interface IH1Props {
//     className: string;
//     children: ReactNode;
// }
export const H1 = ({ className = 'text-green-900', children }: Readonly<IH1Props>) => {
    return (
        <h1 className={`text-6xl font-semibold ${className}`}>
            {children}
        </h1>
    );
}


export const H2 = ({ className = 'text-green-950', children }: Readonly<IH1Props>) => {
    return (
        <h2 className={`text-4xl font-semibold ${className}`}>
            {children}
        </h2>
    );
}

export const H3 = ({ className = 'text-green-900', children }: Readonly<IH1Props>) => {
    return (
        <h3 className={`text-3xl font-semibold ${className}`}>
            {children}
        </h3>
    );
}