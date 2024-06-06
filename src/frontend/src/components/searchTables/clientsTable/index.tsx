import './style.scss'
import { SheetsTable } from './sheets-table'
import { ModelsTable } from './models-table'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import CustomTabPanel from './custonTabPanel'

export const ClientsTable = () => {
  const [value, setValue] = useState(0)

  const handleChange = (_event: unknown, newValue: number) => {
    setValue(newValue)
  }

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  return (
    <div>
      <div className="tableBlock">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Modelos" {...a11yProps(0)} />
            <Tab label="Planilhas" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <ModelsTable />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <SheetsTable />
        </CustomTabPanel>
      </div>
    </div>
  )
}
