// 错误示例：没有默认导出
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};


export default MyApp; // 关键：默认导出组件