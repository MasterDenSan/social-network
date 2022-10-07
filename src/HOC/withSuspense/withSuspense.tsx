import React, {FC} from "react";


export const WithSuspense = (Component: FC) => {
    return (props: any) => {
        return <React.Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </React.Suspense>
    };
};



