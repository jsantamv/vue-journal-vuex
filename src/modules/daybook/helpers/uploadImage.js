import cloudanaryApi from "@/api/cloudanary.api"

const upLoadImage = async (file) => {
    if (!file) return

    try {

        const formData = new FormData()
        formData.append('upload_preset', 'curso-vue')
        formData.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dlkeaojyg/image/upload'
        const { data } = await cloudanaryApi.post(url, formData)

        console.log(data);

        return data.secure_url

    } catch (error) {
        console.log('error al subir archivo');
        console.error(error)
    }
}

export default upLoadImage