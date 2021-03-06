import Chain from './chain'

export default class Link {
  constructor (interceptor) {
    this.taroInterceptor = interceptor
    this.chain = new Chain()
  }

  request (requestParams) {
    this.chain.interceptors.push(this.taroInterceptor)
    return this.chain.proceed({ ...requestParams })
  }

  addInterceptor (interceptor) {
    this.chain.interceptors.push(interceptor)
  }
}
