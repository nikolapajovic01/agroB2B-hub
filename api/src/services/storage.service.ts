import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid'
import { CONFIG } from '../config'

interface FileUpload {
  buffer: Buffer
  originalname: string
  mimetype: string
}

export class StorageService {
  private s3Client: S3Client

  constructor() {
    if (
      !CONFIG.AWS_ACCESS_KEY_ID ||
      !CONFIG.AWS_SECRET_ACCESS_KEY ||
      !CONFIG.AWS_REGION ||
      !CONFIG.AWS_BUCKET_NAME
    ) {
      throw new Error('Missing AWS S3 configuration in environment variables')
    }

    this.s3Client = new S3Client({
      region: CONFIG.AWS_REGION,
      credentials: {
        accessKeyId: CONFIG.AWS_ACCESS_KEY_ID,
        secretAccessKey: CONFIG.AWS_SECRET_ACCESS_KEY,
      },
    })
  }

  async uploadFile(file: FileUpload): Promise<string> {
    const fileName = `${uuidv4()}-${file.originalname}`

    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: CONFIG.AWS_BUCKET_NAME,
        Key: fileName,
        Body: file.buffer,
        ContentType: file.mimetype,
      })
    )

    return `https://${CONFIG.AWS_BUCKET_NAME}.s3.${CONFIG.AWS_REGION}.amazonaws.com/${fileName}`
  }
}
