import * as API from "./api"

export const GetUrl = (params)=>{
  return API.GET('/sysmeter/'+params)
}

export const GetGjsjList = (params)=>{
  return API.POST('/pdjc/queryGjst',params)
}