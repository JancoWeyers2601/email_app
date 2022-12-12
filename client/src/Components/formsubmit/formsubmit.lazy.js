import React, { lazy, Suspense } from 'react';

const LazyFormsubmit = lazy(() => import('./Formsubmit'));

const Formsubmit = props => (
  <Suspense fallback={null}>
    <LazyFormsubmit {...props} />
  </Suspense>
);

export default Formsubmit;
