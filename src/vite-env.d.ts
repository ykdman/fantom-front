/// <reference types="vite/client" />

// module CSS 사용을 위한 선언
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
