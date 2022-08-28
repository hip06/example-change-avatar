import axios from 'axios'

// export const apiDeleteUser = (id) => new Promise(async (resolve, reject) => {
//     try {
//         const response = await axios({
//             url: 'http://localhost:8888/api/v1/admin/user/delete',
//             method: 'delete',
//             params: {
//                 // id: ['083290db-7047-41ed-90c8-d218dca90ddf', '1355f2c0-f8e8-4823-bdae-131740609475'] => ví dụ xóa nhiều user
//                 // id: ['21068fbd-2337-48c8-abb3-8ffff5f843f6'] => xóa 1 user
//             },
//             headers: {
//                 authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhNDFmOTQ2LTYwYzktNDIyNy05OWE1LWUwNTljZTNlOWUyNiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY2MTU2ODUzMCwiZXhwIjoxNjYxNzQxMzMwfQ.Ng_NKSgxhWvUBJyilEgWd4L3SrnNndWa8PSR5_BM1R8'
//             }
//         })
//         resolve(response)

//     } catch (error) {
//         reject(error)
//     }
// })
export const apiUpdateUser = (payload) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: 'http://localhost:8888/api/v1/user/update',
            method: 'put',
            data: payload,
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzNjA4MDk5LTE3MDUtNDdmOC04MDI5LTNkNmI1MDU3YTQzZSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY2MTY1ODEyMywiZXhwIjoxNjYxODMwOTIzfQ.ewe0ZLcs2tIr2e9fyLLj0pA0b2mDaztesT0DMyZlht0'
            }
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})
export const apiGetcurrent = () => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            url: 'http://localhost:8888/api/v1/user/get-current',
            method: 'get',
            headers: {
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzNjA4MDk5LTE3MDUtNDdmOC04MDI5LTNkNmI1MDU3YTQzZSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY2MTY1ODEyMywiZXhwIjoxNjYxODMwOTIzfQ.ewe0ZLcs2tIr2e9fyLLj0pA0b2mDaztesT0DMyZlht0'
            }
        })
        resolve(response)

    } catch (error) {
        reject(error)
    }
})