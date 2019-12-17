import { parse} from 'qs';
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path: string) {
  return reg.test(path);
}

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export function isAntDesignProOrDev() {
  const { NODE_ENV } = process.env;
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  if (NODE_ENV === 'development') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}