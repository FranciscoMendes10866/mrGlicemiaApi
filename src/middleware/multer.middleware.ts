import multer from 'multer'
import { CloudinaryStorage } from 'multer-storage-cloudinary'

import cloudinaryConfig from '../config/cloudinary.config'

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryConfig,
  params: {
    folder: 'glicemiaPics'
  }
})

const parser = multer({ storage: storage })

export default parser
