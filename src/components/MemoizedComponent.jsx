import React from "react";

const MemoizedComponent = ({ num }) => {
  console.log("Rendering Memoized component");
  return <div>This is a Memoized component: - {num}</div>;
};

export default React.memo(MemoizedComponent);

// const MemoizedComponent = React.memo(({ num }) => {
//   console.log("Rendering Memoized component");
//   return <div>This is a Memoized component: - {num}</div>;
// });

// export default MemoizedComponent;
