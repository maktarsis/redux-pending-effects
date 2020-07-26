declare namespace Actions {
  enum PATENTS_ACTION_TYPES {
    GET = 'GET_PATENTS',
    PENDING = 'GET_PATENTS_PENDING',
    FULFILLED = 'GET_PATENTS_FULFILLED',
    REJECTED = 'GET_PATENTS_REJECTED'
  }

  interface GetPatents {
    type: ReturnType<typeof PATENTS_ACTION_TYPES.GET>,
    payload: Promise<Global.PatentDataShape[] | { statusText: string }>
  }

  interface GetPatentsPending {
    type:  ReturnType<typeof PATENTS_ACTION_TYPES.PENDING>,
  }

  interface GetPatentsFulFilled {
    type:  ReturnType<typeof PATENTS_ACTION_TYPES.FULFILLED>,
    payload: Global.PatentDataShape[]
  }

  interface GetPatentsRejected {
    type:  ReturnType<typeof PATENTS_ACTION_TYPES.REJECTED>,
    payload: { statusText: string }
  }

  type PatentsTypes =
    | GetPatents
    | GetPatentsPending
    | GetPatentsFulFilled
    | GetPatentsRejected
}