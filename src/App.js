import { useEffect, useState } from 'react'
import { toBase64, bufferToBase64 } from './ultils/common'
import avatarAnonymous from './assets/anon.jpg'
import { apiUpdateUser, apiGetcurrent } from './apis/callAPI'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  const [image, setImage] = useState('')
  const [currentData, setCurrentData] = useState({})
  const [updateState, setUpdateState] = useState(false) // lúc làm thì lưu currentData ở redux, rồi dùng useSelector để tự update, chứ k update làm thủ công như này

  useEffect(() => {
    const fetchCurrent = async () => {
      const response = await apiGetcurrent()
      response?.data.status === 0 && setCurrentData(response.data.user)
    }
    fetchCurrent()
  }, [updateState]) // chỗ này bỏ dependency isLoggedIn và currentData lấy từ redux vào.


  const handleImage = async (e) => {
    e.stopPropagation()
    const { type } = e.target.files[0]
    if (type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png') {
      let imageBase64 = await toBase64(e.target.files[0])
      setImage(imageBase64)
    } else {
      toast.info('Type image is not supported.');
    }
  }

  const handleUpdate = async () => {
    const response = await apiUpdateUser({ avatar: image })
    if (response?.data) {
      toast.info(response.data.message)
      setImage('')
      setUpdateState(prev => !prev)
    }
  }


  return (
    <>
      <div className="flex flex-col justify-start items-center mt-8">
        <div className='flex flex-col items-center gap-3 mb-12'>
          <h3 className='font-medium'>Avatar hiện tại:</h3>
          <img
            src={bufferToBase64(currentData.avatar) || currentData.avatarUrl || avatarAnonymous}
            alt="avatar"
            className='w-48 h-48 object-cover rounded-full'
          />
        </div>
        <div className='w-1/2'>
          <label className='bg-orange-700 text-white rounded-md w-fit px-4 py-2 opacity-90 hover:opacity-100 cursor-pointer' htmlFor="avatar">Chọn ảnh</label>
          <input
            hidden
            type="file"
            id="avatar"
            file={image}
            onChange={handleImage}
          />
          <div className='flex flex-col gap-3 mt-5'>
            <h3>Preview:</h3>
            <div className='flex  justify-center items-center p-6 rounded-md bg-gray-200'>
              {image
                ? <img
                  src={image}
                  alt="preview"
                  className='w-48 h-48 object-cover rounded-full'
                />
                : <div className=' flex flex-col items-center justify-center gap-5'>
                  <p>Chưa có ảnh nào được chọn.</p>
                  <small className='text-gray-400'>Chỉ hỗ trợ file có type JPEG, JPG, PNG</small>
                </div>}
            </div>
            <button
              type='button'
              className='px-4 py-2 bg-blue-700 text-white rounded-md my-5 w-fit'
              onClick={handleUpdate}
            >
              Cập nhật
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: "rgb(31,31,31)", color: 'white' }}
      />
    </>
  );
}

export default App;
