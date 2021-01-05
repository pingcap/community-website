const fs = require('fs')
const axios = require('axios')

async function downloadBySIGName(SIGName) {
  const apiLearningMaterials = `https://raw.githubusercontent.com/pingcap/community/master/special-interest-groups/sig-${SIGName}/README.md`
  try {
    const responseLearningMaterials = await axios.get(apiLearningMaterials)
    const apiDataLearningMaterials = responseLearningMaterials.data || {}
    fs.writeFile(`markdown/SIGReadme/${SIGName}.md`, apiDataLearningMaterials, err => console.error(err))
  } catch (e) {
    console.error('downloadBySIGName error', e)
  }
}

async function getAllSIGName() {
  const api = 'https://bots.tidb.io/ti-community-bot/sigs'
  const response = await axios.get(api)
  const items = response.data.data.sigs || []
  return items.map(item => item.name)
}

async function downloadAll() {
  const SIGNames = await getAllSIGName()
  console.log('getAllSIGName', SIGNames)
  for (const SIGName of SIGNames) {
    console.log('downloadBySIGName started', SIGName)
    await downloadBySIGName(SIGName)
    console.log('downloadBySIGName completed', SIGName)
  }
}

downloadAll().then(data => console.log(data))
