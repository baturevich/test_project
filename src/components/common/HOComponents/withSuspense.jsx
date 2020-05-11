import React from 'react';
import AppPreloader from '../AppPreloader/AppPreloader'
const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<AppPreloader/>}>
            <Component {...props} />
        </React.Suspense>
    }
}
export default withSuspense;