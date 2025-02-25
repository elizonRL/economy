import app from './src/app'
import 'dotenv/config'
import { info } from './src/utils/logger'
import config from './src/utils/config'

const port = config.PORT

app.listen(port, () => {
  info(`Server is running on port ${port}`)
})
